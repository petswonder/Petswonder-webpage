import React, { useState } from 'react';

import Slider from "react-slick";
import img7 from '../../images/petcommunity.jpg';
import img6 from '../../images/donate.jpg';
import photo from '../../images/hero_image_01.png';

import slids1 from './imgs/slids1.jpg';

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="cursor-pointer position-absolute font-size-40 z-9 h-100 align-items-center d-flex px-4" style={{'left':0, 'background': 'linear-gradient(90deg, rgba(0,0,0,0.3), transparent)'}}><i class="fas fa-chevron-left text-light"></i></div>
  )
}

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="cursor-pointer position-absolute font-size-40 z-9 h-100 align-items-center d-flex px-4" style={{'top':0,'right':0, 'background': 'linear-gradient(-90deg, rgba(0,0,0,0.3), transparent)'}}><i class="fas fa-chevron-right text-light"></i></div>
  )
}

const slider_settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const HomeBannerSlider = ({ banners }) => {
  const items = banners;

  const slides = items.map((item) => {
    return (
      <div className="h-100 w-100">
        <img
          className='slider-images w-100 h-100'
          src={item.bannerName}
          alt='banner'
        />
      </div>
    );
  });

  return (
    <div className='h-400' data-setbg={photo}>
      <Slider {...slider_settings} className="h-100 w-100 overflow-hidden">
        {slides}
      </Slider>
    </div>
  );
};

export default HomeBannerSlider;
