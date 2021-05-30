import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/comingsoon.png';
import logo from '../../images/logo.png';

const ComingSoon = () => {
  return (
    <div className='row ' style={{ height: '80vh' }}>
      <div className='col-md-6 text-center'>
        <img
          src={logo}
          alt='brand_logo'
          width="200"
          className="rounded-circle border-left border-bg p-2 border border-5"
        />
        <h1 className='my-5 '>Coming Soon !!!</h1>

        <ul
          className='d-flex justify-content-center pr-4 list-group list-group-horizontal'
        >
          <li className='list-group-item py-0 border-0 text-secondary'>
            <Link to='/'>Home</Link>
          </li>
          <li className='list-group-item py-0 border-0 text-secondary'>
            <Link to='/shopping'>Shopping</Link>
          </li>
          <li className='list-group-item py-0 border-0 text-secondary'>
            <Link to='/about'>About us</Link>
          </li>
        </ul>

        <div
          className='d-flex justify-content-center mt-3 '
        >
          <a href='https://www.facebook.com/petswonder.in' target='_blank' className="px-3 py-0">
            {' '}
            <i className='fab font-size-30 fa-facebook'></i>{' '}
          </a>

          <a
            href='https://www.instagram.com/petswonder_official/'
            target='_blank' className="px-3 py-0"
          >
            {' '}
            <i className='fab font-size-30 fa-instagram'></i>{' '}
          </a>

          <a href='https://twitter.com/PetsWonder1' target='_blank' className="px-3 py-0">
            {' '}
            <i className='fab font-size-30 fa-twitter'></i>{' '}
          </a>
        </div>
      </div>
      <div className='col-0 col-md-6 d-none d-lg-block pt-5'>
        <img src={image} alt='sad_image' className="w-100"/>
      </div>
    </div>
  );
};

export default ComingSoon;
