import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import HomeBannerSlider from './Slider';
import photo from '../../images/img7.jpg';
import Customer from './home/Customer';
import HomeContent from './home/HomeContent';
import petFood from '../../images/banners/Food.jpg';
import petCare from '../../images/banners/PetCare.jpg';
import petGifts from '../../images/banners/Gifts.jpg';
import BannerApi from './BannerApi';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
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
          return ab.content === 'home';
        });
        setItems(banners);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
