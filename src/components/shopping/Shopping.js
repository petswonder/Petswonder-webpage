import React, { useEffect, useState } from 'react';
import HomeBannerSlider from '../core/Slider';
import PopularProducts from './PopularProducts';
import ShopByPets from './ShopByPets';
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
      <HomeBannerSlider banners={items} />
      {/* <Product /> */}
      <ShopByPets />

      {/* <ShopByBrand /> */}
      <PopularProducts />
    </div>
  );
};

export default Shopping;
