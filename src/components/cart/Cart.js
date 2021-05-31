import React, { useState, useEffect } from 'react';
import { deleteCart, getCart } from './cartApi';
import Card from '../core/Card';
import CheckOut from '../core/CheckOut';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/index';
import Heading from '../core/Heading'


const Cart = () => {
  useEffect(() => {
    getItemsInCart();
  }, []);
  const [items, setItems] = useState([]);

  const {
    user: { userNumber },
  } = isAuthenticated();

  const getItemsInCart = () => {
    getCart(userNumber)
      .then((data) => {
        setItems(data.cart);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(items);

  const showItems = (items) => {
    return (
      <div>
        <h5>Your Cart has {`${items.length}`} items</h5>

        {/* {items.map((product, i)=>{
                return product && <Card key={i} product={product} showAddToButton={false} cartUpdate={true} showRemoveProductButton = {true} />          
            })} */}

        {items.map((p, i) => {
          return (
            p && (
              <div className="row">
              <div
                key={i}
                className='col-xl-4 col-lg-6 col-12 col-md-3 product mb-3'
              >
                <Card data={p} cartUpdate={true} showAddToButton={false} />
              </div>
              </div>
            )
          );
        })}
      </div>
    );
  };

  const noItemsMessage = () => {
    return (
      <div className="text-center d-flex flex-column align-items-center">
      <h3>
        Your Cart is Empty
      </h3>
      <div className="w-200 p-3 border rounded-circle mb-3 shadow bg-light h-200 d-flex justify-content-center">
        <img src={require('../../images/emptycart.svg').default} alt='nocartimg' className="w-75"/>
      </div>
      <Link to='/shopping' className="btn btn-primary">Shop Now</Link>
      </div>
    );
  };
  //delete items in cart
  const deleteItemsInCart = () => {
    deleteCart(userNumber)
      .then((data) => {
        if (data.status === 'Success') {
          setItems([]);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Heading text="Cart"></Heading>
      <div className="container my-3">
      <div className='row justify-content-center'>
        
          {items !== undefined &&
            (items.length > 0 ? (
              <CheckOut products={items} />
            ) : (
              <div className='d-none'></div>
            ))}
          {/* <p>show checkout options, payent options</p> */}
        
        <div className='col-md-9 col-12'>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
          {items.length > 0 ? (
            <button className='btn btn-danger mb-4' onClick={deleteItemsInCart}>
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
