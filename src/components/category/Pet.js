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
import { brand } from '../shopping/Brands';
import jerhigh from '../../images/brands/jerhigh.jpg';
import pedigree from '../../images/brands/pedigree.png';
import whiskas from '../../images/brands/whiskas.png';
import purina from '../../images/brands/purina.png';
import acana from '../../images/brands/acana.png';
import drools from '../../images/brands/drools.png';
import BannerApi from '../core/BannerApi';

const Pet = (props) => {
  var banners = [];
  const [items, setItems] = useState([]);
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
    getBanners();
    window.scrollTo(0, 0);
  }, []);

  const pet = props.match.params.pet;

  const getBanners = () => {
    BannerApi()
      .then((data) => {
        banners = data.filter((ab) => {
          return ab.content === 'shopping';
        });
        setItems(banners);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container col-12'>
      <div className=' col-12 category'>
        <img className='category-img' src={icon} alt='' />
      </div>
      <div className='container'>
        <ShoppingCategories pet={pet} />
      </div>
      <div className='col-12'>
        <Slider banners={items} />
      </div>

      <div className='container col-12 col-md-12'>
        <h1 className='mt-4 mb-4'>{props.location.nameProps}</h1>
        {/* <Heading text={`Pet ${name}`} /> */}
        <br />
        <div className='row'>
          <div className='col-12 col-md-12'>
            <Heading text='Our popular brands' />
          </div>
          <br />
          <div className='row mx-auto p-5'>
            {brand('pedigree', pedigree)}
            {brand('jerhigh', jerhigh)}
            {brand('whiskas', whiskas)}
            {brand('purina', purina)}
            {brand('drools', drools)}
            {brand('acana', acana)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
