import React, {useState, useEffect} from 'react'
import Card from '../core/Card';
import Heading from '../core/Heading';
import { getProducts } from '../product/apiProduct';

const PopularProductPage = () => {
    const [products, setProducts] = useState([]);

    const getProduct = () =>{
        
        getProducts()
        .then(response=>{
            setProducts(response)
        })
        .catch(err=> {
            console.log(err);
        })
    }
    useEffect(()=>{
        getProduct();
        window.scrollTo(0, 0);
    },[]);

    return (
        <div className="">
            
            <Heading text="Popular Products" />
            <div className="container">
                <div className="row">
                {products && products.map((data, i) => (
                    <div key={i} className="col-xl-3 col-lg-4 col-6 product my-3">
                        <Card data={data} className="text-center"/>
                    </div>
                ))}
                </div>
            </div>
            {/* <div class="group">
                <button className="btn btn-warning button" onClick={handleShowMorePosts}>Load More</button>
            </div> */}
            
        </div>
    )
}

export default PopularProductPage
