import React, { useEffect } from 'react';
import Slider from '../core/Slider';
import Product from '../product/Product';
import PopularProducts from './PopularProducts';
import ShopByBrand from './ShopByBrand';
import ShopByPets from './ShopByPets';
import ShoppingCategories from './ShoppingCategories';
import petAccessories from '../../images/banners/Accessories.jpg';
import petGifts from '../../images/banners/Gifts.jpg';
import petFood from '../../images/banners/Food.jpg';

const Shopping = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Product />
      <ShopByPets />
      <Slider slide1={petAccessories} slide2={petGifts} slide3={petFood} />

      <ShopByBrand />
      <PopularProducts />
    </div>
  );
};

export default Shopping;
