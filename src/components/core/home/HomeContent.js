import React from 'react';

const service_items = [
  {"id": 1, "name": "section1", "bgclass": "bg-light", "title": "Welcome to Pets Wonder","desc": "Pets Wonder provides a wide range of pet products, accessories and services including grooming and mating for pets. Pets Wonder is also very active in the community of pet owners providing education and awareness in becoming a socially responsible pet owner. Expert veterinarian care is available 24*7 through online consultation with a promise to provide intuitive, reassuring and informative service.", "img": require('../../../images/hero_image_01.png').default},
  {"id": 2, "name": "section2", "bgclass": "bg-transparent", "title": "Get All that your Pet needs","desc": "With our wide range of products and services including pet food, grooming, acccesories, toys and many more...", "img": require('../../../images/food.png').default},
  {"id": 3, "name": "section3", "bgclass": "bg-light", "title": "Online Veterinary Consultion","desc": "Book a appointment or consulting a vet over call, get the best health care services for your pet.", "img": require('../../../images/vet.png').default},
  {"id": 4, "name": "section4", "bgclass": "bg-transparent", "title": "Find the best partner for your pet","desc": "We are here with new features called PetMate which helps you find the best suited companion for your beloved pet.", "img": require('../../../images/mate.png').default}
]
const Customer = () => {
  
  return (
    <section className='py-2'>
      
        
          {service_items.map(service => (
            <div className={service.bgclass} key={service.id.toString()}>
                <div className='container'>
                  <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="learning_img w-100 py-2 px-5">
                        <img src={service.img} alt={service.name} className='w-100' />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="">
                        <h2 className='text-left'>{service.title}</h2>
                        <p className="text-left">{service.desc}</p>
                    </div>
                </div>
              
            </div>
            </div>
            </div>
          ))}
        
    </section>
  );
};

export default Customer;
