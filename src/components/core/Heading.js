import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const Heading = ({ text }) => {
  return (
    <>
      <div className='colored-heading'>
        <h2>{text}</h2>
      </div>
      <div className='colored-crumbs'>
        <p>
          <Breadcrumbs />
        </p>
      </div>
    </>
  );
};

export default Heading;
