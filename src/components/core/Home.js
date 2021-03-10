import React, { useEffect } from 'react';
import Layout from './Layout';
import Slider from './Slider';
import photo from '../../images/img7.jpg';
import Customer from './home/Customer';
import Extra from './Extra';
import Getall from './home/Getall';
import Vet from './home/Vet';
import Partner from './home/Partner';
import petFood from '../../images/banners/Food.jpg';
import petCare from '../../images/banners/PetCare.jpg';
import petGifts from '../../images/banners/Gifts.jpg';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <Layout title="Home Page" description="Node React E-Commerce App" className="" > */}

      <Slider slide1={petFood} slide2={petCare} slide3={petGifts} />
      <Customer />
      <Extra />
      <Getall />
      <Vet />
      <Partner />
      {/* </Layout> */}
    </div>
  );
};

export default Home;
