import React, { useEffect, useState } from 'react';
import HomeBannerSlider from '../core/Slider';
import PopularProducts from './PopularProducts';
import ShopByPets from './ShopByPets';
import BannerApi from '../core/BannerApi';

const Shopping = () => {
  // var banners = [];
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   getBanners();
  //   window.scrollTo(0, 0);
  // }, []);

  // const getBanners = () => {
  //   BannerApi()
  //     .then((data) => {
  //       banners = data.filter((ab) => {
  //         return ab.content === 'shopping';
  //       });
  //       setItems(banners);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const items = [
    {'id': 1, 'bannerName': require('../../images/banners/1.png').default},
    {'id': 2, 'bannerName': require('../../images/banners/2.jpg').default},
    {'id': 3, 'bannerName': require('../../images/banners/3.jpg').default},
    {'id': 4, 'bannerName': require('../../images/banners/4.jpg').default},
    {'id': 5, 'bannerName': require('../../images/banners/5.jpg').default}
  ]

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
