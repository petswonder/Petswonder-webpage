import React, { useEffect, useState } from 'react';
import Slider from '../core/Slider';
import Product from '../product/Product';
import PopularProducts from './PopularProducts';
import ShopByBrand from './ShopByBrand';
import ShopByPets from './ShopByPets';
import ShoppingCategories from './ShoppingCategories';
import petAccessories from '../../images/banners/Accessories.jpg';
import petGifts from '../../images/banners/Gifts.jpg';
import petFood from '../../images/banners/Food.jpg';
import BannerApi from '../core/BannerApi';

const Shopping = () => {
  var banners = [];
  const [items, setItems] = useState([]);
  useEffect(() => {
    getBanners();
    window.scrollTo(0, 0);
  }, []);

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
    <div>
      <Slider banners={items} />
      {/* <Product /> */}
      <ShopByPets />

      {/* <ShopByBrand /> */}
      <PopularProducts />
    </div>
  );
};

export default Shopping;
