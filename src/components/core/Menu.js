import React, { useState } from 'react';
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
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
    <div className='header' style={{ position: 'relative' }}>
      <div className='col-12'>
        <Navbar expand='lg' variant='light' fixed='top' className='px-4 bg-n'>
          <Navbar.Brand style={{ fontSize: '24px' }}>
            {'  '}
            <img
              src={LogoName}
              style={{ height: '50px', width: '150px' }}
            ></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav className=' mb-auto mt-0 '>
              {!jwt && (
                <Nav.Link
                  className='nav-links mb-4'
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

              <Form inline>
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
              </Form>

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
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default withRouter(Menu);
