import React from 'react';

const service_items = [
  {"id": 1, "name": "Online Vet Doctor", "desc": "24/7 online vet consultation.", "img": require('../../../images/services/vet.svg').default},
  {"id": 2, "name": "Pet Grooming", "desc": "Servicing your pet with style.", "img": require('../../../images/services/groom.svg').default},
  {"id": 3, "name": "Pet Snap", "desc": "Get your pet clicked.", "img": require('../../../images/services/snap.svg').default},
  {"id": 4, "name": "Pet Mate", "desc": "Find perfect partner for your pet.", "img": require('../../../images/services/mate.svg').default}
]
const Customer = () => {
  
  return (
    <section className='py-2 mb-5'>
      <div className='mx-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='text-center mb-3'>Services</h1>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row '>
          {service_items.map(service => (
            <div className='col' key={service.id.toString()}>
              <div className='d-flex justify-content-between flex-column px-4 py-3 text-center shadow bg-light'>
                <div className='text-center h-150'>
                  <img src={service.img} alt={service.name + '_img'} className="p-3 h-100 w-100"/>
                </div>
                <div className='media-body'>
                  <h5 className='heading font-weight-bold my-1'>{service.name}</h5>
                  <p className='mb-0 font-size-12'>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
