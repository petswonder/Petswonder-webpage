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
            setProfile(data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])


    return (
        <div>
         
          
          <div class="container col-12 col-md-10 profile-about bg-light p-2" style={{textAlign:"left"}}>
          <br/>
          {profile.petName ? (<Fragment>
            <div className="container mt-4">
                <h3>Account</h3>
                <h6>{profile.petName}</h6>
                <hr/>
                <div className="row">
                <div className="col-md-4">
                    <p class="copyright "> <img src="/static/media/logo1.7393573c.png" id="aradhna_footer_logo" /> </p>
                    <Link to="/editProfile"><button className="btn btn-block btn-warning mb-4">Edit Profile</button></Link>
                    <Link to="/historyPurchase"><button className="btn btn-block btn-warning mb-4">Your Orders</button></Link>
                </div>
                <div className="col-md-8">
                    <h3>Profile Details</h3>
                    <table class="table table-borderless table-light">
                        <tbody>
                            <tr>
                            <th scope="row">Pet Name</th>
                            <td>{profile.petName}</td>
                            </tr>
                            <tr>
                            <th scope="row">Pet Gender</th>
                            <td>{profile.petGender}</td>
                            </tr>
                            <tr>
                            <th scope="row">Pet Date Of Birth</th>
                            <td>{profile.petDob}</td>
                            </tr>
                            <tr>
                            <th scope="row">Mobile Number</th>
                            <td>{profile.mobileNumber}</td>
                            </tr>
                            <tr>
                            <th scope="row">Email</th>
                            <td>{profile.email}</td>
                            </tr>
                            {profile.details && <tr>
                            <th scope="row">Address</th>
                            <td>{profile.details.addressLine1}<br/>{profile.details.addressLine2}
                                <br/>
                                {profile.details.area} - {profile.details.pinCode}
                                <br/>
                                {profile.details.state}
                            </td>
                            </tr> }
                           
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
          </Fragment>) : (
              <div className="container mt-5">
                  <h3 className="ml-2 mb-3">No Profile found, create now!!!</h3>
                  <hr/>
                  <div className="row">
                    <div className="col-4">
                        <Link to="/createProfile"><button className="btn btn-warning btn-block mb-4">Create Profile</button></Link>
                        <Link to="/historyPurchase"><button className="btn btn-block btn-warning mb-4">Your Orders</button></Link>
                    </div>
                    <div className="col-8">
                        <img src={sed} alt=""/>
                    </div>
                  </div>
                  
                
              </div>
          )}
          
    
          <div class="icons my-1">
            
           
          </div>
          <br/>
        </div>
        </div>
    )
}

export default Profile
