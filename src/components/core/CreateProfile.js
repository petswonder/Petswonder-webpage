import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createProfile, isAuthenticated } from '../auth/index';
import Heading from './Heading';

const CreateProfile = () => {
  const {
    user: { userNumber },
  } = isAuthenticated();
  const [formData, setFormData] = useState({
    petName: '',
    mobileNumber: userNumber,
    email: '',
    petGender: '',
    petDob: '',
  });
  const [details, setDetails] = useState({
    latitude: '',
    longitude: '',
    state: '',
    city: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    area: '',
  });

  const { petName, mobileNumber, email, petGender, petDob } = formData;

  const { city, state, pinCode, area, addressLine2, addressLine1 } = details;

  const [redirect, setRediect] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const detailsChange = (e) =>
    setDetails({ ...details, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile({ petName, mobileNumber, email, petGender, petDob, details })
      .then((data) => {
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
        <Heading text="Create your Pet's Profile" />

        {/* <small>* = required field</small> */}

        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='row'>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Pet Name
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='text'
                  placeholder='Pet Name'
                  name='petName'
                  value={petName}
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
                Pet Gender
              </label>
              <div className='col-sm-9 controls'>
                <select
                  className='ml-1 col-md-12'
                  name='petGender'
                  value={petGender}
                  onChange={(e) => onChange(e)}
                  required
                >
                  <option value='0'>* Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Pet DOB
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='date'
                  placeholder='Pet Date Of Birth'
                  name='petDob'
                  value={petDob}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>

            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Address1
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='text'
                  placeholder='Address1'
                  name='addressLine1'
                  value={addressLine1}
                  onChange={(e) => detailsChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Adress2
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='text'
                  placeholder='Adress2'
                  name='addressLine2'
                  value={addressLine2}
                  onChange={(e) => detailsChange(e)}
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
                  onChange={(e) => detailsChange(e)}
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
                  onChange={(e) => detailsChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Area
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='text'
                  placeholder='Area'
                  name='area'
                  value={area}
                  onChange={(e) => detailsChange(e)}
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
                  name='pinCode'
                  value={pinCode}
                  onChange={(e) => detailsChange(e)}
                  required
                />
              </div>
            </div>
          </div>
          <button type='submit' className='btn btn-warning btn-md my-1 mr-3'>Submit</button>
          <Link className='btn btn-light my-1 btn-md btn-dark' to='/profile'>
            Go Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
