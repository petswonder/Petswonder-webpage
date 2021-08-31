import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getProfile, isAuthenticated } from '../auth/index';
// import CreateProfile from '../core/CreateProfile';

const Address = () => {
  const [profile, setProfile] = useState({});
  const [redirect, setRedirect] = useState(false);
  const userNumber = isAuthenticated().data[0].user_mobile

  const [formData, setFormData] = useState({
    mobileNumber: '',
    email: '',
    city: '',
    state: '',
    pinCode: '',
    area: '',
    addressLine2: '',
    longitude: '',
    latitude: '',
  });

  const {
    mobileNumber,
    email,
    city,
    state,
    pinCode,
    area,
    addressLine2,
    addressLine1,
  } = formData;

  useEffect(() => {
    getProfile(userNumber)
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        alert(error);
      });
    window.scrollTo(0, 0);
  }, [userNumber]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  if (redirect) {
    // debugger 
    return <Redirect to={{ pathname: '/payment', orderAddress: { formData } }} />
  }

  const address = () => {
    return (
      <div className='address'>
        
        <div className='address-block'>
          {/* {console.log(profile)} */}
          {profile.mobileNumber > 0 && (
            <div className="bg-light p-2">
              <p className="fs-12 mb-0">Email : {profile.email}</p>
              <p className="fs-12 mb-0">Mobile : {profile.mobileNumber}</p>
              <p className="fs-12 mb-0">Address :</p>
              <p className="fs-12 mb-0">{profile.details.addressLine1}</p>
              <p className="fs-12 mb-0">{profile.details.state} - {profile.details.pinCode}</p>
              <button className='btn btn-warning btn-md my-3' onClick={handleClick}>
                Use Default Address
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const handleClick = () => {
    setFormData({
      mobileNumber: profile.mobileNumber,
      email: profile.email,
      city: profile.details.city,
      state: profile.details.state,
      pinCode: profile.details.pinCode,
      area: profile.details.area,
      addressLine2: profile.details.addressLine2,
      addressLine1: profile.details.addressLine1,
    });
    // <Redirect to='/payment' />;
  };

  return (
    <div className='container py-2'>
      <h5 className="my-2 mb-1">Add Address Details</h5>
      <div className="row py-3">
        
      {profile.mobileNumber > 0 && (
        <div className='col-md-5'>
          {address()}
        </div>
      )}

      <div className='col-md-7'>
        {/* <h5 className=''>Add Address</h5> */}
        <form className='form bg-light p-2' onSubmit={(e) => onSubmit(e)}>
          <div className='row w-100'>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Mobile Number
              </label>
              <div className='controls col-12'>
                <input
                  className='col-md-12'
                  type='number'
                  placeholder='Mobile Number'
                  name='mobileNumber'
                  value={mobileNumber}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Email
              </label>
              <div className='controls col-12'>
                <input
                  className='col-md-12'
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>

            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Address
              </label>
              <div className='controls col-12'>
                <input
                  className='col-md-12'
                  type='text'
                  placeholder='Address'
                  name='addressLine1'
                  value={addressLine1}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>

            {/* <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Adress2
              </label>
              <div className='controls col-12'>
                <input
                  className='col-md-12'
                  type='text'
                  placeholder='Adress2'
                  name='addressLine2'
                  value={addressLine2}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div> */}
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                City
              </label>
              <div className='controls col-12'>
                <input
                  className='col-md-12'
                  type='text'
                  placeholder='City'
                  name='city'
                  value={city}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                State
              </label>
              <div className='controls col-12'>
                <input
                  className='col-md-12'
                  type='text'
                  placeholder='State'
                  name='state'
                  value={state}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>

            

            {/* <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Area
              </label>
              <div className='controls col-12'>
                <input
                  className='col-md-12'
                  type='text'
                  placeholder='Area'
                  name='area'
                  value={area}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div> */}

            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Pincode
              </label>
              <div className='controls col-12'>
                <input
                  className='col-md-12'
                  type='number'
                  placeholder='Pincode'
                  name='pinCode'
                  value={pinCode}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
          </div>

          {/* <Link
            to={{
              pathname: '/payment',
              state: {
                formData,
              },
            }}
          > */}
          <div className="col">
            <input type='submit' className='btn btn-warning btn-md my-1' />
            </div>
          {/* </Link> */}
          {/* <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link> */}
        </form>
      </div>
      </div>
    </div>
  );
};

export default Address;
