import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/index';
import {getProfile} from '../auth/api'
import sed from '../../images/sed.jpg';
import PetProfile from './PetProfile';

const Profile = (props) => {
  const [profile, setProfile] = useState({});
  const userNumber = isAuthenticated().user.userNumber


  useEffect(() => {
    getProfile({userNumber})
      .then((data) => {
          console.log(data)
        setProfile(data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }, [userNumber]);


    return (
        <div className="container">
        <div className="py-4  row">
          <div className="col-8 col-md-8 profile-about bg-light py-3 mx-auto">
          {profile ? (<Fragment>
                <div className="row">
                <div className="w-100 ">
                    <h3 className="px-2 text-center">Your Profile</h3>
                    <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">Name</div>
                        <span>:</span>
                        <div className="ml-2">{profile.user_name}</div>
                    </div>
                    {/* <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">Pet Gender</div>
                        <span>:</span>
                        <div className="ml-2 text-capitalize">{profile.gender}</div>
                    </div> */}
                    {/* <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">Pet Date Of Birth</div>
                        <span>:</span>
                        <div className="ml-2">{profile.dob}</div>
                    </div> */}
                    <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">Mobile Number</div>
                        <span>:</span>
                        <div className="ml-2">{profile.user_mobile}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">Email</div>
                        <span>:</span>
                        <div className="ml-2">{profile.user_email}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">Address</div>
                        <span>:</span>
                        <div className={`ml-2 ${profile.user_address === null ? "text-muted font-italic" : ""}`}>{profile.user_address === null ? 'Address not added yet' : profile.user_address}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">District</div>
                        <span>:</span>
                        <div className="ml-2">{profile.user_district}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">City</div>
                        <span>:</span>
                        <div className="ml-2">{profile.user_city}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">State</div>
                        <span>:</span>
                        <div className="ml-2">{profile.user_state}</div>
                    </div>
                    <div className="d-flex">
                        <div className="col-5 text-right font-weight-bold">Pin Code</div>
                        <span>:</span>
                        <div className="ml-2">{profile.user_pincode}</div>
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
        </div>
        {/* <div className="col-6 col-md-6">
        <PetProfile></PetProfile>
        </div> */}
        </div>
        </div>
    )
}

export default Profile;
