import React from 'react'
import { Link } from 'react-router-dom'
import jerhigh from '../../images/brands/jerhigh.jpg'
import pedigree from '../../images/brands/pedigree.png'
import whiskas from '../../images/brands/whiskas.png'
import purina from '../../images/brands/purina.png'
import acana from '../../images/brands/acana.png'
import drools from '../../images/brands/drools.png'

const Brands = () => {
    const brand = (name, photo) =>{
        return <div class="col-6 col-md-2 ttmcat-slider mb-3">
          <div class="content">
            <div class="">
            <Link to ={`/brand/${name}`}>
              <img src={photo} alt="Cats" title="Cats" class="same-sizes"/>
            </Link>
            </div>
            
            
            
          </div>
	    </div>
    }




    return (
        <div className="shopbypets">
            <div className="colored-heading">
                <div className="row">
                    <div className="col-2">
                        <h2><i class="fas fa-paw"></i></h2>
                    </div>
                    <div className="col-8">
                        <h2>Shop By Brands</h2>
                    </div>
                    <div className="col-2">
                        <h2><i class="fas fa-paw"></i></h2>
                    </div>

                </div>
            </div>
            <br/>
            <div className="row">
            
            {brand("pedigree", pedigree)}
            {brand("jerhigh", jerhigh)}
            {brand("whiskas", whiskas)}
            {brand("purina", purina)}
            {brand("drools", drools)}
            {brand("acana", acana)}
            </div>
        </div>
    )
}

export default Brands
