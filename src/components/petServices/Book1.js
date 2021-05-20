import React, { useEffect, useState } from 'react';
import logo from '../../images/logo1.png';
import cs from '../../images/cs.png';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Book1 = ({
  d: { serviceImageUrls, title, page },
  comingSoon = false,
}) => {
  const comingS = () => {
    return (
      <div>
        <h4>Coming Soon</h4>
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
    <div className='col-12 col-md-5 mb-4 mx-auto'>
      <Card>
        <Card.Title
          className='p-2 mx-auto'
          style={{ borderBottom: '2px solid darkblue', width: '50%' }}
        >
          {title}
        </Card.Title>
        <Card.Img
          variant='top'
          src={serviceImageUrls}
          style={{ height: '280px' }}
        />
        <Card.Body>
          <Card.Text>
            {comingSoon ? (
              comingS()
            ) : (
              <div style={{ minHeight: '' }}>
                <Link to={`/${page}`}>
                  <Button variant='warning'>Book now</Button>
                </Link>
              </div>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <div className='card' style={{ padding: '10px' }}>
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
            <div style={{ minHeight: '' }}>
              <Link to={`/${page}`}>
                <button type='button' class='btn btn-warning '>
                  Book now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Book1;
