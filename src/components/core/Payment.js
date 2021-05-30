import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { deleteCart, getCart, getTotal, saveOrder } from '../cart/cartApi';
import { getProfile, isAuthenticated } from '../auth/index';
import logo from '../../images/logo1.png';
import Heading from './Heading';
import { UncontrolledAlert } from 'reactstrap';
import { putOrder } from './OrderApi';

const Payment = (props) => {
  const [total, setTotal] = useState({});
  const [order, setOrder] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [d, setData] = useState({});
  const [items, setItems] = useState([]);
  const address = props.location.state.formData;

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
    // getOrderId();
    getItemsInCart();
  }, []);

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
      giveOrderOnline();
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

  var products = [];

  for (var i = 0; i < items.length; i++) {
    products.push({
      productId: items[i].productId,
      quantityOrdered: items[i].quantity,
      sellerNumber: items[i].sellerNumber,
      singleItemPrice: items[i].price,
      totalItemsPrice: total.totalValue,
      discount: total.discount,
      priceAfterDiscount: total.totalPrice,
      productTitle: items[i].title,
    });
  }

  //Give the orderCOD
  const giveOrderCod = () => {
    const data = {
      orderedBy: userNumber,
      totalPrice: total.totalPrice,
      paymentType: 'COD',
      deliveryCharge: total.totalDeliveryCharge,
      address: {
        latitude: '0',
        longitude: '0',
        state: address.state,
        city: address.city,
        addressLine1: address.addressLine1,
        addressLine2: address.addressLine2,
        pinCode: address.pinCode,
        area: address.area,
      },
      paymentStatus: 'Pending',
      orderStatus: 'pending',

      plusPointsEarned: total.totalPlusPoints,
      promoCodeDetails: {
        promoCode: '',
        promoCodeDiscount: 0,
      },
      productDetails: products,
    };
    console.log(data);
    saveOrder(data)
      .then((res) => {
        console.log(res);
        setRedirect(true);
        deleteCart(userNumber);
      })
      .catch((err) => console.log(err));
  };
  //Give the orderOnline
  const giveOrderOnline = () => {
    const data = {
      orderedBy: userNumber,
      totalPrice: total.totalPrice,
      paymentType: 'RazorPay',
      deliveryCharge: total.totalDeliveryCharge,
      address: {
        latitude: '0',
        longitude: '0',
        state: address.state,
        city: address.city,
        addressLine1: address.addressLine1,
        addressLine2: address.addressLine2,
        pinCode: address.pinCode,
        area: address.area,
      },
      paymentStatus: 'Pending',
      orderStatus: 'pending',

      plusPointsEarned: total.totalPlusPoints,
      promoCodeDetails: {
        promoCode: '',
        promoCodeDiscount: 0,
      },
      productDetails: products,
    };
    console.log(data);
    saveOrder(data)
      .then((res) => {
        console.log(res);
        setRedirect(true);
        deleteCart(userNumber);
      })
      .catch((err) => console.log(err));
  };

  console.log(products, 'products');
  console.log(items, 'cartitems');
  const handleCOD = () => {
    giveOrderCod();
  };

  const showCheckOut = () => {
    return isAuthenticated() ? (
      <div>
        <button onClick={openPayModal} className='btn btn-success mb-4 mr-4'>
          Pay Online
        </button>
        <button onClick={handleCOD} className='btn btn-success mb-4'>
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
      <table className='table table-borderless table-light'>
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

  console.log(address);
  console.log(items);
  console.log(total);

  const redirectToCart = () => {
    return <Redirect to='/success' />;
  };

  return (
    <div className='container'>
      {console.log(d)}
      {/* {d && <UncontrolledAlert color='info'>{d}</UncontrolledAlert>} */}
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
