import React from 'react';
import maintenance from '../../images/maintenance.svg';

const Maintenance = () => {
  return (
    <div className="container">
    <div className='row vh-100 align-items-center p-5'>
      <div className='col-md-6 '>
        <img
          className='p-2 w-100'
          src={maintenance}
          alt=''
        />
      </div>
      <div className='col-md-6 mt-5 pt-4'>
        <h1>We will be back soon!</h1>
        <h3>The website is under maintenance</h3>
        <p>We will resolve this issue soon.</p>
        <p>Please contact <span className="text-bg font-weight-bold">+918886633291</span> or mail us at <span className="text-bg font-weight-bold">support@petswonder.in</span> in case of any queries.</p>
      </div>
    </div>
    </div>
  );
};

export default Maintenance;
