import React from 'react';
// import logo from '../../images/logo1.png';
// import cs from '../../images/cs.png';
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
        <h6 className="m-0">Coming Soon !!!</h6>
      </div>
    );
  };
  // const redirectToPage = () => {
  //   return (
  //     <div>
  //       <Redirect to={`/petSnap`} />
  //     </div>
  //   );
  // };

  return (
    <div className='col-12 col-md-6 mb-4 mx-auto'>
      <Card>
        <Card.Title
          className='p-2 card-title h5 text-center m-0'
        >
          {title}
        </Card.Title>
        <div className="h-200 text-center">
          <img src={serviceImageUrls} alt="" className="h-100"/>
        </div>
        {/* <Card.Img
          variant='top'
          src={serviceImageUrls}
        /> */}
        <Card.Footer className="text-center border-0 bg-transparent">
          {comingSoon ? (
              comingS()
            ) : (
              <Link to={`/${page}`}>
                  <Button variant='primary'>Book now</Button>
              </Link>
            )}
        </Card.Footer>
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
                <button type='button' className='btn btn-warning '>
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
