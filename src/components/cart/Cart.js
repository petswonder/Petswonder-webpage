import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { deleteCart, getCart } from './cartApi';
import Card from '../core/Card';
import CheckOut from '../core/CheckOut';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/index';
import emptycart from '../../images/emptycart.png';

const Cart = () => {
  useEffect(() => {
    getItemsInCart();
  }, []);
  const [items, setItems] = useState([]);

  const {
    user: { userNumber },
  } = isAuthenticated();
  console.log(userNumber);

  const getItemsInCart = () => {
    getCart(userNumber)
      .then((data) => {
        console.log(data);
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
        <h2>Your Cart has {`${items.length}`} items</h2>

        <hr />
        {/* {items.map((product, i)=>{
                return product && <Card key={i} product={product} showAddToButton={false} cartUpdate={true} showRemoveProductButton = {true} />          
            })} */}

        {items.map((p, i) => {
          return (
            p && (
              <div
                key={i}
                className='col-xl-4 col-lg-6 col-12 product'
                style={{ display: 'inline-block' }}
              >
                <Card data={p} cartUpdate={true} showAddToButton={false} />
              </div>
            )
          );
        })}
      </div>
    );
  };

  const noItemsMessage = () => {
    return (
      <h3>
        Your Cart is Empty
        <br />
        <br />
        <span class='badge badge-warning'>
          <Link to='/shopping'>Shop Now</Link>
        </span>
      </h3>
    );
  };
  //delete items in cart
  const deleteItemsInCart = () => {
    deleteCart(userNumber)
      .then((data) => {
        console.log(data.status);
        if (data.status === 'Success') {
          setItems([]);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout
      title='Cart'
      description='View products added to cart'
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-md-3 col-12'>
          <h2 className='mb-4'>Your Cart Summary</h2>
          {console.log(items, '$')}

          {items !== undefined &&
            (items.length > 0 ? (
              <CheckOut products={items} />
            ) : (
              <img src={emptycart} alt='' />
            ))}
          {/* <p>show checkout options, payent options</p> */}
        </div>
        <div className='col-md-9 col-12'>
          {console.log(items)}
          {items.length > 0 ? showItems(items) : noItemsMessage()}
          {items.length > 0 ? (
            <button className='btn btn-danger mb-4' onClick={deleteItemsInCart}>
              Clear items
            </button>
          ) : (
            <div></div>
          )}
          {}
        </div>
      </div>
      {/* {showItems(items)} */}
    </Layout>
  );
};

export default Cart;
