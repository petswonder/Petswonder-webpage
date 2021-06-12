import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getProfile, isAuthenticated } from '../auth/index';
import { getCart } from '../cart/cartApi';

const CheckOut = ({ products }) => {
  const [total, setTotal] = useState({});
  const [profile, setProfile] = useState({});

  const {
    user: { userNumber },
  } = isAuthenticated();

  const getTotalOfCart = () => {
    getCart(userNumber)
      .then((data) => {
        // console.log(data);
        setTotal(data.cartTotal);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getTotalOfCart();
    getProfile(userNumber)
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [total]);

  useEffect(() => {
    getProfile(userNumber)
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const { totalValue } = total;
  // var amount = totalValue * 100;
  const history = useHistory()

  const handleClick = (e) => {
    // console.log(profile)
    if(profile.petName == ''){
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

  // const placeOrder = () => {
  //   return <button className='btn btn-success mb-4'>Place Order</button>;
  // };

  const table = () => {
    return (
      total && (
        <>
          <h6 className='mb-4'>Your Cart Summary</h6>
          <div className='bg-white p-2'>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total MRP :</h6>
              <span>₹{total.totalValue}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Discount on MRP :</h6>
              <span>₹{Math.round(total.discount, 2)}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total Gst :</h6>
              <span>₹{total.totalGst}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total Delivery Charge :</h6>
              <span>₹{total.totalDeliveryCharge}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total Amount :</h6>
              <span>₹{total.totalPrice}</span>
            </div>
            <div className='d-flex'>
              <h6 className='font-weight-bold mr-2'>Total Plus Points :</h6>
              <span>₹{total.totalPlusPoints}</span>
            </div>
          </div>
        </>
      )
    );
  };

  return (
    <div className='col-md-3 order-last'>
      {/* <h6>Tota</h6> */}
      {table()}
      {/* <h2>Total: ${JSON.stringify(total)}</h2> */}
      {showCheckOut()}
    </div>
  );
};

export default CheckOut;
