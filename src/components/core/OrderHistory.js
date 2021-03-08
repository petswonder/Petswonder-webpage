import React, { useState, useEffect } from 'react'
import Heading from './Heading'
import emptycart from '../../images/emptycart.png'
import {getOrderHistory, isAuthenticated} from '../auth/index'

const OrderHistory = () => {

    const [orderHistory, setOrderHistory]= useState({});
    const {jwt, user:{userNumber}} = isAuthenticated();

    useEffect(() => {
        getOrderHistory(userNumber)
        .then(data => {
            setOrderHistory(data)
        })
        .catch(err=> {
            console.log(err);
        })
    }, [])

    const emptyOrderHistory = () =>{
        return <div>
            <h1>No Order History</h1>
            <img src={emptycart} alt=""/>
        </div>
    }

    return (
        <div className="container">
            <br/>
            <Heading text="Order History" />
            <br/>

            {OrderHistory.length>0 ? <div className="row">

            </div> : (emptyOrderHistory())}
        </div>
    )
}

export default OrderHistory
