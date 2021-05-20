import React from 'react';
import photo from '../../../images/img7.jpg';

const service_items = [
  {"id": 1, "name": "Online Vet Doctor", "desc": "24/7 online vet consultation.", "icon": "user-md"},
  {"id": 2, "name": "Pet Grooming", "desc": "Servicing your pet with style.", "icon": "scissors"},
  {"id": 3, "name": "Pet Snap", "desc": "Get your pet clicked.", "icon": "camera"},
  {"id": 4, "name": "Pet Mate", "desc": "Find perfect partner for your pet.", "icon": "dog"}
]
const Customer = () => {
  
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

        <div class='container'>
          <div class='row '>
          {service_items.map(service => (
            <div class='col'>
              <div class='d-flex justify-content-between flex-column px-4 py-3 text-center border rounded border-primary'>
                <div class='icon text-center font-size-40'>
                  <i class={`fas fa-${service.icon} fa-lg `} style={{ color: '#ffb116' }}></i>
                </div>
                <div class='media-body'>
                  <h5 class='heading font-weight-bold my-1'>{service.name}</h5>
                  <p class='mb-0 font-size-12'>{service.desc}</p>
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
