import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';



const ShopByBrand = () => {
    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
          <div onClick={onClick} className="cursor-pointer position-absolute font-size-40 z-9 h-100 align-items-center d-flex px-4" style={{'left':-60}}><i class="fas fa-chevron-left text-dark"></i></div>
        )
      }
      
      const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
          <div onClick={onClick} className="cursor-pointer position-absolute font-size-40 z-9 h-100 align-items-center d-flex px-4" style={{'top':0,'right':-60}}><i class="fas fa-chevron-right text-dark"></i></div>
        )
      }
      const slider_settings = {
        pauseOnHover: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite:true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    const petbrands = [
        {"name": "Pedigree", "img": require('../../images/brands/pedigree.png').default},
        {"name": "jerhigh", "img": require('../../images/brands/jerhigh.jpg').default},
        {"name": "Whiskas", "img": require('../../images/brands/whiskas.png').default},
        {"name": "Purina", "img": require('../../images/brands/purina.png').default},
        {"name": "drools", "img": require('../../images/brands/drools.png').default},
        {"name": "Acana", "img": require('../../images/brands/acana.png').default}
    ]
    return (
        <>
        <div class="my-3">
            <h2 class="text-center mt-5 mb-0">Shop By Brands</h2>
            <div class="row">
              <Slider {...slider_settings} className="h-100 w-100 align-items-center">
              {petbrands.map(brand => (
                <div class="col flex-column h-100 text-center">
                <Link to ={`/brand/${brand.name}`} className="">
                    <div className="mx-auto w-200 h-200 align-items-center d-flex">
                    {/* <i class="fa fa-fish"></i> */}
                    <img src={brand.img} alt={brand.name + '_img'} className="mx-auto w-75"/>
                    </div>
                    {/* <h5 class="mt-3">{brand.name}</h5> */}
                </Link>
                </div>
              ))}
              </Slider>
            </div>
            
        </div>
        </>
    )
}

export default ShopByBrand
