import React, { useState, useEffect } from 'react';
// import { deleteCart } from './cartApi';
import { getCart, deleteCart, getCartSummary } from '../auth/api';
import Card from '../core/Card';
// import CheckOut from '../core/CheckOut';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated } from '../auth/index';
import Heading from '../core/Heading';

const userNumber = isAuthenticated() !== false ? isAuthenticated().data[0].user_mobile : ''

// console.log(isAuthenticated())


const Cart = () => {

  const [items, setItems] = useState([]);
  const [summary_data, setSummary] = useState([]);

  useEffect(() => {
    const getItemsInCart = () => {
      // console.log(userNumber)
      getCart({userNumber})
        .then((data) => {
          setItems(data);
        })
        .catch((err) => {
          // alert(err);
        });
        
    };
    const getPrice = () => {
      getCartSummary({userNumber})
        .then((data) => {
          setSummary(data[0]);
        })
        .catch((error) => {
          // alert(error);
        });
    }
    getItemsInCart();
    getPrice();
  }, [summary_data]);
  
  
  const showItems = (items) => {
    return (
      <div>
        <h5>Your Cart has {`${items.length}`} items</h5>

        {/* {items.map((product, i)=>{
                return product && <Card key={i} product={product} showAddToButton={false} cartUpdate={true} showRemoveProductButton = {true} />          
            })} */}
        <div className='row'>
          {items.map((p, i) => {
            return (
              p && (
                <div
                  key={i}
                  className='col-xl-4 col-lg-6 col-12 col-md-3 product mb-3'
                >
                  <Card
                    data={p}
                    cartUpdate={true}
                    showAddToButton={false}
                    cartPage={true}
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  };

  const noItemsMessage = () => {
    return (
      <div className='text-center d-flex flex-column align-items-center'>
        <h3>Your Cart is Empty</h3>
        <div className='w-200 p-3 border rounded-circle mb-3 shadow bg-light h-200 d-flex justify-content-center'>
          <img
            src={require('../../images/emptycart.svg').default}
            alt='nocartimg'
            className='w-75'
          />
        </div>
        <Link to='/shopping' className='btn btn-primary'>
          Shop Now
        </Link>
      </div>
    );
  };

  //delete items in cart
  const deleteItemsInCart = () => {
    deleteCart({userNumber})
      .then((data) => {
        if (data === 'success') {
          setItems([]);
        }
      })
      .catch((err) => alert(err));
  };

  const history = useHistory()
  const handleClick = (e) => {
    // console.log(profile)
    if(userNumber === ''){
      history.push('/profile')
    }
    else {
      history.push('/setaddress')
    }
  }

  const showCheckOut = () => {
    return isAuthenticated() ? (
      <div>
        {/* <Link to='/setaddress'> */}
          <button className='btn btn-success mb-4 mr-4 mt-3' onClick={(e) => handleClick(e)}>
            Proceed To Buy
          </button>
        {/* </Link> */}
      </div>
    ) : (
      <Link to='/signin'>
        <button className='btn btn-primary'>Signin To CheckOut</button>
      </Link>
    );
  };

  const table = () => {
    return (
      summary_data && (
        <>
          <h6 className='mb-4'>Your Cart Summary</h6>
          <div className='bg-white p-2'>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total MRP :</h6>
              <span>₹{summary_data.mrp}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Discount on MRP :</h6>
              <span>₹{Math.round(summary_data.discount, 2)}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total Gst :</h6>
              <span>₹{summary_data.gst}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total Delivery Charge :</h6>
              <span>₹{summary_data.delivery}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total Amount :</h6>
              <span>₹{summary_data.mrp - summary_data.discount}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total Plus Points :</h6>
              <span>₹{summary_data.totalPlusPoints}</span>
            </div>
          </div>
        </>
      )
    );
  };

  return (
    <>
      <Heading text='Cart'></Heading>
      <div className='container my-3'>
        <div className='row justify-content-center'>
          {items !== undefined &&
            (items.length > 0 ? (
              <div className='col-md-3 order-last'>
                {/* <h6>Tota</h6> */}
                {table()}
                {/* <h2>Total: ${JSON.stringify(total)}</h2> */}
                {showCheckOut()}
              </div>
            ) : (
              <div className='d-none'></div>
            ))}

          <div className='col-md-9 col-12'>
            {items.length > 0 ? showItems(items) : noItemsMessage()}
            {items.length > 0 ? (
              <button
                className='btn btn-danger mb-4'
                onClick={deleteItemsInCart}
              >
                Clear items
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
