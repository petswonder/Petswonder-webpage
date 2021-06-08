import React from 'react';
import { Link } from 'react-router-dom';
import tick from '../../images/animation_500_kn8caytl.gif';

const Successful = () => {
  return (
    <div className="container">
    <div className='row py-5'>
      <div className='col-md-6 mx-auto' style={{ background: 'white' }}>
        <div className="text-center py-3 d-flex flex-column">
          <h3>Order placed successful!</h3>
          <img src={tick} alt='success' className="img-responsive w-50 mx-auto" />
          <Link to='/shopping'>
            <button className='btn btn-primary m-4'>Shop more</button>
          </Link>
        
        </div>
        </div>
    </div>
    </div>
  );
};

export default Successful;
