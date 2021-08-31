import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/index';
import { editProfile, getProfile } from '../auth/api';

const EditProfile = () => {
  const userNumber = isAuthenticated().data[0].user_mobile

  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: userNumber,
    email: '',
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

  const { userName, mobileNumber, email, address, district, city, state, pincode } = formData;

  // const { city, state, pinCode, area, addressLine2, addressLine1 } = details;

  const [redirect, setRediect] = useState(false);

  useEffect(() => {
    getProfile({userNumber})
      .then((profile) => {
        setFormData({
          userName: !profile[0].user_name ? '' : profile[0].user_name,
          mobileNumber: !profile[0].user_mobile ? '' : profile[0].user_mobile,
          email: !profile[0].user_email ? '' : profile[0].user_email,
          address : !profile[0].user_address ? '' : profile[0].user_address,
          district : !profile[0].user_district ? '' : profile[0].user_district,
          city : !profile[0].user_city ? '' : profile[0].user_city,
          state : !profile[0].user_state ? '' : profile[0].user_state,
          pincode : !profile[0].user_pincode ? '' : profile[0].user_pincode,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ userNumber]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // const detailsChange = (e) =>
  //   setDetails({ ...details, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editProfile({ userName, mobileNumber, email, address, district, city, state, pincode })
      .then((data) => {
        if(data === 'success'){
          setRediect(true);
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const redirectTo = () => {
    return redirect && <Redirect to='/profile' />;
  };

  return (
    <div className='container profile-about bg-light p-5'>
      {redirectTo()}
      <h1 className='large'>Edit Your Profile</h1>

      {/* <p className='lead'>
        <i className='fas fa-user'></i> Tell Us More about you!
      </p> */}
      {/* <small>* = required field</small> */}
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='row'>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Name
            </label>
            <div className='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12 effect-11'
                type='text'
                placeholder='Pet Name'
                name='userName'
                value={userName}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <span className='focus-bg'></span>
          </div>
          <div className='form-group row col-md-6'>
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
          <div className='form-group row col-md-6'>
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
          {/* <div className='form-group row col-md-6'>
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
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
          </div> */}
          {/* <div className='form-group row col-md-6'>
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
          </div> */}

          <div className='form-group row col-md-6'>
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

          <div className='form-group row col-md-6'>
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

          <div className='form-group row col-md-6'>
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

          <div className='form-group row col-md-6'>
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

          {/* <div className='form-group row col-md-6'>
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
          </div> */}

          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Pincode
            </label>
            <div className='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='number'
                placeholder='Pin code'
                name='pincode'
                value={pincode}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
        </div>

        <input type='submit' className='btn btn-warning btn-lg my-1' />
        <Link className='btn btn-dark btn-lg my-1 ml-2' to='/profile'>
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default EditProfile;
