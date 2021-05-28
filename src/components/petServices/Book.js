import React, { useEffect, useState } from 'react';
import logo from '../../images/logo1.png';
import { isAuthenticated } from '../auth/index';
import { getTotal, saveOrder } from '../cart/cartApi';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import cs from '../../images/cs.png';

const Book = ({
  d: { category, description, serviceImageUrls, title, price },
  comingSoon = false,
}) => {
  const [total, setTotal] = useState({});
  const [order, setOrder] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [d, setData] = useState({});
  const [date, setDate] = useState(undefined);

  const {
    user: { userNumber },
  } = isAuthenticated();

  const { totalValue } = total;
  const l = total.totalPrice;
  var am = price * 100;

  const options = {
    key: 'rzp_live_1P3qqDk71fnJ6t',
    amount: am, //  = INR 1
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
      alert(d);
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
  });

  const openPayModal = (e) => {
    rzp1.open();
    e.preventDefault();
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

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

  useEffect(() => {
    setData(d);
    getOrderId();
  }, []);

  function handleDayChange(day) {
    setDate(day);
  }

  const comingS = () => {
    return (
      <div>
        <h6 class="m-0">Coming Soon !!!</h6>
      </div>
    );
  };

  const today = new Date();
  return (
    <div className='col-12 col-md-6 mb-4 mx-auto'>
      <div className='card' style={{ padding: '10px' }}>
        <h5>{title}</h5>
        <img
          className='card-img-top'
          src={serviceImageUrls}
          alt='not available'
        />
        <div className='card-body'>
          {comingSoon ? (
            comingS()
          ) : (
            <div>
              <div>
                {date && (
                  <p>Selected Appointment Day: {date.toLocaleDateString()}</p>
                )}
                {!date && <p>Choose Appointment day</p>}
                <DayPickerInput
                  onDayChange={handleDayChange}
                  value={date}
                  dayPickerProps={{
                    selectedDays: date,
                    disabledDays: {
                      daysOfWeek: [0, 6],
                    },
                  }}
                  dayPickerProps={{
                    modifiers: {
                      disabled: [
                        {
                          daysOfWeek: [0, 6],
                        },
                        {
                          before: new Date(),
                        },
                      ],
                    },
                  }}
                />
              </div>

              <br />
              <button
                onClick={openPayModal}
                type='button'
                class='btn btn-warning'
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
