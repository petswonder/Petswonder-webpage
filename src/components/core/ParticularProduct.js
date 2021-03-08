import React, {useEffect} from 'react'
import  Card  from './Card'
import Product from './Product'
import {productData} from '../shopping/shared'



const ParticularProduct = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    console.log(props.location.productProps);

    const relatedProducts = () =>{
        return <div className="recent-game-section spad set-bg container col-xl-11 col-12" style={{textAlign: "left"}}>
            <h1 >Related Products</h1>
            <hr/>
            <div className="row" style={{textAlign:"center"}}>
                {productData.map((p,i)=>(
                    <div key={i} className="col-xl-3 col-lg-4 col-6 product">
                        <Card data={p} />
                    </div>
                ))}
            </div>
            
        </div>
    }

    
    return (
        <div>
            <Product product= {props.location.productProps} />
            <br/>
            {relatedProducts()}
            

        </div>
    )
}

export default ParticularProduct
