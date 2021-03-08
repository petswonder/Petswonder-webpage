import React, { useEffect, useState } from 'react'
import img4 from '../../images/popular-products/pedigree.jpg'
import {getProducts} from '../product/apiProduct'
import Product from './Product'
import {productData} from './shared'
import Card from '../core/Card'
import Search from '../core/Search'
import { Link } from 'react-router-dom'
import Heading from '../core/Heading'

const postsPerPage = 4;
let arrayForHoldingPosts = [];

const PopularProducts = () => {


    const [products, setProducts] = useState([]);

    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(0);

    const loopWithSlice = (start, end) => {
        const slicedPosts = products.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
    };

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
    };

    useEffect(()=>{
        

        getProducts()
        .then(data => {
            (setProducts(data))
            for (var i=0; i<4; ++i)
            {
              if(data[i] != undefined)
              arrayForHoldingPosts[i] = data[i];

            }
            loopWithSlice(0, postsPerPage);
            console.log(arrayForHoldingPosts);
        })
        .catch(err=> {
            console.log(err);
        })

        
    },[getProducts]);



    return (
        <div className="recent-game-section spad set-bg container col-xl-11 col-12">
            <br/>
            <br/>
            <br/>
            <Heading text="Popular Products" />
            <br/>
            {/* {postsToShow.length > 0 && ( */}
            {/* <Search /> */}
            <div className="row">
                
                {postsToShow.map((data, i) => (
                    <div key={i} className="col-xl-3 col-lg-4 col-6 product">
                        <Card data={data} />
                    </div>
                ))}
                
            </div>
            {/* <div class="group">
                <button className="btn btn-warning button" onClick={handleShowMorePosts}>Load More</button>
            </div> */}
            <div class="group">
                <Link to="/popularProducts"><button className="btn btn-warning button">Explore More</button></Link>
            </div>
            <br/>
            
        </div>
    )
}

export default PopularProducts
