import React, { useEffect, useState } from 'react';
import Card from './Card';
import Product from './Product';
import {getProducts} from '../product/apiProduct'
import { Link } from 'react-router-dom'



const ParticularProduct = (props) => {
  const [relatedProducts, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.slice(0,4));
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getProducts]);
  

  

  return (
    <div>
      <Product product={props.location.state} />
      <div className='container'>
        <h3 className="m-0">Related Products</h3>
        <div className='row text-center'>
          {relatedProducts.map((p, i) => (
            <div key={i} className='col-xl-3 col-lg-4 col-6 productmy-3'>
              <Card data={p}/>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mb-3">
          <Link to="/popularProducts"><button className="btn btn-warning button">Explore More</button></Link>
      </div>
    </div>
  );
};

export default ParticularProduct;
