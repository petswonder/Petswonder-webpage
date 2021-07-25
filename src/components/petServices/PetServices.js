import Heading from '../core/Heading';
import PetGroom from '../../images/PetGroom.jpg';
// import PetPhoto from '../../images/PetPhoto.png';
import vet from '../../images/vet.png';
import Book1 from './Book1';

const PetServices = () => {
  return (
    <>
      <Heading text='Pet Care' />
      <div className='container px-0 py-4'>
        <div className='row mx-auto'>
          <Book1
            d={{
              title: 'Online doctor',
              serviceImageUrls: vet,
              page: 'onlineDoc',
            }}
          />
          <Book1
            d={{
              title: 'Pet Grooming',
              serviceImageUrls: PetGroom,
              page: 'petSnap',
            }}
            comingSoon='true'
          />
        </div>
      </div>
    </>
  );
};

export default PetServices;
