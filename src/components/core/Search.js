import React, { useEffect, useState } from 'react'
import { list} from '../product/apiProduct'
import Card from './Card'
import photo from '../../images/search.png'

const Search = (props) => {

    const [data, setData] = useState({
        search: '',
        results: [],
        searched: false
    });

    const {search, results, searched} = data;


    const searchData = () =>{
       
        if(search){
            list(search)
            .then(response=>{
                setData({
                    ...data, results: response, searched: true
                })
                
               
            })
        }
    }

    useEffect(()=>{
        searchedProducts();
    },[results])


    const searchSubmit = e =>{
        e.preventDefault();
        searchData();
    }

    const handleChange = name => e =>{
        setData({
            ...data,
            [name]: e.target.value,
            searched: false
        })
    }

    const searchedMessage = (searched, results) =>{
        if(searched && results.length>0){
            return `Found ${results.length} products`
        }
        if(searched && results.length<1){
            return `No products Found`
        }
    }

    const searchedProducts = (results= []) =>{
        console.log(results);
        return <div>
            <h2 className="mt-4 mb-4">
                {searchedMessage(searched, results)}
            </h2>
            <div className="row">
                
                {results && results.map((r,i)=>(
                    <div key={i} className="col-xl-3 col-lg-4 col-6 product">
                        <Card data={r} />
                    </div>
                ))}
            </div>
        </div>
    }


    const searchForm = () =>{
        return <form onSubmit={searchSubmit}>
            <span className="input-group-text">
                <div className="input-group input-group-md">
                    <div className="input-group-prepend">
                        
                    </div>
                    <input type="search" name="search" value={search} onChange={handleChange('search')} className="form-control" placeholder="Search..."/>                    
                </div>
                <div className="btn input-group-append" style ={{border:"none"}} >
                    <button className="input-group-text">
                        Search
                    </button>
                </div>
            </span>
        </form>
    }

    // console.log(props.location.searchProp);
    return (
        <div>
            <div className="container mb-2" style={{marginTop: "100px"}}>
                {searchForm()}
                {results.length<1 && <img src={photo} alt=""/> }
            </div>
            <div className="container-fluid mb-3" style={{paddingLeft:"0"}}>
                {searchedProducts(results)}                    
            </div>
        </div>
    )
}

export default Search
