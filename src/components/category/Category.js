import React, { useEffect, useState } from 'react';
import Card from '../core/Card';
import { productByCategory } from '../product/apiProduct';
import * as icons from '../../images/index';
import Heading from '../core/Heading';
import { Link } from 'react-router-dom';

const Category = (props) => {
  const [data, setData] = useState([]);
  const icon = icons[`${props.match.params.name}Icon`];

  const getProductByCategory = (name, pet) => {
    productByCategory({ name, pet })
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    const name = props.match.params.name;
    const pet = props.match.params.pet;
    getProductByCategory(name, pet);
    window.scrollTo(0, 0);
  }, []);

  const name = props.match.params.name;
  const pet = props.match.params.pet;

  const categories = [
    {
      id: 1,
      name: 'Dry Food',
      img: require('../../images/categories/food_1.svg').default,
      url: 'Dry-food',
    },
    {
      id: 2,
      name: 'Wet Food',
      img: require('../../images/categories/food_2.svg').default,
      url: 'Wet-food',
    },
    {
      id: 3,
      name: 'Vet Food',
      img: require('../../images/categories/food_3.svg').default,
      url: 'Vet-food',
    },
    {
      id: 4,
      name: 'Treats & Snacks',
      img: require('../../images/categories/food_4.svg').default,
      url: 'Treat-Snacks',
    },
  ];

  const FoodCategories = () => {
    return (
      <div className='container recent-game-section spad set-bg'>
        <div className='row'>
          {categories.map((item) => (
            <div className='col text-center my-3' key={item.id}>
              <Link to={`/pet/${pet}/category/${name}/${item.url}`}>
                <img
                  className='img-responsive mx-auto'
                  src={item.img}
                  style={{ 'max-width': '100px' }}
                  alt={item.name}
                />
                <h5 className='text-secondary mt-1'>{item.name}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className=''>
        <img className='category-img w-100' src={icon} alt='' />
      </div>
      <div className=''>
        <Heading text={`Pet ${name}`} />
      </div>
      <div className='container'>
        <div className='row'>
          {name === 'Food' && FoodCategories()}
          <div className='row my-4'>
            {data &&
              data.map((p, i) => (
                <div key={i} className='col-xl-3 col-lg-4 col-6 product'>
                  <Card data={p} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
