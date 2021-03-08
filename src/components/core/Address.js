import React, { Fragment, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import {getProfile, isAuthenticated } from '../auth/index'

const Address = () => {

    const [profile, setProfile] = useState({});
    const {jwt, user:{userNumber}} = isAuthenticated();
    const [formData, setFormData] = useState({
        mobileNumber: '',
        email: '',
        city: '',
        state: '',
        pinCode: '',
        area: '',
        addressLine2: '',
        addressLine1: '',
        longitude: "",
        latitude: ""
    });

    const { 
        mobileNumber,
        email,
        city,
        state,
        pinCode,
        area,
        addressLine2,
        addressLine1,        
    } = formData;

    useEffect(()=>{
        getProfile(userNumber)
        .then(data=>{
            setProfile(data);
        })
        .catch(error=>{
            console.log(error);
        })
        window.scrollTo(0, 0);
    },[])

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        // createProfile(userNumber, formData)
        // .then(data=>{
        //     <Redirect to="/profile" />
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
        <Redirect to="/payment" />
        console.log(formData);
    }

    const address = () =>{
        return <div className="address">
             <h5>Default Address</h5>
             <div className="address-block">
           
                {profile && <table class="table table-borderless table-light">
                        <tbody>
                            <tr>
                            <th scope="row">{profile.petName}</th>
                            </tr>
                            <tr>
                            <th scope="row">{profile.mobileNumber}</th>
                            <td></td>
                            </tr>
                            {profile.details && <tr>
                            <th scope="row">{profile.details.addressLine1}<br/>{profile.details.addressLine2}
                                <br/>
                                {profile.details.area} - {profile.details.pinCode}
                                <br/>
                                {profile.details.state}</th>
                            
                            </tr> }
                           
                        </tbody>
                    </table>}
        </div>
        </div> 
        
        
    }


    return (
        <div className="container">
            <div className="col-md-6">
                {/* {address()} */}
            </div>

            
            <div className="container profile-about bg-light p-5 mt-5">
                
            <h3 className="mb-3">Add Address</h3>
                <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="row">
                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Mobile Number</label>
                    <div class="controls col-12 col-lg-10">
                        <input className="ml-1 col-md-12" type="number" placeholder="Mobile Number" name="mobileNumber" value={mobileNumber} onChange={e => onChange(e)}/>
                    </div> 
                </div>
                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Email</label>
                    <div class="controls col-12 col-lg-10">
                    <input className="ml-1 col-md-12" type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)}/>
                    </div>
                </div>

                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Address1</label>
                    <div class="controls col-12 col-lg-10">
                    <input className="ml-1 col-md-12" type="text" placeholder="Address1" name="addressLine1" value={addressLine1} onChange={e => onChange(e)}/>
                    </div>
                </div>

                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Adress2</label>
                    <div class="controls col-12 col-lg-10">
                    <input className="ml-1 col-md-12" type="text" placeholder="Adress2" name="addressLine2" value={addressLine2} onChange={e => onChange(e)}/>
                    </div>
                </div>

                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">State</label>
                    <div class="controls col-12 col-lg-10">
                    <input className="ml-1 col-md-12" type="text" placeholder="State" name="state" value={state} onChange={e => onChange(e)} />
                    </div>
                </div>
                
                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">City</label>
                    <div class="controls col-12 col-lg-10">
                    <input className="ml-1 col-md-12" type="text" placeholder="City" name="city" value={city} onChange={e => onChange(e)}/>
                    </div>
                </div>

                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Area</label>
                    <div class="controls col-12 col-lg-10">
                    <input className="ml-1 col-md-12" type="text" placeholder="Area" name="area" value={area} onChange={e => onChange(e)} />
                    </div>
                </div>

               

                <div className="form-group row col-md-6">
                    <label htmlFor="" className="col-sm-12 control-label">Pincode</label>
                    <div class="controls col-12 col-lg-10">
                    <input className="ml-1 col-md-12" type="number" placeholder="Pincode" name="pinCode" value={pinCode} onChange={e => onChange(e)}/>
                    </div>
                </div>
                </div>

                <Link to="/payment"><input type="submit" className="btn btn-warning btn-md my-1" /></Link>
                {/* <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link> */}
            </form>
            </div>
        </div>
    )
}

export default Address
