import React from 'react';
import img6 from '../../images/donate.jpg';

const Frames = ({ text, img, desc }) => {
  return (
    <div className='col-12 col-md-6 mb-4 mx-auto'>
      <div className='card' style={{ padding: '10px' }}>
        <h5>{text}</h5>
        <img className='card-img-top' src={img} alt='not available' />
        <div className='card-body'>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Frames;
