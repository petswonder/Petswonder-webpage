import React, { useState, useEffect } from 'react';
import Heading from '../core/Heading';
import Book from './Book';
import { getAllDoctors } from './petApi';

const PetServices = () => {
  const [data, setData] = useState({});

  const getDoctors = () => {
    getAllDoctors()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <div className='container'>
      <br />
      <Heading text='Online Doctor' />
      <br />
      <div className='row'>
        {data.length > 0 &&
          data.map((d, i) => {
            return <Book key={i} d={d} />;
          })}
      </div>
    </div>
  );
};

export default PetServices;
