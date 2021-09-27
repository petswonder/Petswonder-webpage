import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/index';
import {getPetProfile} from '../auth/api'
import sed from '../../images/sed.jpg';

const PetProfile = (props) => {
  const [profile, setProfile] = useState({});
  const userNumber = isAuthenticated().data.user_mobile


  useEffect(() => {
    getPetProfile({userNumber})
      .then((data) => {
        // debugger
        console.log(data)
        setProfile(data)
      })
      .catch((error) => {
        alert(error);
      });
  }, [userNumber]);


    return (
        <div className="container">
            <div className="row">
          <div className="col-8 col-md-8 profile-about bg-light py-3 mx-auto">
          {profile.length !== 0 ? (<Fragment>
                <div className="row">
                <div className="w-100">
                    <h3 className="px-2 text-center">{profile.pet_name} !!!</h3>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Pet Name</div>
                        <span>:</span>
                        <div className="ml-2">{profile.pet_name}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Pet Gender</div>
                        <span>:</span>
                        <div className="ml-2 text-capitalize">{profile.pet_gender}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Pet Date Of Birth</div>
                        <span>:</span>
                        <div className="ml-2">{profile.pet_dob}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Pet Breed</div>
                        <span>:</span>
                        <div className="ml-2">{profile.pet_breed}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Pet Category</div>
                        <span>:</span>
                        <div className="ml-2">{profile.pet_category}</div>
                    </div>
                    <div className="text-center mt-2">
                    <Link to="/editPetProfile"><button className="btn btn-primary mx-2">Edit Profile</button></Link>
                    <Link to="/historyPurchase"><button className="btn btn-primary mx-2">Your Orders</button></Link>
                    </div>
                </div>
                </div>
          </Fragment>) : (
              <>
                  <h3 className="ml-2 mb-3">No Profile found, create now!!!</h3>
                  <div className="row">
                    <div className="col-4">
                        <Link to="/createPet"><button className="btn btn-warning btn-block mb-4">Create Profile</button></Link>
                        <Link to="/historyPurchase"><button className="btn btn-block btn-warning mb-4">Your Orders</button></Link>
                    </div>
                    <div className="col-8">
                        <img src={sed} alt="" className="w-100"/>
                    </div>
                  </div>
                  
                
              </>
          )}
        </div>
        </div>
        </div>
    )
}

export default PetProfile;
