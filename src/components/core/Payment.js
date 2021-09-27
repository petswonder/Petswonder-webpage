import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { deleteCart, getCart, getCartSummary, saveOrder } from '../auth/api';
import { isAuthenticated } from '../auth/index';
import logo from '../../images/logo1.png';
import Heading from './Heading';

const Payment = (props) => {
  // debugger
  const [total, setTotal] = useState([]);
  const [order] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [d, setData] = useState({});
  const [items, setItems] = useState([]);
  const address = props.location.orderAddress.formData;
  console.log(address)
  var products = [];
  // debugger

  const userNumber = isAuthenticated().user.userNumber
  // console.log(userNumber)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    
    const getTotalOfCart = () => {
      getCartSummary({userNumber})
        .then((res) => {
          let temp = res[0]
          setTotal(temp)
          
          for (var i = 0; i < items.length; i++) {
            products.push({
              productId: items[i].product_id,
              quantityOrdered: items[i].product_quantity,
              sellerNumber: items[i].product_sellerNumber,
              singleItemPrice: items[i].product_price,
              totalItemsPrice: total.mrp,
              discount: total.discount,
              priceAfterDiscount: total.mrp = total.discount,
              productTitle: items[i].product_title,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getItemsInCart = () => {
      getCart({userNumber})
        .then((data) => {
          setItems(data);
          getTotalOfCart();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getItemsInCart()
    
  }, []);

  

  // const { totalPrice } = total;
  // const l = total.mrp;
  // var am = l * 100;

  const options = {
    key: 'rzp_live_1P3qqDk71fnJ6t',
    amount: (total.mrp - total.discount) * 100, //  =amount to be paid
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
    console.log(response.error.description)
  });

  const openPayModal = (e) => {
    rzp1.open();
    e.preventDefault();
  };

  

  

  //Give the orderCOD
  const giveOrderCod = () => {
    // debugger
    if(userNumber !== 0){
      const data = {
        user_mobile: userNumber,
        order_to : address,
        order_date: new Date(),
        cart_id: '',
        totalPrice: total.totalPrice,
        payment_type: 'COD',
        deliveryCharge: total.totalDeliveryCharge,
        payment_status: 'Pending',
        order_status: 'pending',
        order_platform : 'web',
        plusPointsEarned: total.totalPlusPoints,
        promoCodeDetails: {
          promoCode: '',
          promoCodeDiscount: 0,
        },
        productDetails: products
        // order_ref_id : ''
      };
      // console.log(data)
      // saveOrder(data)
      //   .then((res) => {
      //     setRedirect(true);
      //     deleteCart(userNumber);
      //   })
      //   .catch((err) => console.log(err));
    }
    else{
      // alert('Not at this moment!!!')
    }
    
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

    saveOrder(data)
      .then((res) => {
        setRedirect(true);
        deleteCart(userNumber);
      })
      .catch((err) => console.log(err));
  };

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
            <td>₹{total.mrp}</td>
          </tr>
          <tr>
            <th scope='row'>Discount on MRP</th>
            <td style={{ color: 'green' }}>₹{total.discount}</td>
          </tr>
          <tr>
            <th scope='row'>Total Gst</th>
            <td>₹{total.gst}</td>
          </tr>
          <tr>
            <th scope='row'>Total Delivery Charge</th>
            <td>₹{total.delivery}</td>
          </tr>
          <tr>
            <th scope='row'>Total Amount</th>
            <td style={{ fontWeight: 'bold' }}>₹{total.mrp - total.discount}</td>
          </tr>
          <tr>
            <th scope='row'>Total Plus Points</th>
            <td>{total.plus_points}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const redirectToCart = () => {
    return <Redirect to='/success' />;
  };

  return (
    <div className='container'>
      <Heading text='Make Payment' />
      {table()}
      {showCheckOut()}
      {redirect && redirectToCart()}
    </div>
  );
};

export default Payment;
