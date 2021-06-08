import React, { useEffect, useState } from 'react';

import ShopByBrand from '../shopping/ShopByBrand';
import { productByPets } from '../product/apiProduct';
import ShoppingCategories from '../shopping/ShoppingCategories';
import Slider from '../core/Slider';
import BannerApi from '../core/BannerApi';

const Pet = (props) => {
  var banners = [];
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);

  const getProductByName = (name) => {
    productByPets(name)
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        alert(err);
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
        alert(err);
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
