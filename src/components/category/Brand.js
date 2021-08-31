import React, { useEffect, useState } from 'react';
import Card from '../core/Card';
import { Link } from 'react-router-dom';
import { productByBrand } from '../product/apiProduct';
import Heading from '../core/Heading';

const Brand = (props) => {
  const [data, setData] = useState([]);

  const getProductByName = (name) => {
    productByBrand(name)
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const name = props.match.params.name;
  useEffect(() => {
    // const name = props.match.params.name;
    getProductByName(name);
    window.scrollTo(0, 0);
  }, [name]);

  

  return (
    <>
      <Heading text={`${name}`} />
      <div className='container'>
        <div className='row'>
          {data.length === 0 ? (
            <div className='text-center py-3 col'>
              <img
                src={require('../../images/noproducts.svg').default}
                alt='noproducts'
                width='200px'
              />
              <h5 className='mt-2'>No Products Available</h5>
              <div className='text-center'>
                <Link to='/' className='btn btn-primary mx-2'>
                  Go to Home
                </Link>
                <Link to='/shopping' className='btn btn-primary mx-2'>
                  Shop Now
                </Link>
              </div>
            </div>
          ) : (
            data.map((p, i) => (
              <div key={i} className='col-md-3 col-xs-12 my-3'>
                <Card data={p} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Brand;
