import React from 'react';
import photo from '../../../images/img7.jpg';

const Customer = () => {
  const services = (fa, name, intro) => {
    return (
      <div class='d-block services d-flex justify-content-between'>
        <div class='icon d-flex align-items-center justify-content-center'>
          <i class={`fas fa-${fa} fa-lg`} style={{ color: '#ffb116' }}></i>
        </div>
        <div class='media-body'>
          <h3 class='heading'>{name}</h3>
          <p class='mb-0'>{intro}</p>
        </div>
      </div>
    );
  };

  return (
    <section className='py-5'>
      <div class='container'>
        <div class='container'>
          <div class='row'>
            <div class='col-12'>
              <h1 style={{ textAlign: 'center' }}>Services</h1>
              <br />
            </div>
          </div>
        </div>

        <div class='container'>
          <div class='row '>
            <div class='col-md-4'>
              {services(
                'stethoscope',
                'Online Vet Doctor',
                'We are available 24/7 with the promise to provide intuitive, reassuring and informative service.'
              )}
            </div>
            <div class='col-md-4'>
              {services(
                'scissors',
                'Pet Grooming',
                'Servicing your pet with style. "A groomed puppy is a happy puppy".'
              )}
            </div>
            <div class='col-md-4'>
              {services(
                'camera',
                'Pet Snap',
                'Get your pet clicked and keep their special moments preserved.'
              )}
            </div>
            <div class='col-md-4 mx-auto'>
              {services(
                'dog',
                'Pet Mate',
                'Find perfect partner for your pet.'
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
