import React, { useState } from 'react'
import Card from '../core/Card';



// const Sea
const SearchPage = (props) => {
    const searchProducts = props.location.searchProducts
    const searchTerm = props.location.searchTerm

    return (
        <>
        <div className="container min-height-350">
            <div className="row py-2">
                <div className="col">
                    <p className="m-0">{searchProducts.length} Results for {searchTerm}</p>
                </div>
            </div>
            <div className="row pb-2">
                {searchProducts.length == 0 ? (<h1>No Search Results</h1>) : (
                    searchProducts.map((product, i)=> (
                        <div className="col-md-3 my-2" key={i}>
                            <Card data={product}  />
                        </div>         
                    ))
                )}
                
            </div>
        </div>
        </>
    )
}
export default SearchPage
