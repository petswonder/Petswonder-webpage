import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../images/sad-dog.png';

const NotFound = () => {
  return (
    <div className='mx-5'>
      <div
        className='mx-auto '
        style={{
          borderLeft: '2px solid red',
          borderBottom: '2px solid red',
          width: '250px',
        }}
      >
        <h1>404</h1>
        <h4>Not Found</h4>
      </div>

      <img className='' src={image} alt='' />
      <div>
        <Link to='/'>
          <Button variant='outline-danger'>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
