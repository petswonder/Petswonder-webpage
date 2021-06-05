import React, { useState, useEffect } from 'react';
import Heading from '../core/Heading';
import Frames from './Frames';
import { getAllGuides } from './petApi';

const PetGuide = () => {
  const [data, setData] = useState({});

  const getGuides = () => {
    getAllGuides()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getGuides();
  }, []);

  return (
    <div className=''>
      <Heading text='Pet Guide' />
      <div className='container my-4'>
        <div className='row'>
          {data.length > 0 &&
            data.map((d, i) => {
              return (
                <Frames
                  key={i}
                  text={d.title}
                  img={d.image}
                  desc={d.description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PetGuide;
