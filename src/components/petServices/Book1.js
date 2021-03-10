import React, { useEffect, useState } from 'react';
import logo from '../../images/logo1.png';
import cs from '../../images/cs.png';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Book1 = ({
  d: { serviceImageUrls, title, page },
  comingSoon = false,
}) => {
  const comingS = () => {
    return (
      <div>
        <img src={cs} style={{ height: '8.1rem', width: '290px' }} alt='' />
      </div>
    );
  };
  const redirectToPage = () => {
    return (
      <div>
        <Redirect to={`/petSnap`} />
      </div>
    );
  };

  return (
    <div className='col-12 col-md-6 mb-4 mx-auto'>
      <div className='card' style={{ padding: '10px' }}>
        <h5>{title}</h5>
        <img
          className='card-img-top'
          src={serviceImageUrls}
          alt='not available'
        />
        <div className='card-body'>
          {comingSoon ? (
            comingS()
          ) : (
            <div
              style={{
                height: '8.1rem',
                width: '290px',
                margin: 'auto',
                padding: '70px 0',
              }}
            >
              <Link to={`/${page}`}>
                <button
                  type='button'
                  class='btn btn-warning'
                  style={{ padding: '20px', width: '50%' }}
                >
                  Click me
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book1;
