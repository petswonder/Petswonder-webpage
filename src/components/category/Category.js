import React, { useEffect, useState } from 'react';
import Card from '../core/Card';
import { productByCategory } from '../product/apiProduct';
import * as icons from '../../images/index';
import Heading from '../core/Heading';
import { Link } from 'react-router-dom';
import food from '../../images/categories/food.svg';

const Category = (props) => {
  const [data, setData] = useState([]);
  const icon = icons[`${props.match.params.name}Icon`];

  const getProductByCategory = (name, pet) => {
    productByCategory({ name, pet })
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
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
  console.log({ name });

  const categoryBox = (n, photo, categoryId, color, url) => {
    return (
      <div class='col-6 col-sm-2 categorylist'>
        <p class='banner'>
          <Link to={`/pet/${pet}/category/${name}/${url}`}>
            <img
              alt='Banner 01'
              class='img-responsive-categ'
              src={photo}
              style={{ backgroundColor: `${color}` }}
            />
          </Link>
        </p>
        <h6>
          <Link to={`/pet/${pet}/category/${name}/${url}`} class='title'>
            {n}
          </Link>
        </h6>
      </div>
    );
  };

  const FoodCategories = () => {
    return (
      <div className='container recent-game-section spad set-bg'>
        <div className='row'>
          {categoryBox('Dry food', food, 1, '#a685e2', 'Dry-food')}
          {categoryBox('Wet Food', food, 2, '#65d6ce', 'Wet-food')}
          {categoryBox('Vet Food', food, 3, '#fff76a', 'Vet-food')}
          {categoryBox('Treats&snacks', food, 4, '#fca3cc', 'Treat-Snacks')}
        </div>
      </div>
    );
  };

  return (
    <>
    <div class="">
      <img className='category-img w-100' src={icon} alt='' />
    </div>
    <div class="">
    <Heading text={`Pet ${name}`} />
    </div>
    <div className='container category'>
      
      <div className='row'>
        <div className='col-12 col-md-12'>
          
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
    </div>
    </>
  );
};

export default Category;
