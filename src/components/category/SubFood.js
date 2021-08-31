import React, { useState, useEffect } from 'react';
import Card from '../core/Card';
import { productBySubCategory } from '../product/apiProduct';
import * as icons from '../../images/index';
import Heading from '../core/Heading';

const SubFood = (props) => {
  const [data, setData] = useState([]);
  const icon = icons[`${props.match.params.name}Icon`];

  

  const name = props.match.params.name;
  const pet = props.match.params.pet;
  const sub = props.match.params.sub;

  useEffect(() => {
    const getProductByCategory = (name, pet) => {
      productBySubCategory({ name, pet, sub })
        .then((response) => {
          setData(response);
        })
        .catch((err) => {
          alert(err);
        });
    };
    getProductByCategory(name, pet);
    window.scrollTo(0, 0);
  }, [name, pet, sub]);

  
  // const pet = props.match.params.pet;

  return (
    <div className=''>
      <img className='category-img w-100' src={icon} alt='' />
      <Heading text={`${pet} ${sub}`} />
      <div className='container'>
        <div className='row'>
          {data &&
            data.map((p, i) => (
              <div
                key={i}
                className='col-xl-3 col-lg-4 col-6 product col-md-3 my-3'
              >
                <Card data={p} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SubFood;
