import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/comingsoon.png';
import logo from '../../images/logo.png';

const ComingSoon = () => {
  return (
    <div className='row ' style={{ height: '80vh' }}>
      <div className='col-md-6'>
        <img
          src={logo}
          style={{
            borderRadius: '50%',
            padding: '8px',
            height: '10rem',
            borderLeft: '3px solid red',
            borderTop: '2px solid red',
          }}
          alt=''
        />
        <h1 className='my-5 '>Coming Soon</h1>

        <ul
          className='d-flex justify-content-between pr-4'
          style={{ listStyleType: 'none' }}
        >
          <li className='aradhna_footerli'>
            <Link to='/'>Home</Link>
          </li>
          <li className='aradhna_footerli'>
            <Link to='/shopping'>Shopping</Link>
          </li>
          <li className='aradhna_footerli'>
            <Link to='/about'>About us</Link>
          </li>
        </ul>

        <div
          className='d-flex justify-content-around mt-5 '
          style={{ fontSize: '2rem' }}
        >
          <a href='https://www.facebook.com/petswonder.in' target='_blank'>
            {' '}
            <i class='fab fa-facebook'></i>{' '}
          </a>

          <a
            href='https://www.instagram.com/petswonder_official/'
            target='_blank'
          >
            {' '}
            <i class='fab fa-instagram'></i>{' '}
          </a>

          <a href='https://twitter.com/PetsWonder1' target='_blank'>
            {' '}
            <i class='fab fa-twitter'></i>{' '}
          </a>
        </div>
      </div>
      <div className='col-0 col-md-6 d-none d-lg-block pt-5'>
        <img src={image} alt='sad image' style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default ComingSoon;