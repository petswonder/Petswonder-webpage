import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import emptycart from '../../images/emptycart.png';
import { getOrderHistory, isAuthenticated } from '../auth/index';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const {
    jwt,
    user: { userNumber },
  } = isAuthenticated();

  useEffect(() => {
    getOrderHistory(userNumber)
      .then((data) => {
        setOrderHistory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const emptyOrderHistory = () => {
    return (
      <div>
        <h1>No Order History</h1>
        <img src={emptycart} alt='' />
      </div>
    );
  };

  return (
    <div className='container'>
      <br />
      <Heading text='Order History' />
      <br />

      {orderHistory.length > 0 ? (
        <div className='row p-2'>
          {orderHistory.map((order) => {
            const { date, orderStatus, paymentType, productDetails } = order;
            var time = new Date(date);

            return (
              <div
                className='col-12 my-5 d-flex justify-content-between align-items-center '
                style={{ border: '2px solid grey', borderRadius: '7px' }}
              >
                <div className='m-3 text-left'>
                  <div>
                    <p>ORDER PLACED: {time.toDateString()}</p>
                    <p>
                      PRICE:
                      {productDetails && productDetails[0].priceAfterDiscount}
                    </p>

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
                  <span class='badge bg-warning rounded-pill text-dark m-3 '>
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
  );
};

export default OrderHistory;
