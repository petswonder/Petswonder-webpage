import React, { useState, useEffect } from 'react';
import Card from '../core/Card';
import { productBySubCategory } from '../product/apiProduct';
import * as icons from '../../images/index';
import Heading from '../core/Heading';

const SubFood = (props) => {
  const [data, setData] = useState([]);
  const icon = icons[`${props.match.params.name}Icon`];

  const getProductByCategory = (name, pet) => {
    productBySubCategory({ name, pet, sub })
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const name = props.match.params.name;
    const sub = props.match.params.sub;
    const pet = props.match.params.pet;
    getProductByCategory(name, pet);
    window.scrollTo(0, 0);
  }, []);

  const name = props.match.params.name;
  const sub = props.match.params.sub;
  const pet = props.match.params.pet;
  console.log(name, sub, pet);

  return (
    <div className='container category col-12 '>
      <img className='category-img' src={icon} alt='' />
      <div className='row'>
        <div className='col-12 col-md-12'>
          <Heading text={`${pet} ${sub}`} />
          <br />
          <div className='row'>
            {data &&
              data.map((p, i) => (
                <div key={i} className='col-xl-3 col-lg-4 col-6 product'>
                  <Card data={p} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFood;
