import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProfile, isAuthenticated } from '../auth/index';
import { getCart } from '../cart/cartApi';

const CheckOut = ({ products }) => {
  const [total, setTotal] = useState({});
  const [profile, setProfile] = useState({});

  const {
    user: { userNumber },
  } = isAuthenticated();
  console.log(userNumber);

  const getTotalOfCart = () => {
    getCart(userNumber)
      .then((data) => {
        console.log(data.cartTotal);
        setTotal(data.cartTotal);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTotalOfCart();
    getProfile(userNumber)
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [total]);

  useEffect(() => {
    getProfile(userNumber)
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(total);
  const { totalValue } = total;
  var amount = totalValue * 100;

  const showCheckOut = () => {
    return isAuthenticated() ? (
      <div>
        <Link to='/setaddress'>
          <button className='btn btn-success mb-4 mr-4'>Proceed To Buy</button>
        </Link>
      </div>
    ) : (
      <Link to='/signin'>
        <button className='btn btn-primary'>Signin To CheckOut</button>
      </Link>
    );
  };

  const placeOrder = () => {
    return <button className='btn btn-success mb-4'>Place Order</button>;
  };

  const table = () => {
    console.log(total);
    return (
      total && (
        <table class='table table-borderless table-light'>
          <tbody>
            <tr>
              <th scope='row'>PRICE DETAILS</th>
            </tr>
            <tr>
              <th scope='row'>Total MRP</th>
              <td>₹{total.totalValue}</td>
            </tr>
            <tr>
              <th scope='row'>Discount on MRP</th>
              <td style={{ color: 'green' }}>₹{total.discount}</td>
            </tr>
            <tr>
              <th scope='row'>Total Gst</th>
              <td>₹{total.totalGst}</td>
            </tr>
            <tr>
              <th scope='row'>Total Delivery Charge</th>
              <td>₹{total.totalDeliveryCharge}</td>
            </tr>
            <hr />
            <tr>
              <th scope='row'>Total Amount</th>
              <td style={{ fontWeight: 'bold' }}>₹{total.totalPrice}</td>
            </tr>
            <tr>
              <th scope='row'>Total Plus Points</th>
              <td>{total.totalPlusPoints}</td>
            </tr>
          </tbody>
        </table>
      )
    );
  };

  return (
    <div>
      {/* <h6>Tota</h6> */}
      {table()}
      {/* <h2>Total: ${JSON.stringify(total)}</h2> */}
      {showCheckOut()}
    </div>
  );
};

export default CheckOut;
