import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate } from '../auth/index';
import signin_bg from '../../images/signin_bg.jpg';

const Signin = () => {
  const [formData, setFormdata] = useState({
    userNumber: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false,
  });

  // const [status, setStatus] = useState('');

  const { userNumber, password, error, redirectToReferrer } = formData;

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      error: false,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    signin({ userNumber, password }).then((data) => {
      if (data === 'Success') {
        authenticate({ data: data, user: { userNumber } }, () => {
          setFormdata({
            ...formData,
            loading: false,
            redirectToReferrer: true,
          });
        });
      } else {
        setFormdata({
          ...formData,
          error: 'Invalid Credentials',
        });
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to='/shopping' />;
    }
    // if(isAuthenticated()){
    //     return <Redirect to="/" />
    // }
  };

  const signinForm = () => (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='col-md-6 col-xs-12 p-5 bg-primary'
    >
      <div className='login-wrap'>
        <div className='login-html'>
          <div className='img-sign'>{/* <img src={logo} alt='' /> */}</div>
          <div className='sign-content'>
            <h2>SIGNIN</h2>
            <div className='login-form'>
              <div className='sign-in-htm'>
                <div className='group'>
                  <label className='label'>Phone Number</label>
                  <input
                    type='userNumber'
                    name='userNumber'
                    value={userNumber}
                    onChange={(e) => handleChange(e)}
                    className='form-control input'
                  />
                </div>
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
                  <button className='btn btn-secondary button'>Sign In</button>
                </div>

                <div className='font-size-14 mt-3'>
                  Don't have an Account?{' '}
                  <Link
                    className='text-secondary text-underline ml-2'
                    to='/signup'
                  >
                    Sign Up
                  </Link>
                </div>
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
        {showError()}
        {redirectUser()}
        {signinForm()}
      </div>
    </div>
  );
};

export default Signin;
