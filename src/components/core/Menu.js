import React, { useState } from 'react';
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
import { Link, NavLink, withRouter } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth/index';
import { getCart } from '../cart/cartApi';
import LogoName from '../../images/LogoName.png';
import SearchComponent from '../core/Search'

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#000000' };
  } else return { color: '#ffffff' };
};






const Menu = ({ history }) => {
  const nav_items = [
    {id: 1, name: "Home", auth: false, link: "/" },
    {id: 2, name: "Shopping", auth: false, link: "/shopping" },
    {id: 3, name: "Pet Care", auth: true, link: "/petCare" },
    {id: 4, name: "Pet Mate", auth: true, link: "/petMate" },
    {id: 5, name: "Pet Snap", auth: true, link: "/petSnap" },
    {id: 6, name: "Pet Guide", auth: true, link: "/petGuide" }
  ]
  const jwt = isAuthenticated();
  
  const def_nav_items = nav_items.filter( i => {return i.auth == false})
  const search_bar = false
  const [cart_length, setCount] = useState([]);
  
  if(jwt){
    getCart(jwt.user.userNumber)
      .then((data) => {
        setCount(data.cart.length)
      })
    }
  

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light" className="py-1 fixed-top">
      <Container>
      <Navbar.Brand><Link to={'/'} className="nav-link p-0"> <img src={LogoName} style={{ width: '160px' }} /> </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="row flex-column w-100">
          <div className="col-12">
          <Nav className="d-flex justify-content-end align-items-center">
            <SearchComponent />
          
          {!jwt ? (
            <div className="ml-2">
              <Link to='/signin' className="font-size-14 btn btn-secondary text-white py-1 mr-3 rounded-pill">Sign In</Link>
              <Link to='/signup' className="font-size-14 btn btn-secondary text-white py-1 rounded-pill">Sign Up</Link>
            </div>
          ) : (
            <>
              <Link to='/cart' className="font-size-22 mx-3">
                <i className="fas fa-shopping-cart text-secondary"></i>
                <span className="badge bg-light position-absolute rounded-circle font-size-12 text-dark w-15 h-15 p-0 lh-15">{cart_length}</span>
              </Link>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-custom-components" className='nav-link dropdown-toggle py-0 h5 m-0'>
                  <i className="fa fa-user text-secondary font-size-22"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu align="right" menuRole="menu" flip="true" className="rounded-0 border-0 py-0 shadow">
                  <Dropdown.Item as={Link} to='/profile' className="font-size-14 py-2">Profile</Dropdown.Item>
                  <Dropdown.Item to='/signin' className="font-size-14 py-2" onClick={() =>
                    signout(() => {
                      history.push('/signin');
                    })
                  }>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
            </>
          )}
          </Nav>
          
        </div>
        <div className="col-12">
        <Nav className="d-flex justify-content-end mt-2">
          {!jwt ? (
            <>
            {def_nav_items.map(item => (
              <NavLink key={item.id} to={item.link} exact={true} activeClassName='font-weight-bold' className="nav-link py-0 text-secondary">{item.name}</NavLink>
            ))}
            </>
          ) : (
            <>
            {nav_items.map(item => (
              <NavLink key={item.id} to={item.link} exact={true} activeClassName='font-weight-bold' className="nav-link py-0 text-secondary">{item.name}</NavLink>
            ))}
            </>
          )}
          
        </Nav>
        </div>
        </div>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );
};

export default withRouter(Menu);
