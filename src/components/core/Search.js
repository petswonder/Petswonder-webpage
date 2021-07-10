import React , {useState, useEffect }from 'react'
import { list} from '../product/apiProduct'
import { Link, useHistory } from 'react-router-dom';
import {
    Form,
    FormControl,
    Button
  } from 'react-bootstrap';

// const Sea
const SearchComponent = () => {
    const [searchVal, setSearchVal] = useState('');
    const history = useHistory()

    useEffect(() => {
        const temp = searchVal === undefined ? window.localStorage.getItem('searchVal') : searchVal
        setSearchVal(temp)
    })
    
    useEffect(() => {
        window.localStorage.setItem('searchVal', searchVal)
        const timeout = setTimeout(() => {
            handleChange(searchVal)
        }, 1000)
        return () => clearTimeout(timeout)
      }, [searchVal])

    
    const handleChange = (searchInput) => {
        if((searchInput !== '')){
            list(searchInput)
            .then(response=>{
                window.localStorage.setItem('searchProds', JSON.stringify(response))
                history.push({ 
                    pathname: '/search',
                    searchProducts: response,
                    searchTerm : searchInput,
                    state: response
                });
            })
        }
        else{
            history.push('/')
        }
        
    }


    return (
        <div className="position-relative">
        <Form inline className="bg-transparent form-inline border-secondary border rounded-pill ">
            <FormControl type="text" placeholder="Search for brand/item" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className="bg-transparent form-control border-0 py-1 h-auto font-size-14 w-350"/>
            <Button className="bg-transparent py-0 rounded-0 border-0"><i className="fa fa-search"></i></Button>
        </Form>
        </div>
        
    )
}
export default SearchComponent
