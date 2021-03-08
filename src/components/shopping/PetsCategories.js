import React from 'react'
import dog from '../../images/pets/dog 6.jpg'
import cat from '../../images/pets/cat 2.jpg'
import fish from '../../images/pets/fish 14.jpg'
import smallpets from '../../images/pets/smallpets.png'
import parrot from '../../images/pets/parrot.png'
import rabbit from '../../images/pets/rabbit 18.jpg'
import { Link } from 'react-router-dom'

const PetsCategories = () => {

    const pet = (name, photo) =>{
        return <div className="col-6 col-md-3 ttmcat-slider mb-3">
          <div className="content">
            <div className="image">
            <Link to ={`/pet/${name}`}>
              <img src={photo} alt="Cats" title="Cats" className="img-responsive-categ"/>
            </Link>
            </div>
            
            <div className="caption">
            <div className="cat-title">
              <h4><Link className="petscat" to ={`/pet/${name}`}>{name}</Link></h4>
                    </div>
                  </div> 
            
          </div>
	    </div>
    }




    return (
        <div className="shopbypets">
            <div className="colored-heading">
                <div className="row">
                    <div className="col-2">
                        <h2><i className="fas fa-paw"></i></h2>
                    </div>
                    <div className="col-8">
                        <h2>Shop By Pets</h2>
                    </div>
                    <div className="col-2">
                        <h2><i className="fas fa-paw"></i></h2>
                    </div>

                </div>
            </div>
            <br/>
            <div className="row">
            
            {pet("Dog", dog)}
            {pet("Cat", cat)}
            {pet("Rabbit", rabbit)}
            {pet("Fish", fish)}
            </div>
        </div>
    )
}

export default PetsCategories
