import React, { useEffect, useState } from 'react'
import Card from '../core/Card'
import {productByBrand} from '../product/apiProduct'
import * as icons from '../../images/index'
import Heading from '../core/Heading'

const Brand = (props) => {
    const [data, setData] = useState([]);
    const icon = icons[`${props.match.params.name}Icon`];
  
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
        <div className="container category col-12 ">
            <img className="category-img" src={icon} alt=""/>
            <div className="row">
                {/* <div className="col-12 col-md-3">
                <h1 className="mt-4 mb-4">Filters</h1>
                <hr/>
                <Search />
                <ul className="mt-2" style={{background: "#fff"}}>
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                    <Checkbox />
                </ul>
                </div> */}
                <div className="col-12 col-md-12">
                    <h1 className="mt-4 mb-4">{props.location.nameProps}</h1>
                    <Heading text={`${name}`} />
                    <br/>
                    <div className="row">
                        
                            {data && data.map((p,i)=>(
                                <div key={i} className="col-xl-3 col-lg-4 col-6 product">
                                    <Card data={p} />
                                </div>
                            ))}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Brand
