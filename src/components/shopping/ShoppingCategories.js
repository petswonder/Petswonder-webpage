import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCategories = (pet) => {
  var categories = [
    {"id": 1, "name": "Food", "img": require('../../images/categories/food.svg').default},
    {"id": 2, "name": "Grooming", "img": require('../../images/categories/grooming.svg').default},
    {"id": 3, "name": "Accessories", "img": require('../../images/categories/accessories.svg').default},
    {"id": 4, "name": "Toys", "img": require('../../images/categories/toys.svg').default},
    {"id": 5, "name": "Gifts", "img": require('../../images/categories/gifts.svg').default},
    {"id": 6, "name": "Clothing", "img": require('../../images/categories/clothes.svg').default}
  ]
  
  if((pet.pet !== 'Dog') && (pet.pet !== 'Cat')){
    categories = categories.slice(0,5)
  }

  return (

      <div className='row'>
        {categories.map(category => (
          
          <div className="col my-3">
           <Link to={`/pet/${pet.pet}/category/${category.name}`} className="text-center">
           <img alt={category.name + '_img'} class='w-100 p-4' src={category.img}/>
           <h5 className="text-secondary">{category.name}</h5>
          </Link>
          </div>
        ))}
        {/* {pet.pet === 'Dog' && categoryBox('Clothing', clothing, 5, '#f6d6ad')}
        {pet.pet === 'Cat' && categoryBox('Clothing', clothing, 5, '#f6d6ad')} */}
      </div>
  );
};

export default ShoppingCategories;
