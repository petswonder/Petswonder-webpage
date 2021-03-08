import React,{useEffect} from 'react'
import Slider from '../core/Slider'
import Product from '../product/Product'
import PopularProducts from './PopularProducts'
import ShopByBrand from './ShopByBrand'
import ShopByPets from './ShopByPets'
import ShoppingCategories from './ShoppingCategories'

const Shopping = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div>
            <Product />
            <ShopByPets />
            <Slider />
        
            <ShopByBrand />
            <PopularProducts />
        </div>
    )
}

export default Shopping
