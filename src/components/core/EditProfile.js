import React, { useEffect, useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import {editProfile, isAuthenticated, getProfile} from '../auth/index'

const EditProfile = () => {
    const {user:{userNumber}} = isAuthenticated();
    const [formData, setFormData] = useState({
        petName: '',
        mobileNumber: userNumber,
        email: '',
        petGender: '',
        petDob: ''
    });
    const [details, setDetails] = useState({
            latitude: "",
            longitude: "",
            state: "",
            city: "",
            addressLine1: "",
            addressLine2: "",
            pinCode: "",
            area: ""
    });


    const { petName,
        mobileNumber,
        email,
        petGender,
        petDob
    } = formData;

    const {
        city,
        state,
        pinCode,
        area,
        addressLine2,
        addressLine1    
    } = details;

    const [redirect, setRediect] = useState(false);



    useEffect(()=>{
        getProfile(userNumber)
        .then(profile=>{

            setFormData({
                petName: !profile.petName ? '' : profile.petName,
                mobileNumber: !profile.mobileNumber ? '' : profile.mobileNumber,
                email: !profile.email ? '' : profile.email,
                petGender: !profile.petGender ? '' : profile.petGender,
                petDob: !profile.petDob ? '' : profile.petDob
    
            });

            setDetails({
                city: !profile.details ? '' : profile.details.city,
                state: !profile.details ? '' : profile.details.state,
                pinCode: !profile.details ? '' : profile.details.pinCode,
                area: !profile.details ? '' : profile.details.area,
                addressLine2: !profile.details ? '' : profile.details.addressLine2,
                addressLine1: !profile.details ? '' : profile.details.addressLine1
            });

        })
        .catch(error=>{
            console.log(error);
        })

        
    }, [getProfile]);

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const detailsChange = e => setDetails({...details, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        editProfile({petName, mobileNumber, email, petGender, petDob, details})
        .then(data=>{
            setRediect(true);
            
        })
        .catch(error=>{
            console.log(error);
        })
        console.log(formData);
    }

    const redirectTo = () =>{
        return redirect && <Redirect to="/profile" />
    }

    return (
        <div className="container profile-about bg-light p-5">
            {redirectTo()}
            <h1 className="large">
                Edit Your Pet's Profile
            </h1>
        
            <p className="lead">
                <i className="fas fa-user"></i>{' '}Tell Us More about you!
            </p>
            {/* <small>* = required field</small> */}
            <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="row">
                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Pet Name</label>
                    <div class="col-sm-9 controls">
                    <input className="ml-1 col-md-12 effect-11" type="text" placeholder="Pet Name" name="petName" value={petName} onChange={e => onChange(e)} required/>
                    </div>
                    <span class="focus-bg"></span>
                    
                </div>
                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Mobile Number</label>
                    <div class="col-sm-9 controls">
                    <input className="ml-1 col-md-12" type="number" placeholder="Mobile Number" name="mobileNumber" value={mobileNumber} onChange={e => onChange(e)} required/>
                    </div>
                </div>
                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Email</label>
                    <div class="col-sm-9 controls">
                    <input className="ml-1 col-md-12" type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} required/>
                    </div>
                </div>
                <div className="form-group row col-md-6">  
                <label htmlFor="" className="col-sm-12 control-label">Pet Gender</label>
                <div class="col-sm-9 controls">
                <select className="ml-1 col-md-12" name="petGender" value={petGender} onChange={e => onChange(e)} required>
                    <option value="0">* Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </div>
                </div>
                <div className="form-group row col-md-6">
                <label htmlFor="" className="col-sm-12 control-label">Pet DOB</label>
                <div class="col-sm-9 controls">
                <input className="ml-1 col-md-12" type="date" placeholder="Pet Date Of Birth" name="petDob" value={petDob} onChange={e => onChange(e)} required/>
                </div>
                </div>

                <div className="form-group row col-md-6">
                <label htmlFor="" className="col-sm-12 control-label">Address1</label>
                <div class="col-sm-9 controls">
                <input className="ml-1 col-md-12" type="text" placeholder="Address1" name="addressLine1" value={addressLine1} onChange={e => detailsChange(e)} required/>
                </div>
                </div>

                <div className="form-group row col-md-6">
                <label htmlFor="" className="col-sm-12 control-label">Adress2</label>
                <div class="col-sm-9 controls">
                <input className="ml-1 col-md-12" type="text" placeholder="Adress2" name="addressLine2" value={addressLine2} onChange={e => detailsChange(e)} required/>
                </div>
                </div>

                <div className="form-group row col-md-6">
                <label htmlFor="" className="col-sm-12 control-label">State</label>
                <div class="col-sm-9 controls">
                <input className="ml-1 col-md-12" type="text" placeholder="State" name="state" value={state} onChange={e => detailsChange(e)} required/>
                </div>
                </div>
                
                <div className="form-group row col-md-6">
                <label htmlFor="" className="col-sm-12 control-label">City</label>
                <div class="col-sm-9 controls">
                <input className="ml-1 col-md-12" type="text" placeholder="City" name="city" value={city} onChange={e => detailsChange(e)} required/>
                </div>
                </div>

                <div className="form-group row col-md-6">
                <label htmlFor="" className="col-sm-12 control-label">Area</label>
                <div class="col-sm-9 controls">
                <input className="ml-1 col-md-12" type="text" placeholder="Area" name="area" value={area} onChange={e => detailsChange(e)} required/>
                </div>
                </div>

               

                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Pincode</label>
                    <div class="col-sm-9 controls">
                    <input className="ml-1 col-md-12" type="number" placeholder="Pincode" name="pinCode" value={pinCode} onChange={e => detailsChange(e)} required/>
                    </div>
                </div>
           
            </div>
                
                <input type="submit" className="btn btn-warning btn-lg my-1" />
                <Link className="btn btn-dark btn-lg my-1 ml-2" to="/profile">Go Back</Link>
            </form>
    
            
        </div>
    );
}

export default EditProfile
