import React, { useEffect, useState } from 'react'
import Card from '../core/Card'
import {productByBrand} from '../product/apiProduct'
import Heading from '../core/Heading'

const Brand = (props) => {
    const [data, setData] = useState([]);
  
    const getProductByName = (name) =>{
        
        productByBrand(name)
        .then(response=>{
            setData(response)
        })
        .catch(err=> {
            console.log(err);
        })
    }
    useEffect(()=>{
        const name = props.match.params.name;
        getProductByName(name);
        window.scrollTo(0, 0);
    },[]);

    const name = props.match.params.name;

    return (
        <>
        <Heading text={`${name}`} />
        <div className="container">
            <div className="row">
                {data && data.map((p,i)=>(
                    <div key={i} className="col-md-3 col-xs-12 my-3">
                        <Card data={p} />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Brand
