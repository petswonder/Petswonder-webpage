import React, { useEffect, useState } from 'react';
import HomeBannerSlider from './Slider';
import Customer from './home/Customer';
import HomeContent from './home/HomeContent';
// import BannerApi from './BannerApi';

const Home = () => {
  // var banners = [];
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   const getBanners = () => {
  //     BannerApi()
  //       .then((data) => {
  //         banners = data.filter((ab) => {
  //           return ab.content === 'home';
  //         });
  //         setItems(banners);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   getBanners();
  //   window.scrollTo(0, 0);
  // }, []);
  const items = [
    {'id': 1, 'bannerName': require('../../images/banners/1.png').default},
    {'id': 2, 'bannerName': require('../../images/banners/2.jpg').default},
    {'id': 3, 'bannerName': require('../../images/banners/3.jpg').default},
    {'id': 4, 'bannerName': require('../../images/banners/4.jpg').default},
    {'id': 5, 'bannerName': require('../../images/banners/5.jpg').default}
  ]

  
  return (
    <div>
      {/* <Layout title="Home Page" description="Node React E-Commerce App" className="" > */}

      <HomeBannerSlider banners={items} />
      <Customer />
      <HomeContent />
    </div>
  );
};

export default Home;
