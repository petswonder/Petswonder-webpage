import React, { useEffect, useState } from 'react'
import Card from '../core/Card';

const SearchPage = (props) => {
    const [searchProducts, setProducts] = useState(props.location.searchProducts)
    const [searchTerm, setTerm] = useState(props.location.searchTerm)
    
    useEffect(() => {
        // setTerm(props.location.searchTerm)
        // setProducts(props.location.state)
        const temp1 = searchProducts === undefined ? JSON.parse(window.localStorage.getItem('searchProds')) : searchProducts
        setProducts(temp1)
        const temp2 = searchTerm === undefined ? window.localStorage.getItem('searchVal') : searchTerm
        setTerm(temp2)
    })

    return (
        <>
        
        <div className="container min-height-350">
        {searchProducts === undefined ? (<></>) : (
            <>
            <div className="row py-2">
            <div className="col">
                <p className="m-0">{searchProducts.length} Results for {searchTerm}</p>
            </div>
            </div>
            <div className="row pb-2">
                {searchProducts.length === 0 ? (<h1>No Search Results</h1>) : (
                    searchProducts.map((product, i)=> (
                        <div className="col-md-3 my-2" key={i}>
                            <Card data={product}  />
                        </div>         
                    ))
                )}
                
            </div>
            
            
            </>
        )}
        </div>
        </>
    )
}
export default SearchPage
