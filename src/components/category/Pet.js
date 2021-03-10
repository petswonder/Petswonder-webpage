import React, { useEffect, useState } from 'react';
import Card from '../core/Card';
import { productByPets } from '../product/apiProduct';
import * as icons from '../../images/index';
import Heading from '../core/Heading';
import ShoppingCategories from '../shopping/ShoppingCategories';
import Slider from '../core/Slider';
import dslide1 from '../../images/banners/pedigree.PNG';
import dslide2 from '../../images/banners/Farmina.PNG';
import dslide3 from '../../images/banners/Drools.PNG';
import cslide1 from '../../images/banners/ACANA.PNG';
import cslide2 from '../../images/banners/Farmina.PNG';
import cslide3 from '../../images/banners/Capt Zack.PNG';

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

  var slider;
  if (pet === 'Dog') {
    slider = <Slider slide1={dslide1} slide2={dslide2} slide3={dslide3} />;
  } else if (pet === 'Cat') {
    slider = <Slider slide1={cslide1} slide2={cslide2} slide3={cslide3} />;
  }

  return (
    <div className='container col-12'>
      <div className=' col-12 category'>
        <img className='category-img' src={icon} alt='' />
        {slider}
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
