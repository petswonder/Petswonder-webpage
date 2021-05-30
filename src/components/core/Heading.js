import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const Heading = ({ text }) => {
  return (
    <div className="bg-light">
      <div className='container py-2'>
        <h2 className="m-0">{text}</h2>
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default Heading;
