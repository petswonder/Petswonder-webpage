import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const Heading = ({ text }) => {
  return (
    <>
      <div className='colored-heading'>
        <div className='container'>
          <h2>{text}</h2>
        </div>
      </div>
      <div className='colored-crumbs'>
        <p className='container'>
          <Breadcrumbs />
        </p>
      </div>
    </>
  );
};

export default Heading;
