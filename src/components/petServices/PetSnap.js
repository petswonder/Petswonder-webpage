import React, { useState, useEffect} from 'react'
import Heading from '../core/Heading'
import Book from './Book'
import {getAllDoctors} from './petApi'
import PetGroom from '../../images/PetGroom.jpg'
import PetPhoto from '../../images/PetPhoto.png'


const PetSnap = () => {


    return (
        <div className="">
            <Heading text="Pet Snap" />
            <div className="container my-4">
                <div className="row">

                
                <Book d={{title:"Pet Photography", serviceImageUrls:PetPhoto, price:"20"}} comingSoon="true"   />
                </div>
            </div>
        </div>
    )
}

export default PetSnap
