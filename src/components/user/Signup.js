import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import {
  sentOTP,
  validateOTP,
  registerUser,
  isAuthenticated,
  authenticate,
} from '../auth/index';
import logo from '../../images/logo1.png';

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91 ');
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
    console.log(phoneNumber);
    sentOTP(phoneNumber).then((data) => {
      if (data === undefined) {
        setError('User Already exists');
      } else {
        setOtpSent(true);
      }
    });
  };

  const handleOTP = (e) => {
    e.preventDefault();
    //console.log(phoneNumber, otp);

    validateOTP({ phoneNumber, otp }).then((data) => {
      if (data === 'Entered Otp is valid') {
        setRegister(true);
      } else if (data === 'Entered Otp is NOT valid') {
        setError('Entered Otp is NOT valid');
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleregister = (e) => {
    e.preventDefault();
    // console.log(phoneNumber, otp);

    registerUser({ phoneNumber, password, name, email }).then((data) => {
      if (data === 'User added successfully') {
        authenticate(
          { data: data, user: { userNumber: phoneNumber, name } },
          () => {
            console.log('success');
            setredirectToReferrer(true);
          }
        );
      } else {
        console.log('failed');
      }
    });
  };

  const signupForm = () => (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div class='login-wrap'>
        <div class='login-html'>
          <div className='img-sign'>
            <img src={logo} alt='' />
          </div>
          <div className='sign-content'>
            <h2>SIGNUP</h2>
            <br />
            <div class='login-form'>
              <div class='sign-in-htm'>
                <div class='group'>
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
                <div class='group'>
                  <button className='btn btn-primary button'>Send OTP</button>
                </div>
                <div class='hr'></div>
                <div class='foot-lnk'>
                  Already have an Account?{' '}
                  <Link className='signlinks' to='/signin'>
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
    <form onSubmit={(e) => handleOTP(e)}>
      <div class='login-wrap'>
        <div class='login-html'>
          <div className='img-sign'>
            <img src={logo} alt='' />
          </div>
          <div className='sign-content'>
            <h2>
              <button onClick={handleBack} className='btn btn-warning'>
                <i class='fas fa-arrow-left fa-lg'></i>
              </button>{' '}
              Validate OTP
            </h2>
            <br />
            <div class='login-form'>
              <div class='sign-in-htm'>
                <div class='group'>
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
                <div class='group'>
                  <button className='btn btn-primary button'>Send OTP</button>
                </div>
                <div class='hr'></div>
                <div class='foot-lnk'>
                  Already have an Account?{' '}
                  <Link className='signlinks' to='/signin'>
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
    <form onSubmit={(e) => handleregister(e)}>
      <div class='login-wrap'>
        <div class='login-html'>
          <div className='img-sign'>
            <img src={logo} alt='' />
          </div>
          <div className='sign-content'>
            <h2>Register User</h2>
            <br />
            <div class='login-form'>
              <div class='sign-in-htm'>
                <div class='group'>
                  <label className='label'>Phone Number</label>
                  <p className='text-muted'>{phoneNumber}</p>
                </div>
                <br />
                <div class='group'>
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
                <div class='group'>
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
                <div class='group'>
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
                <div class='group'>
                  <button className='btn btn-primary button'>Register</button>
                </div>
                <div class='hr'></div>
                {/* <div class="foot-lnk">
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
      console.log(jwt);
      if (jwt === 'Success') {
        return <Redirect to='/shopping' />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };

  return (
    <div className='signforms'>
      {redirectUser()}
      {showError()}
      {!otpSent && signupForm()}
      {otpSent && !register && validateForm()}
      {otpSent && register && registerForm()}
    </div>
  );
};

export default Signup;
