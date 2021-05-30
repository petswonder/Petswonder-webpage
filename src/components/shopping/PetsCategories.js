import React from 'react'

import { Link } from 'react-router-dom'
import ShopByBrand from './ShopByBrand'


const PetsCategories = () => {

    const petcategories = [
        {"id": 1,"name": "Dog", "img": require('../../images/pets/dog.svg').default},
        {"id": 2,"name": "Cat", "img": require('../../images/pets/cat.svg').default},
        {"id": 3,"name": "Fish", "img": require('../../images/pets/fish.svg').default},
        {"id": 4,"name": "Rabbit", "img": require('../../images/pets/rabbit.svg').default}

    ]

    

    return (
        <>
        <div className="my-3">
            <h2 className="text-center">Shop By Pets</h2>
            <div className="row my-4">
            {petcategories.map(pet => (
                <div className="col flex-column h-100 text-center" key={pet.id}>
                <Link to ={`/pet/${pet.name}`} className="text-center">
                    <div className="">
                    <img src={pet.img} alt={pet.name + '_img'} className="img-responsive mx-auto" style={{'width': '150px'}}/>
                    </div> 
                    <h5 className="mt-3 font-weight-bold text-secondary">{pet.name}</h5>
                </Link>
                </div>
            ))}
           </div>
        </div>
        <ShopByBrand/>
        </>
    )
}

export default PetsCategories
