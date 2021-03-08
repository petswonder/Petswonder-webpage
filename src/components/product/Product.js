import React, { useEffect, useState } from 'react'
import {getProducts} from './apiProduct'


const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
        .then(data => (setProducts(data)))
        .catch(err=> {
            console.log(err);
        })

        console.log(products);
    },[]);

   

    return (
        <div>
            
        </div>
    )
}

export default Product
