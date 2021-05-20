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
  Container
} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth/index';
import LogoName from '../../images/LogoName.png';
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartArrowDown,
  faUserCircle,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#000000' };
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
    <Navbar expand='lg' variant='light' fixed='top' className='bg-n py-0'>
      <Container>
          <Navbar.Brand>
            {'  '}
            <img
              src={LogoName}
              style={{ width: '230px' }}
            ></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar
            id='basic-navbar-nav'
            className='flex-column align-items-end w-100 py-0'
          >
            <Nav className=''>
              {!jwt && (
                <Button variant="light" className="round">Sign In</Button>
                // <Nav.Link
                //   className='nav-links'
                //   href='/signin'
                //   style={isActive(history, '/signin')}
                // >
                //   Signin
                // </Nav.Link>
              )}

              {!jwt && (
                <Button variant="light" className="round">Sign Up</Button>
                // <Nav.Link
                //   className='nav-links'
                //   href='/signup'
                //   style={isActive(history, '/signup')}
                // >
                //   Signup
                // </Nav.Link>
              )}

              {/* <Form inline>
                {
                  <Nav.Link
                    className='nav-links ml-2 mr-3 mb-3'
                    href='/search'
                    style={isActive(history, '/search')}
                  >
                    <Button className='mb-5 py-1 btn btn btn-dark'>
                      <FontAwesomeIcon
                        icon={faSearch}
                        style={{ fontSize: '18px' }}
                      />{' '}
                      Search
                    </Button>
                  </Nav.Link>
                }
              </Form> */}

              
            </Nav>
            <Nav className=''>
              

              {/* <Form inline>
                {
                  <Nav.Link
                    className='nav-links ml-2 mr-3 mb-3'
                    href='/search'
                    style={isActive(history, '/search')}
                  >
                    <Button className='mb-5 py-1 btn btn btn-dark'>
                      <FontAwesomeIcon
                        icon={faSearch}
                        style={{ fontSize: '18px' }}
                      />{' '}
                      Search
                    </Button>
                  </Nav.Link>
                }
              </Form> */}

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
                  href='/petSnap'
                  style={isActive(history, '/petSnap')}
                >
                  Pet Snap
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
                  href='/petCare'
                  style={isActive(history, '/petCare')}
                >
                  Pet Care
                </Nav.Link>
              )}

              {
                <Nav.Link
                  className='nav-links'
                  href='/shopping'
                  style={isActive(history, '/shopping')}
                >
                  Shopping
                </Nav.Link>
              }

              <Nav.Link
                className='nav-links'
                href='/'
                style={isActive(history, '/')}
              >
                Home
              </Nav.Link>
            </Nav>
            <Form inline>
              {jwt && (
                <Nav.Link
                  className='nav-links mb-3'
                  href='/cart'
                  style={isActive(history, '/cart')}
                >
                  <FontAwesomeIcon
                    icon={faCartArrowDown}
                    style={{ fontSize: '22px' }}
                  />{' '}
                </Nav.Link>
              )}

              {jwt && (
                <Nav.Link
                  className='nav-links mb-3'
                  href='/profile'
                  style={isActive(history, '/profile')}
                >
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    style={{ fontSize: '22px' }}
                  />{' '}
                </Nav.Link>
              )}

              {jwt && (
                <Nav.Link
                  className='nav-links mb-3'
                  onClick={() =>
                    signout(() => {
                      history.push('/signin');
                    })
                  }
                  href='/signin'
                  style={isActive(history, '/signin')}
                  style={{
                    color: '#fff',
                    fontWeight: '600px',
                    fontSize: '22px',
                    fontFamily: 'sans-serif',
                  }}
                >
                  SignOut
                </Nav.Link>
              )}
            </Form>
          </Navbar>
          </Container>
    </Navbar>
    
  );
};

export default withRouter(Menu);
