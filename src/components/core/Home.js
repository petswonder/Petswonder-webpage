import React, { useEffect, useState } from 'react';
import HomeBannerSlider from './Slider';
import Customer from './home/Customer';
import HomeContent from './home/HomeContent';
import BannerApi from './BannerApi';

const Home = () => {
  var banners = [];
  const [items, setItems] = useState([]);
  useEffect(() => {
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
    }
    getBanners();
    window.scrollTo(0, 0);
  }, []);

  
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
