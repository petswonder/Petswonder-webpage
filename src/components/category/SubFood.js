import React, { useState, useEffect } from 'react';
import Card from '../core/Card';
import { getProductsBySubCategory } from '../auth/api';
import * as icons from '../../images/index';
import Heading from '../core/Heading';

const SubFood = (props) => {
  const [data, setData] = useState([]);
  const icon = icons[`${props.match.params.name}Icon`];

  

  const name = props.match.params.name;
  const pet = props.match.params.pet;
  const category = props.match.params.sub;
  // console.log(props.match.params)
  useEffect(() => {
    const getProductByCategory = (category, pet) => {
      getProductsBySubCategory(category, pet)
        .then((response) => {
          setData(response);
        })
        .catch((err) => {
          alert(err);
        });
    };
    getProductByCategory(category, pet);
    window.scrollTo(0, 0);
  }, [name, pet, category]);

  
  // const pet = props.match.params.pet;

  return (
    <div className=''>
      <img className='category-img w-100' src={icon} alt='' />
      <Heading text={`${pet} ${category}`} />
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
