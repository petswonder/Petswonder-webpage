import React, { useEffect, useState } from 'react';
import Card from '../core/Card';
import { productByCategory } from '../product/apiProduct';
import * as icons from '../../images/index';
import Heading from '../core/Heading';
import ShoppingCategories from '../shopping/ShoppingCategories';
import { Link } from 'react-router-dom';
import food from '../../images/categories/food1.png';

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
          {categoryBox('Dry Food', food, 1, '#a685e2', 'Dry+Food')}
          {categoryBox('Wet Food', food, 2, '#65d6ce', 'Wet+Food')}
          {categoryBox('Vet Food', food, 3, '#fff76a', 'Vet+Food')}
          {categoryBox('Snacks&Treats', food, 4, '#fca3cc', 'Snacks&Treats')}
        </div>
      </div>
    );
  };

  return (
    <div className='container category col-12 '>
      <img className='category-img' src={icon} alt='' />
      <div className='row'>
        <div className='col-12 col-md-12'>
          <Heading text={`Pet ${name}`} />
          <br />
          {name === 'Food' && FoodCategories()}
          <div className='row'>
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
  );
};

export default Category;
