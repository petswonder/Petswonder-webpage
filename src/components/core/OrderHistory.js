import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import { getOrderHistory, isAuthenticated } from '../auth/index';
import { Link } from 'react-router-dom';


const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const userNumber = isAuthenticated().user.userNumber


  useEffect(() => {
    getOrderHistory(userNumber)
      .then((data) => {
        setOrderHistory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userNumber]);

  const emptyOrderHistory = () => {
    return (
      <div className="d-flex flex-column align-items-center my-3">
        <h5>No Order History</h5>
        <div className="w-200 p-3 border rounded-circle mb-3 shadow bg-light h-200 d-flex justify-content-center">
          <img src={require('../../images/emptycart.svg').default} alt='nocartimg' className="w-75"/>
        </div>
        <Link to='/shopping' className="btn btn-primary">Shop Now</Link>
      </div>
    );
  };

  return (
    <>
    <Heading text='Order History' />
    <div className='container'>
      
      {orderHistory && orderHistory.length > 0 ? (
        <div className='row p-2'>
          {orderHistory.map((order) => {
            const { date, orderStatus, totalPrice, productDetails } = order;
            var time = new Date(date);

            return (
              <div
                className='col-12 my-5 d-flex justify-content-between align-items-center '
                style={{ border: '2px solid grey', borderRadius: '7px' }} key={order.id}
              >
                <div className='m-3 text-left'>
                  <div>
                    <p>ORDER PLACED: {time.toDateString()}</p>
                    <p>PRICE: {totalPrice}</p>
                    <div>
                      {productDetails.map((product) => {
                        const { productTitle } = product;
                        return (
                          <div>
                            <p>{productTitle}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <span className='badge bg-warning rounded-pill text-dark m-3 '>
                    {orderStatus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        emptyOrderHistory()
      )}
    </div>
    </>
  );
};

export default OrderHistory;
