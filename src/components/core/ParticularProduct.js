import React, { useEffect } from 'react';
import Card from './Card';
import Product from './Product';
import { productData } from '../shopping/shared';

const ParticularProduct = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  console.log(props.location.state);

  const relatedProducts = () => {
    return (
      <div className='container'>
        <h3 class="m-0">Related Products</h3>
        <div className='row text-center'>
          {productData.map((p, i) => (
            <div key={i} className='col-xl-3 col-lg-4 col-6 product h-400 my-3'>
              <Card data={p}/>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Product product={props.location.state} />
      {relatedProducts()}
    </div>
  );
};

export default ParticularProduct;
