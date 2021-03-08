import React from 'react'
import food from '../../images/categories/food1.png'
import petcare from '../../images/categories/grooming.png'
import acc from '../../images/categories/accessories1.png'
import toys from '../../images/categories/toys1.png'
import gifts from '../../images/categories/clothing.png'
import { Link } from 'react-router-dom'

const ShoppingCategories = (pet) => {

    
    console.log(pet.pet);

    const categoryBox = (name, photo, categoryId, color) =>{
        return <div class="col-6 col-sm-2 categorylist">
            <p class="banner">
                <Link to ={`/pet/${pet.pet}/category/${name}`}>
                    <img alt="Banner 01" class="img-responsive-categ" src={photo} style={{ backgroundColor: `${color}`}} />
                </Link>
            </p>
            <h6><Link to ={`/pet/${pet.pet}/category/${name}`} class="title" >{name}</Link></h6>
        </div>
    }




    return (
        <div className="container recent-game-section spad set-bg">
            <br/>
            {/* <div className="colored-heading">
                <div className="row">
                    <div className="col-2">
                        <h2><i class="fas fa-paw"></i></h2>
                    </div>
                    <div className="col-8">
                        <h2>Shop By Category</h2>
                    </div>
                    <div className="col-2">
                        <h2><i class="fas fa-paw"></i></h2>
                    </div>

                </div>
            </div> */}
     
            <div className="row">
                {categoryBox("Food", food, 1, "#a685e2")}
                {categoryBox("Grooming", petcare, 2, "#65d6ce")}
                {categoryBox("Accessories", acc, 3, "#fff76a")}
                {categoryBox("Toys", toys, 4, "#fca3cc")}
                {categoryBox("Gifts", gifts, 5, "#f6d6ad")}
            </div>
        </div>
    )
}

export default ShoppingCategories
