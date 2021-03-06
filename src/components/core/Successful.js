import React from 'react';
import { Link } from 'react-router-dom';
import tick from '../../images/animation_500_kn8caytl.gif';

const Successful = () => {
  return (
    <div className='row'>
      <div className='col-md-6 mx-auto' style={{ background: 'white' }}>
        <div>
          <h3>Order placed successful!</h3>
          <img src={tick} alt='' />
        </div>
        <Link to='/shopping'>
          <button
            className='btn btn-warning w-50 m-4'
            style={{ height: '55px' }}
          >
            Shop more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Successful;
