import React from 'react'

import { Link } from 'react-router-dom'
import ShopByBrand from './ShopByBrand'


const PetsCategories = () => {

    

    

    const petcategories = [
        {"name": "Dog", "img": require('../../images/pets/dog.svg').default},
        {"name": "Cat", "img": require('../../images/pets/cat.svg').default},
        {"name": "Fish", "img": require('../../images/pets/fish.svg').default},
        {"name": "Rabbit", "img": require('../../images/pets/rabbit.svg').default}

    ]

    

    return (
        <>
        <div class="my-3">
            <h2 class="text-center">Shop By Pets</h2>
            <div className="row my-4">
            {petcategories.map(pet => (
                <div class="col flex-column h-100 text-center">
                <Link to ={`/pet/${pet.name}`} className="">
                    <div className="mx-auto w-200 h-200 mx-auto">
                    <img src={pet.img} alt={pet.name + '_img'} className="img-responsive w-100 "/>
                    </div> 
                    {/* <h5 class="mt-3">{pet.name}</h5> */}
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
