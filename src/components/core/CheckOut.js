import React, {  useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {  isAuthenticated } from '../auth/index';

const CheckOut = ({ products, cartSummary }) => {
  // console.log(cartSummary)
  const [summary_data, setSummary] = useState({});
  const [profile, setProfile] = useState({});
  // setSummary(cartSummary)

  // const userNumber = isAuthenticated().user.userNumber


  // if(summary_data.length == 0){
  //   getCartSummary({userNumber})
  //     .then((data) => {
  //       console.log(data)
  //       setSummary(data[0]);
  //     })
  //     .catch((error) => {
  //       // alert(error);
  //     });
  // }

  // useEffect(() => {
    
    
  //   // getProfile(userNumber)
  //   //   .then((data) => {
  //   //     setProfile(data);
  //   //   })
  //   //   .catch((error) => {
  //   //     alert(error);
  //   //   });
  // }, [summary_data]);

  // useEffect(() => {
  //   getProfile(userNumber)
  //     .then((data) => {
  //       setProfile(data);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, []);

  // const { totalValue } = summary_data;
  // var amount = totalValue * 100;
  const history = useHistory()

  const handleClick = (e) => {
    // console.log(profile)
    if(profile.petName === ''){
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
              <span>₹{summary_data.totalPrice}</span>
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
    <div className='col-md-3 order-last'>
      {/* <h6>Tota</h6> */}
      {table()}
      {/* <h2>Total: ${JSON.stringify(total)}</h2> */}
      {showCheckOut()}
    </div>
  );
};

export default CheckOut;
