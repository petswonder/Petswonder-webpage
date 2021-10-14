import React, { useEffect, useState } from 'react';

import ShopByBrand from '../shopping/ShopByBrand';
import { getProductsByPet } from '../auth/api'; 
import ShoppingCategories from '../shopping/ShoppingCategories';
import Slider from '../core/Slider';
import BannerApi from '../core/BannerApi';

const Pet = (props) => {
  // var banners = [];
  // const [items, setItems] = useState([]);
  const pet = props.match.params.pet;
  

  useEffect(() => {

    // const getBanners = () => {
    //   BannerApi()
    //     .then((data) => {
    //       banners = data.filter((ab) => {
    //         return ab.content === 'shopping';
    //       });
    //       setItems(banners);
    //     })
    //     .catch((err) => {
    //       alert(err);
    //     });
    // }
    const getProducts = (name) => {
      getProductsByPet(name)
        .then((response) => {
          // setData(response);
        })
        .catch((err) => {
          alert(err);
        });
    }
    getProducts(pet);
    // getBanners();
    
    window.scrollTo(0, 0);
  }, [pet]);

  const items = [
    {'id': 1, 'bannerName': require('../../images/banners/1.png').default},
    {'id': 2, 'bannerName': require('../../images/banners/2.jpg').default},
    {'id': 3, 'bannerName': require('../../images/banners/3.jpg').default},
    {'id': 4, 'bannerName': require('../../images/banners/4.jpg').default},
    {'id': 5, 'bannerName': require('../../images/banners/5.jpg').default}
  ]

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
