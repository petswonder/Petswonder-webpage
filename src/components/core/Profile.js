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
        <div className="py-4">
        
          
          <div className="container col-12 col-md-10 profile-about bg-light px-5 py-3">
          {profile.petName ? (<Fragment>
                <h3>Account</h3>
                <h6>{profile.petName}</h6>
                <div className="row">
                <div className="col-md-4">
                    <p className="copyright "> <img src="/static/media/logo1.7393573c.png" id="aradhna_footer_logo" /> </p>
                    <Link to="/editProfile"><button className="btn btn-block btn-warning mb-4">Edit Profile</button></Link>
                    <Link to="/historyPurchase"><button className="btn btn-block btn-warning mb-4">Your Orders</button></Link>
                </div>
                <div className="col-md-8">
                    <h3>Profile Details</h3>
                    <table className="table table-borderless table-light">
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
          <br/>
        </div>
        </div>
    )
}

export default Profile
