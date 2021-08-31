import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { editProfile, isAuthenticated } from '../auth/index';
import { getPetProfile } from '../auth/api';

const EditPetProfile = () => {
  const userNumber = isAuthenticated().data[0].user_mobile

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    breed: '',
    category: ''
  });

  const { name, gender, dob, breed, category } = formData;


  const [redirect, setRediect] = useState(false);

  useEffect(() => {
    getPetProfile({userNumber})
      .then((res) => {
        let profile = res[0]
        console.log(profile)

        setFormData({
          name: !profile.pet_name ? '' : profile.pet_name,
          gender: !profile.pet_gender ? '' : profile.pet_gender,
          dob: !profile.pet_dob ? '' : profile.pet_dob,
          breed: !profile.pet_breed ? '' : profile.pet_breed,
          category: !profile.pet_category ? '' : profile.pet_category,
        });

      })
      .catch((error) => {
        console.log(error);
      });
  }, [ userNumber]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editProfile({ name, gender, dob, breed, category })
      .then((data) => {
        setRediect(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const redirectTo = () => {
    return redirect && <Redirect to='/petprofile' />;
  };

  return (
    <div className='container profile-about bg-light p-5'>
      {redirectTo()}
      <h1 className='large'>Edit Your Pet's Profile</h1>

      <p className='lead'>
        <i className='fas fa-user'></i> Tell Us More about you!
      </p>
      {/* <small>* = required field</small> */}
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='row'>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Pet Name
            </label>
            <div className='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12 effect-11'
                type='text'
                placeholder='Pet Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <span className='focus-bg'></span>
          </div>
          
          <div className='form-group row col-md-6'>
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
          <div className='form-group row col-md-6'>
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
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Pet Breed
            </label>
            <div className='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12 effect-11'
                type='text'
                placeholder='Pet Name'
                name='breed'
                value={breed}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <span className='focus-bg'></span>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Pet Category
            </label>
            <div className='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12 effect-11'
                type='text'
                placeholder='Pet Name'
                name='category'
                value={category}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <span className='focus-bg'></span>
          </div>
          
        </div>

        <input type='submit' className='btn btn-warning btn-lg my-1' />
        <Link className='btn btn-dark btn-lg my-1 ml-2' to='/petprofile'>
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default EditPetProfile;
