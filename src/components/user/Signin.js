import React, { useState, useEffect } from 'react'
import { Link, Redirect} from 'react-router-dom';
import Layout from '../core/Layout'
import {signin, authenticate} from '../auth/index'
import logo from '../../images/logo1.png'


const Signin = () => {

    const [formData, setFormdata] = useState({
        userNumber: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    })

    const [status, setStatus] = useState('');


    const {userNumber, password, error, loading, redirectToReferrer} = formData;

    const handleChange = (e) =>{
        setFormdata({
            ...formData,
            error: false,
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);



    const handleSubmit = (e) =>{
        e.preventDefault();
        
        signin({userNumber, password})
        .then((data)=>{
            if(data === "Success"){
                authenticate(
                    {data: data, user:{userNumber} },
                    ()=>{
                        console.log("success lol yipeeeww");
                        setFormdata({
                            ...formData,
                            loading: false,
                            redirectToReferrer: true
                        })
                    }
                )
                
            }
            else{
                setFormdata({
                    ...formData,
                    error: 'Invalid Credentials'
                })
            }
        })
        
        // console.log(status);
        
    }

    const redirectUser = () =>{
        if(redirectToReferrer){
            
            return <Redirect to="/shopping" />
            
           
        }
        // if(isAuthenticated()){
        //     return <Redirect to="/" />
        // }
    }

    const signinForm = () => (
        <form onSubmit={e=> handleSubmit(e)}>

            <div class="login-wrap">
                <div class="login-html">
                    <div className="img-sign">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="sign-content">
                        <h2>SIGNIN</h2>
                        <br/>
                        <div class="login-form">
                            <div class="sign-in-htm">
                                <div class="group">
                                    <label className="label">Phone Number</label>
                                    <input type="userNumber" name="userNumber" value={userNumber} onChange={e=> handleChange(e)} className="form-control input"/>
                                </div>
                                <br/>
                                <div class="group">
                                    <label className="label">Password</label>
                                    <input type="password" name="password" value={password}  onChange={e=> handleChange(e)}className="form-control input"/>
                                </div>
                                <br/>
                                <div class="group">
                                    <button className="btn btn-primary button">Signin</button>
                                </div>
                                
                                <div class="hr"></div>
                                <div class="foot-lnk">
                                Don't have an Account? <Link className="signlinks" to="/signup">Signup</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )

    const showError = () =>{
        return <div className="alert alert-danger" style={{display : error ? '' : 'none'}}>
            {error}
        </div>
    }



    return (
        <div className="signforms">
            {showError()}
            {redirectUser()}
            {signinForm()}
            
        </div>
    )
}

export default Signin
