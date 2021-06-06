import React from 'react';
import maintenance from '../../images/maintenance.svg';

const Maintenance = () => {
  return (
    <div className='row  p-5'>
      <div className='col-md-6 '>
        <img
          className='p-2'
          src={maintenance}
          style={{
            width: '100%',
            height: '100%',
          }}
          alt=''
        />
      </div>
      <div className='col-md-6 mt-5 pt-4'>
        <h1>We will be back soon!</h1>
        <h3>The website is under maintenance</h3>
        <p>we will resolve this issue within 24/7 hours</p>
      </div>
    </div>
  );
};

export default Maintenance;
