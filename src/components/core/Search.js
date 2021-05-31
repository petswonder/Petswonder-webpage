import React from 'react'
import { list} from '../product/apiProduct'
import { Link } from 'react-router-dom';
import {
    Form,
    FormControl,
    Button
  } from 'react-bootstrap';

// const Sea
class SearchComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', searchResults: []};

        this.handleChange = this.handleChange.bind(this);
        this.resetSearch = this.resetSearch.bind(this);

    }

    resetSearch(){
        this.state.value = ''
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
            <Form inline className="bg-transparent form-inline border-secondary border rounded-pill ">
                <FormControl type="text" placeholder="Search for brand/item" value={this.state.value} onChange={this.handleChange} className="bg-transparent form-control border-0 py-1 h-auto font-size-14 w-350"/>
                <Button className="bg-transparent py-0 rounded-0 border-0"><i className="fa fa-search"></i></Button>
            </Form>
            <ul className={`position-absolute w-100 list-group rounded-0 shadow z-9 overflow-auto ${this.state.value !== '' ? 'max-height-200': ''}`}>
                { this.state.value === '' ? 
                    <li className="list-group-item py-0 border-0"></li>
                : this.state.searchResults.length === 0 ? 
                    <li className="list-group-item py-0 border-0">No Results</li>
                :
                    this.state.searchResults.map(item => (
                        <li className="list-group-item py-0 border-0" key={item.id}><Link to={{
                            pathname: `/product/${item.productId}`,
                            state: item,
                          }} onClick={this.resetSearch}>{item.title}</Link></li>
                    ))
                }
            </ul>
            </div>
            
        )
    }
}
export default SearchComponent
