import React, { useEffect, useState } from 'react';
import Card from '../core/Card';
import { productByPets } from '../product/apiProduct';
import * as icons from '../../images/index';
import Heading from '../core/Heading';
import ShoppingCategories from '../shopping/ShoppingCategories';

const Pet = (props) => {
  const [data, setData] = useState([]);
  const icon = icons[`${props.match.params.pet}Icon`];

  const getProductByName = (name) => {
    productByPets(name)
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const pet = props.match.params.pet;
    getProductByName(pet);
    window.scrollTo(0, 0);
  }, []);

  const pet = props.match.params.pet;

  return (
    <div className='container col-12'>
      <div className=' col-12 category'>
        <img className='category-img' src={icon} alt='' />
      </div>
      <div className='container'>
        <ShoppingCategories pet={pet} />
      </div>

      <div className='container col-12 col-md-12'>
        <h1 className='mt-4 mb-4'>{props.location.nameProps}</h1>
        {/* <Heading text={`Pet ${name}`} /> */}
        <br />
        <div className='row'>
          {data &&
            data.map((p, i) => (
              <div key={i} className='col-xl-3 col-lg-4 col-12 product'>
                <Card data={p} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pet;
