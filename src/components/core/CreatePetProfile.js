import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createProfile, isAuthenticated } from '../auth/index';
import { createPet } from '../auth/api'
import Heading from './Heading';

const CreateProfile = () => {
  const userNumber = isAuthenticated().data.user_mobile

  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    gender: '',
    dob: '',
    type : '',
    userNumber: userNumber
  });

  const { name, breed, gender, dob, type } = formData;


  const [redirect, setRediect] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createPet({ name, breed, gender, dob, type, userNumber })
      .then((data) => {
        // debugger
        setRediect(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const redirectTo = () => {
    return redirect && <Redirect to='/petprofile' />;
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
                  name='name'
                  value={name}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            {/* <div className='form-group col-md-6'>
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
            </div> */}
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Pet Breed
              </label>
              <div className='col-sm-9 controls'>
                <input
                  className='ml-1 col-md-12'
                  type='text'
                  placeholder='Breed'
                  name='breed'
                  value={breed}
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
                  name='gender'
                  value={gender}
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
                  name='dob'
                  value={dob}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='' className='col-sm-12 control-label'>
                Pet Type
              </label>
              <div className='col-sm-9 controls'>
                <select
                  className='ml-1 col-md-12'
                  name='type'
                  value={type}
                  onChange={(e) => onChange(e)}
                  required
                >
                  <option value='0'>* Select Type</option>
                  <option value='Dog'>Dog</option>
                  <option value='Cat'>Cat</option>
                  <option value='Fish'>Fish</option>
                  <option value='Rabbit'>Rabbit</option>
                </select>
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
