import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { deleteCart, getTotal, saveOrder } from '../cart/cartApi';
import { getProfile, isAuthenticated } from '../auth/index';
import logo from '../../images/logo1.png';
import Heading from './Heading';
import { UncontrolledAlert } from 'reactstrap';

const Payment = () => {
  const [total, setTotal] = useState({});
  const [order, setOrder] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [d, setData] = useState({});

  const {
    user: { userNumber },
  } = isAuthenticated();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    getTotalOfCart();
    getOrderId();
  }, []);

  const { totalPrice } = total;
  const l = totalPrice;
  var am = l * 100;

  const options = {
    key: 'rzp_live_1P3qqDk71fnJ6t',
    amount: am, //  =amount to be paid
    currency: 'INR',
    name: 'PetsWonder',
    order_id: order.id,
    description: 'Pay for your order',
    image: { logo },
    handler: function (response) {
      const data = {
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };
      setData(data);
      console.log(d);
      setRedirect(true);
    },
    theme: {
      color: 'blue',
      hide_topbar: false,
    },
  };

  var rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response) {
    console.log(response.error.code);
    alert(response.error.description);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
  });

  const openPayModal = (e) => {
    rzp1.open();
    e.preventDefault();
  };

  const getTotalOfCart = () => {
    getTotal(userNumber)
      .then((data) => {
        setTotal(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrderId = () => {
    const order = {
      amount: am,
      currency: 'INR',
    };
    saveOrder(order)
      .then((data) => {
        setOrder(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCOD = () => {};

  const showCheckOut = () => {
    return isAuthenticated() ? (
      <div>
        <button onClick={openPayModal} className='btn btn-success mb-4 mr-4'>
          Pay Online
        </button>
        <button onClick={handleCOD()} className='btn btn-success mb-4'>
          Cash On Delivery
        </button>
      </div>
    ) : (
      <Link to='/signin'>
        <button className='btn btn-primary'>Signin To CheckOut</button>
      </Link>
    );
  };

  const table = () => {
    return (
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
    );
  };

  const redirectToCart = () => {
    deleteCart(userNumber);
    return <Redirect to='/cart' />;
  };

  return (
    <div className='container'>
      {d && <UncontrolledAlert color='info'>{d}</UncontrolledAlert>}
      <br />
      {/* <h2 className="mt-8 payment"></h2> */}
      <Heading text='Make Payment' />
      <br />
      {table()}
      {/* <h2>Total: ${JSON.stringify(total)}</h2> */}
      {showCheckOut()}
      {redirect && redirectToCart()}
    </div>
  );
};

export default Payment;
