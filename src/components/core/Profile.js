import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {getProfile, isAuthenticated } from '../auth/index'
import sed from '../../images/sed.jpg'

const Profile = (props) => {

    const [profile, setProfile] = useState({});
    const {jwt, user:{userNumber}} = isAuthenticated();

    useEffect(()=>{
        getProfile(userNumber)
        .then(data=>{
            console.log(data)
            setProfile(data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])


    return (
        <div className="py-4">
        
          
          <div className="container col-12 col-md-10 profile-about bg-light px-5 py-3">
          {profile.petName ? (<Fragment>
                {/* <h5>Account</h5> */}
                <div className="row">
                <div className="col-md-8 mx-auto">
                    <h3>{profile.petName} Details</h3>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Pet Name</div>
                        <span>:</span>
                        <div class="ml-2">{profile.petName}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Pet Gender</div>
                        <span>:</span>
                        <div class="ml-2">{profile.petGender}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Pet Date Of Birth</div>
                        <span>:</span>
                        <div class="ml-2">{profile.petDob}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Mobile Number</div>
                        <span>:</span>
                        <div class="ml-2">{profile.mobileNumber}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Email</div>
                        <span>:</span>
                        <div class="ml-2">{profile.email}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-4 font-weight-bold">Address</div>
                        <span>:</span>
                        <div class="ml-2">{profile.details.addressLine1}<br/>{profile.details.addressLine2}
                                <br/>
                                {profile.details.area} - {profile.details.pinCode}
                                <br/>
                                {profile.details.state}
                                </div>
                    </div>
                    <div className="text-center mt-2">
                    <Link to="/editProfile"><button className="btn btn-primary mx-2">Edit Profile</button></Link>
                    <Link to="/historyPurchase"><button className="btn btn-primary mx-2">Your Orders</button></Link>
                    </div>
                </div>
                </div>
          </Fragment>) : (
              <>
                  <h3 className="ml-2 mb-3">No Profile found, create now!!!</h3>
                  <div className="row">
                    <div className="col-4">
                        <Link to="/createProfile"><button className="btn btn-warning btn-block mb-4">Create Profile</button></Link>
                        <Link to="/historyPurchase"><button className="btn btn-block btn-warning mb-4">Your Orders</button></Link>
                    </div>
                    <div className="col-8">
                        <img src={sed} alt="" className="w-100"/>
                    </div>
                  </div>
                  
                
              </>
          )}
          
    
          <div className="icons my-1">
            
           
          </div>
        </div>
        </div>
    )
}

export default Profile
