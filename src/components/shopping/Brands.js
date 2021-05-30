import React from 'react';
import { Link } from 'react-router-dom';
import Jerhigh from '../../images/brands/jerhigh.jpg';
import Pedigree from '../../images/brands/pedigree.png';
import Whiskas from '../../images/brands/whiskas.png';
import Purina from '../../images/brands/purina.png';
import Acana from '../../images/brands/acana.png';
import Drools from '../../images/brands/drools.png';

export const brand = (name, photo) => {
  return (
    <div className='col-6 col-md-2 ttmcat-slider mb-3'>
      <div className='content'>
        <div className=''>
          <Link to={`/brand/${name}`}>
            <img
              src={photo}
              alt='Cats'
              title='Cats'
              className='same-sizes'
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Brands = () => {
  return (
    <div className='shopbypets'>
      <div className='colored-heading'>
        <div className='row'>
          <div className='col-2'>
            <h2>
              <i className='fas fa-paw'></i>
            </h2>
          </div>
          <div className='col-8'>
            <h2>Shop By Brands</h2>
          </div>
          <div className='col-2'>
            <h2>
              <i className='fas fa-paw'></i>
            </h2>
          </div>
        </div>
      </div>
      <br />
      <div className='row'>
        {brand('Pedigree', Pedigree)}
        {brand('jerhigh', Jerhigh)}
        {brand('Whiskas', Whiskas)}
        {brand('Purina', Purina)}
        {brand('drools', Drools)}
        {brand('Acana', Acana)}
      </div>
    </div>
  );
};

export default Brands;
