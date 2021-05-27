import React from 'react'
import dog from '../../images/pets/dog 6.jpg'
import cat from '../../images/pets/cat 2.jpg'
import fish from '../../images/pets/fish 14.jpg'
import smallpets from '../../images/pets/smallpets.png'
import parrot from '../../images/pets/parrot.png'
import rabbit from '../../images/pets/rabbit 18.jpg'
import { Link } from 'react-router-dom'

const PetsCategories = () => {

    const petcategories = [
        {"name": "Dog", "imgUrl": dog},
        {"name": "Cat", "imgUrl": dog},
        {"name": "Fish", "imgUrl": dog},
        {"name": "Rabbit", "imgUrl": dog}

    ]

    const petbrands = [
        {"name": "Pedigree", "imgUrl": dog},
        {"name": "jerhigh", "imgUrl": dog},
        {"name": "Whiskas", "imgUrl": dog},
        {"name": "Purina", "imgUrl": dog},
        {"name": "drools", "imgUrl": dog},
        {"name": "Acana", "imgUrl": dog}
    ]

    return (
        <>
        <div class="my-3">
            <h2 class="text-center">Shop By Pets</h2>
            <div className="row">
            {petcategories.map(pet => (
                <div class="col flex-column h-100 text-center">
                <Link to ={`/pet/${pet.name}`} className="">
                    <div className="mx-auto w-200 h-200 mx-auto">
                    {/* <i class="fa fa-fish"></i> */}
                    <img src={pet.imgUrl} alt="Cats" title="Cats" className="img-responsive w-100 rounded-circle shadow "/>
                    </div>
                    <h5 class="mt-3">{pet.name}</h5>
                </Link>
                </div>
            ))}
           </div>
        </div>
        <div class="my-3">
            <h2 class="text-center">Shop By Brands</h2>
            <div className="row">
            {petbrands.map(pet => (
                <div class="col flex-column h-100 text-center">
                <Link to ={`/pet/${pet.name}`} className="">
                    <div className="mx-auto">
                    {/* <i class="fa fa-fish"></i> */}
                    <img src={pet.imgUrl} alt="Cats" title="Cats" className="img-responsive w-100 rounded-circle shadow "/>
                    </div>
                    <h5 class="mt-3">{pet.name}</h5>
                </Link>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}

export default PetsCategories
