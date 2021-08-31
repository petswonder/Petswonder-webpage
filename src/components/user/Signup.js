import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import signin_bg from '../../images/signin_bg.jpg';

import {
  // sentOTP,
  // validateOTP,
  // registerUser,
  isAuthenticated,
  authenticate,
} from '../auth/index';

import {sendOTP, validateOTP, registerUser} from '../auth/api'

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOTP] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [register, setRegister] = useState(false);
  const [redirectToReferrer, setredirectToReferrer] = useState(false);

  const jwt = isAuthenticated();

  const handleChange = (e) => {
    setError(false);
    if (e.target.name === 'phoneNumber') {
      setPhoneNumber(e.target.value);
    } else if (e.target.name === 'otp') {
      setOTP(e.target.value);
    } else if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOTP(phoneNumber).then((data) => {
      if (data === undefined) {
        setError('User Already exists');
      } else {
        setOtpSent(true);
      }
    });
  };

  const handleOTP = (e) => {
    e.preventDefault();
    validateOTP(phoneNumber, otp).then((data) => {
      if (data === 'success') {
        setRegister(true);
      } else if (data === 'failed') {
        setError('Entered Otp is NOT valid');
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleregister = (e) => {
    e.preventDefault();
    registerUser({ phoneNumber, password, name, email }).then((data) => {
      // debugger
      if (data === 'success') {
        authenticate(
          { data: data, user: { userNumber: phoneNumber, name } },
          () => {
            setredirectToReferrer(true);
          }
        );
      } else {
        // alert('failed');
      }
    });
  };

  const signupForm = () => (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='col-md-6 col-xs-12 p-5 bg-primary'
    >
      <div className='login-wrap'>
        <div className='login-html'>
          <div className='img-sign'>{/* <img src={logo} alt='' /> */}</div>
          <div className='sign-content'>
            <h2>SIGNUP</h2>
            <br />
            <div className='login-form'>
              <div className='sign-in-htm'>
                <div className='group'>
                  <label className='label'>Phone Number</label>
                  <input
                    type='phoneNumber'
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={(e) => handleChange(e)}
                    className='form-control input'
                  />
                </div>
                <br />
                <div className='group'>
                  <button className='btn btn-secondary button' type="submit">Send OTP</button>
                </div>
                <div className='font-size-14 mt-3'>
                  Already have an Account?{' '}
                  <Link
                    className='text-secondary text-underline ml-2 '
                    to='/signin'
                  >
                    Signin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  const handleBack = () => {
    setOTP('');
    setOtpSent(false);
  };

  const validateForm = () => (
    <form
      onSubmit={(e) => handleOTP(e)}
      className='col-md-6 col-xs-12 p-5 bg-primary'
    >
      <div className='login-wrap'>
        <div className='login-html'>
          <div className='img-sign'>{/* <img src={logo} alt='' /> */}</div>
          <div className='sign-content'>
            <h2>
              <button onClick={handleBack} className='btn btn-warning'>
                <i className='fas fa-arrow-left fa-lg'></i>
              </button>{' '}
              Validate OTP
            </h2>
            <br />
            <div className='login-form'>
              <div className='sign-in-htm'>
                <div className='group'>
                  <label className='label'>OTP</label>
                  <input
                    type='number'
                    name='otp'
                    value={otp}
                    onChange={(e) => handleChange(e)}
                    className='form-control input'
                  />
                </div>
                <br />
                <div className='group'>
                  <button className='btn btn-secondary button'>
                    Validate OTP
                  </button>
                </div>
                <div className='font-size-14 mt-3'>
                  Already have an Account?{' '}
                  <Link
                    className='text-secondary text-underline ml-2 '
                    to='/signin'
                  >
                    Signin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  const registerForm = () => (
    <form
      onSubmit={(e) => handleregister(e)}
      className='col-md-6 col-xs-12 p-5 bg-primary'
    >
      <div className='login-wrap'>
        <div className='login-html'>
          <div className='img-sign'>{/* <img src={logo} alt='' /> */}</div>
          <div className='sign-content'>
            <h2>Register User</h2>
            <br />
            <div className='login-form'>
              <div className='sign-in-htm'>
                <div className='group'>
                  <label className='label'>Phone Number</label>
                  <p className='text-muted'>{phoneNumber}</p>
                </div>
                <br />
                <div className='group'>
                  <label className='label'>Password</label>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => handleChange(e)}
                    className='form-control input'
                  />
                </div>
                <br />
                <div className='group'>
                  <label className='label'>email</label>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => handleChange(e)}
                    className='form-control input'
                  />
                </div>
                <br />
                <div className='group'>
                  <label className='label'>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => handleChange(e)}
                    className='form-control input'
                  />
                </div>
                <br />
                <div className='group'>
                  <button className='btn btn-secondary button'>Register</button>
                </div>
                {/* <div className="foot-lnk">
                            Already have an Account? <Link className="signlinks" to="/signin">Signin</Link>
                            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  const showError = () => {
    return (
      <div
        className='alert alert-danger'
        style={{ display: error ? '' : 'none' }}
      >
        {error}
      </div>
    );
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (jwt === 'Success') {
        return <Redirect to='/shopping' />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };

  return (
    <div className='container py-5'>
      <div
        className='signforms border-primary border border-5'
        style={{
          background: `url(${signin_bg})`,
          'background-size': 'contain',
          'background-position': 'right center',
        }}
      >
        {redirectUser()}
        {showError()}
        {!otpSent && signupForm()}
        {otpSent && !register && validateForm()}
        {otpSent && register && registerForm()}
      </div>
    </div>
  );
};

export default Signup;
