import React, { useEffect, useState } from 'react'
import { list} from '../product/apiProduct'
import { Link } from 'react-router-dom';
import Card from './Card'
import photo from '../../images/search.png'
import {
    Navbar,
    NavDropdown,
    Nav,
    Form,
    Row,
    Col,
    FormControl,
    Button,
    Container,
    Dropdown
  } from 'react-bootstrap';

class SearchComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', searchResults: []};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        // if(search){
            list(event.target.value)
            .then(response=>{
                this.setState({searchResults : response})
            })
        // }
    }


    render() {
        return (
            <div className="position-relative">
            <Form inline className="bg-transparent form-inline border-secondary border rounded-pill mr-2">
                <FormControl type="text" placeholder="Search for brand/item" value={this.state.value} onChange={this.handleChange} className="bg-transparent form-control border-0 py-1 h-auto font-size-14"/>
                <Button className="bg-transparent py-0 rounded-0 border-0"><i className="fa fa-search"></i></Button>
            </Form>
            <ul className={`position-absolute w-100 list-group rounded-0 shadow z-9 overflow-auto ${this.state.value != '' ? 'max-height-200': ''}`}>
                { this.state.value == '' ? 
                    <li className="list-group-item py-0 border-0"></li>
                : this.state.searchResults.length == 0 ? 
                    <li className="list-group-item py-0 border-0">No Results</li>
                :
                    this.state.searchResults.map(item => (
                        <li className="list-group-item py-0 border-0"><Link to={{
                            pathname: `/product/${item.productId}`,
                            state: item,
                          }}>{item.title}</Link></li>
                    ))
                }
            </ul>
            
            {/* { this.state.searchResults.length > 0 ? (
                <ul className="position-absolute w-100 list-group rounded-0 shadow z-9">
                    {this.state.searchResults.map(item => (
                        <li className="list-group-item py-0 border-0">{item.title}</li>
                    ))}
                </ul>
            ) : 
                <ul className="position-absolute w-100 list-group rounded-0 shadow z-9">
                    {this.state.value != '' ? <li className="list-group-item py-0 border-0">No Results</li> : <li className="list-group-item py-0 border-0"></li> }
                </ul>} */}
            </div>
            
        )
    }
}

// const SearchComponent = (props) => {

//     const searchText = ''
//     const searchResults = ''

//     // this.state = {
//     //     searchText : '',
//     //     searchResults : []
//     // }

//     const [data, setData] = useState({
        
//         search: '',
//         results: [],
//         searched: false
//     });

//     const {search, results, searched} = data;


//     const searchData = () =>{
       
//         if(search){
//             list(search)
//             .then(response=>{
//                 setData({
//                     ...data, results: response, searched: true
//                 })
                
               
//             })
//         }
//     }

//     useEffect(()=>{
//         searchedProducts();
//     },[results])


//     const searchSubmit = e =>{
//         e.preventDefault();
//         searchData();
//     }

//     const handleChange = name => e =>{
//         setData({
//             ...data,
//             [name]: e.target.value,
//             searched: false
//         })
//     }

//     const searchedMessage = (searched, results) =>{
//         if(searched && results.length>0){
//             return `Found ${results.length} products`
//         }
//         if(searched && results.length<1){
//             return `No products Found`
//         }
//     }

//     const searchedProducts = (results= []) =>{
//         console.log(results);
//         return <div>
//             <h2 className="mt-4 mb-4">
//                 {searchedMessage(searched, results)}
//             </h2>
//             <div className="row">
                
//                 {results && results.map((r,i)=>(
//                     <div key={i} className="col-xl-3 col-lg-4 col-6 product">
//                         <Card data={r} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     }


//     const searchForm = () =>{
//         return <form onSubmit={searchSubmit}>
//             <span className="input-group-text">
//                 <div className="input-group input-group-md">
//                     <div className="input-group-prepend">
                        
//                     </div>
//                     <input type="search" name="search" value={search} onChange={handleChange('search')} className="form-control" placeholder="Search..."/>                    
//                 </div>
//                 <div className="btn input-group-append" style ={{border:"none"}} >
//                     <button className="input-group-text">
//                         Search
//                     </button>
//                 </div>
//             </span>
//         </form>
//     }

//     const getSearchResults = (text) => {
//         console.log(text)
//     }

//     // console.log(props.location.searchProp);
    
// }

export default SearchComponent
