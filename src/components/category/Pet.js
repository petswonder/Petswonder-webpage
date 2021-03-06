import React, { useEffect, useState } from 'react';

import ShopByBrand from '../shopping/ShopByBrand';
import Card from '../core/Card';
import { productByPets } from '../product/apiProduct';
import * as icons from '../../images/index';
import Heading from '../core/Heading';
import ShoppingCategories from '../shopping/ShoppingCategories';
import Slider from '../core/Slider';
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
    <>
    <Slider banners={items} />
    <div className='container'>
      <ShoppingCategories pet={pet} />
      <ShopByBrand />
    </div>
    </>
  );
};

export default Pet;
