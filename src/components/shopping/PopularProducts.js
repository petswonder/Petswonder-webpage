import React, { useEffect, useState } from 'react'
import {getAllProducts} from '../auth/api'
import Card from '../core/Card'
import { Link } from 'react-router-dom'

const postsPerPage = 4;
let arrayForHoldingPosts = [];

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  const [postsToShow, setPostsToShow] = useState([]);
  // const [next, setNext] = useState(0);

  const loopWithSlice = (start, end) => {
    const slicedPosts = products.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  // const handleShowMorePosts = () => {
  //   loopWithSlice(next, next + postsPerPage);
  //   setNext(next + postsPerPage);
  // };

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        for (var i = 0; i < 4; ++i) {
          if (data[i] !== undefined) arrayForHoldingPosts[i] = data[i];
        }
        loopWithSlice(0, postsPerPage);
        // console.log(arrayForHoldingPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getAllProducts]);




    return (
        <div className="container">
            {/* <Heading text="Popular Products" /> */}
            {/* {postsToShow.length > 0 && ( */}
            {/* <Search /> */}
            <h2 className="text-center">Popular Products</h2>
            <div className="row">
                
                {postsToShow.map((data, i) => (
                    <div key={i} className="col-xl-3 col-lg-4 col-6 product text-center my-3">
                        <Card data={data} />
                    </div>
                ))}
                
            </div>
            {/* <div className="group">
                <button className="btn btn-warning button" onClick={handleShowMorePosts}>Load More</button>
            </div> */}
            <div className="text-center">
                <Link to="/popularProducts"><button className="btn btn-warning button">Explore More</button></Link>
            </div>
            <br/>
            
        </div>
    )
}

export default PopularProducts;
