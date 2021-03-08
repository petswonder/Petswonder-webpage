import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import {addToCart} from '../cart/cartApi'
import { isAuthenticated } from "../auth/index";

const Product = ({ data }) => {

    // console.log(data);
    const {jwt, user:{userNumber}} = isAuthenticated();
    const id = data.productId;

    const handleClick = () =>{
        console.log(userNumber, id);
        addToCart({userNumber, id})
        .then(data=>{
            alert("Product added to cart succesfully!")
           
        })
        .catch(err=>{
            console.log(err);
        })
    }



    return <div className="col-xl-3 col-lg-4 col-6 product">
            <div className="single_courses">
                <div className="thumb">
                    <a className="akruti-a" href="">
                        <img className="akruti-img" src={data.productImages} alt={data.title}/>
                    </a>
                </div>
                <div className="courses_info">
                    <h3 className="akruti-h3">{data.title} <br></br></h3>
                    {/* <p className="d-sm-none d-md-block d-none d-sm-block">
                        {data.description.slice(0,95)}
                        {data.description.length>95 && <Fragment>.....</Fragment>}
                    </p> */}
                    <div className="star_prise justify-content-between">
                        <div className="star col-sm-8 col-12 lol" style={{display:"inline-block"}}>
                        <button className="btn btn-outline-warning mr-4" onClick={handleClick}><span><i class="fas fa-lg fa-shopping-cart"></i></span></button>
                            
                            {'  '}
                            {/* <a href="#"><span ><i class="far fa-lg fa-heart" style={{paddingRight:"20px"}}></i></span></a>{' '} */}
                            <Link to = {`/product/${data.productId}`}>{' '}Buy Now</Link>
                        </div>
                        <div className="prise col-sm-4 col-12 lol" style={{display:"inline-block"}}>
                            <span className="offer">${data.price}</span>
                            <span className="active_prise">
                                ${data.price-data.discount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default Product
