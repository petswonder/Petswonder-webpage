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
    <section className='py-2'>
      <div class='mx-5'>
        <div class='container'>
          <div class='row'>
            <div class='col-12'>
              <h1 style={{ textAlign: 'center' }}>Services</h1>
              <br />
            </div>
          </div>
        </div>

        <div class=''>
          <div class='row '>
            <div class='col-md-3'>
              {services(
                'stethoscope',
                'Online Vet Doctor',
                'We are available 24/7 online vet consultation.'
              )}
            </div>
            <div class='col-md-3'>
              {services(
                'scissors',
                'Pet Grooming',
                'Servicing your pet with style.'
              )}
            </div>
            <div class='col-md-3'>
              {services('camera', 'Pet Snap', 'Get your pet clicked.')}
            </div>
            <div class='col-md-3'>
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
