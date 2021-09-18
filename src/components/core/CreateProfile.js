import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/index';
import { editProfile } from '../auth/api';
import Heading from './Heading';

const CreateProfile = () => {
  const userData = isAuthenticated().user
  const userNumber = userData.userNumber
  const [formData, setFormData] = useState({
    profileName: userData.name,
    mobileNumber: userNumber,
    email: userData.email,
    address : userData.address,
    district : userData.district,
    city : userData.city,
    state : userData.state,
    pincode : userData.pincode
  });
  // const [details, setDetails] = useState({
  //   latitude: '',
  //   longitude: '',
  //   state: '',
  //   city: '',
  //   addressLine1: '',
  //   addressLine2: '',
  //   pinCode: '',
  //   area: '',
  // });

  const { profileName, mobileNumber, email, address, district, city, state, pincode } = formData;

  // const { city, state, pinCode, area, addressLine2, addressLine1 } = details;

  const [redirect, setRediect] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // const detailsChange = (e) =>
  //   setDetails({ ...details, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editProfile({ profileName, mobileNumber, email, address, district, city, state, pincode })
      .then((data) => {
        // debugger
        setRediect(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const redirectTo = () => {
    return redirect && <Redirect to='/profile' />;
  };

  return (
    <div className='py-4'>
      <div className='container profile-about bg-light p-4'>
        {redirectTo()}
        <Heading text="Create your Profile" />

        {/* <small>* = required field</small> */}

        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='row'>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Name
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='text'
                  placeholder='Name'
                  name='profileName'
                  value={profileName}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Mobile Number
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
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
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
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
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='text'
                  placeholder='Address'
                  name='address'
                  value={address}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                District
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='text'
                  placeholder='District'
                  name='district'
                  value={district}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                City
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
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
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='text'
                  placeholder='State'
                  name='state'
                  value={state}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            

            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Pincode
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='number'
                  placeholder='Pincode'
                  name='pincode'
                  value={pincode}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <button type='submit' className='btn btn-warning btn-md my-1 mr-3'>Submit</button>
            <Link className='btn btn-light my-1 btn-md btn-dark' to='/profile'>
              Go Back
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
