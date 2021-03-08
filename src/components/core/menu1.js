import React, { useState } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth/index';
import logo from '../../images/logo1.png';

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#ff9900' };
  } else return { color: '#ffffff' };
};

const Menu = ({ history }) => {
  const jwt = isAuthenticated();

  // const [search, setSearch] = useState('');

  // const handleChange = e =>{
  //     setSearch(e.target.value);
  //     console.log(search);
  // }

  // const handleClick = () =>{
  //     setSearch('');
  // }

  return (
    <div className='header' style={{ position: 'relative' }}>
      <div className='col-12'>
        <Navbar bg='dark' expand='lg' variant='dark' fixed='top'>
          <Navbar.Brand>{'  '}PetsWonder</Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto flex-column flex-wrap'>
              {/* {jwt && <Nav.Link href ='/search' className="nav-links">
                            Search for product
                        </Nav.Link>
                    } */}

              <div className='flex-column mb-auto mt-0 flex-wrap'>
                <ul class='navbar-nav mb-auto mt-0'>
                  {jwt && (
                    <Nav.Link
                      className='nav-links'
                      href='/search'
                      style={isActive(history, '/search')}
                    >
                      <i class='fas fa-search'></i> Search
                    </Nav.Link>
                  )}

                  <Nav.Link
                    className='nav-links'
                    href='/search'
                    style={isActive(history, '/search')}
                  >
                    <i class='fab fa-google-play'></i>
                  </Nav.Link>
                  <Nav.Link
                    className='nav-links'
                    href='/search'
                    style={isActive(history, '/search')}
                  >
                    <i class='fab fa-facebook-f'></i>
                  </Nav.Link>

                  {jwt && (
                    <Nav.Link
                      className='nav-links'
                      href='/cart'
                      style={isActive(history, '/cart')}
                    >
                      <i class='fas fa-shopping-cart'></i> Cart
                    </Nav.Link>
                  )}
                  {jwt && (
                    <Nav.Link
                      className='nav-links'
                      href='/profile'
                      style={isActive(history, '/profile')}
                    >
                      <i class='fas fa-user-circle'></i> Account
                    </Nav.Link>
                  )}
                </ul>
              </div>
              <ul class='navbar-nav mb-auto mt-0 mr-auto'>
                {jwt && (
                  <Nav.Link
                    className='nav-links'
                    onClick={() =>
                      signout(() => {
                        history.push('/signin');
                      })
                    }
                    href='/signin'
                    style={isActive(history, '/signin')}
                  >
                    SignOut
                  </Nav.Link>
                )}

                {!jwt && (
                  <Nav.Link
                    className='nav-links'
                    href='/signin'
                    style={isActive(history, '/signin')}
                  >
                    Signin
                  </Nav.Link>
                )}

                {!jwt && (
                  <Nav.Link
                    className='nav-links'
                    href='/signup'
                    style={isActive(history, '/signup')}
                  >
                    Signup
                  </Nav.Link>
                )}

                {jwt && (
                  <Nav.Link
                    className='nav-links'
                    href='/petCare'
                    style={isActive(history, '/petCare')}
                  >
                    Pet Services
                  </Nav.Link>
                )}

                {jwt && (
                  <Nav.Link
                    className='nav-links'
                    href='/petMate'
                    style={isActive(history, '/petMate')}
                  >
                    Pet Mate
                  </Nav.Link>
                )}

                {jwt && (
                  <Nav.Link
                    className='nav-links'
                    href='/petGuide'
                    style={isActive(history, '/petGuide')}
                  >
                    Pet Guide
                  </Nav.Link>
                )}

                {jwt && (
                  <Nav.Link
                    className='nav-links'
                    href='/shopping'
                    style={isActive(history, '/shopping')}
                  >
                    Shopping
                  </Nav.Link>
                )}
                <Nav.Link
                  className='nav-links'
                  href='/'
                  style={isActive(history, '/')}
                >
                  Home
                </Nav.Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default withRouter(Menu);
