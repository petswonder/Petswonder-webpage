import React from 'react';
import logo from '../../images/logo1.png';
import { Link } from 'react-router-dom';
import {
  faPaperPlane,
  faLocationArrow,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import aplay from '../../images/aplay.png';
import gplay from '../../images/gplay.png';

const Footer = () => {
  return (
    <div className='footer-clean bg-secondary py-5'>
      <footer>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-sm-4 col-md-3 item col-lg-2'>
              <h6 className='text-primary font-weight-medium font-size-14'>Services</h6>
              <ul className="list-group">
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/shopping' className='text-white font-size-12 font-weight-light'>Shopping</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/petGuide' className='text-white font-size-12 font-weight-light'>Pet Guide</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/petMate' className='text-white font-size-12 font-weight-light'>Pet Mate</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/petCare' className='text-white font-size-12 font-weight-light'>Pet Services</Link>
                </li>
              </ul>
            </div>
            <div className='col-sm-4 col-md-3 item col-lg-2'>
            <h6 className='text-primary font-weight-medium font-size-14'>Quick Links</h6>
              <ul className='list-group'>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/' className='text-white font-size-12 font-weight-light'>Home</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/shopping' className='text-white font-size-12 font-weight-light'>Shopping</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/about' className='text-white font-size-12 font-weight-light'>About Us</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/termsandconditions' className='text-white font-size-12 font-weight-light'>Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
            <div className='col-sm-4 col-md-3 item col-lg-2'>
              <h6 className='text-primary font-weight-medium font-size-14'>Contact</h6>
              <ul className='list-group ml-n3'>
                <li className='list-group-item mb-1 border-0 bg-transparent p-0 text-white font-size-12 d-flex align-items-center'>
                  <i className='fas fa-map-marker-alt fa-lg text-primary mr-2 opacity-20'></i>
                  <span>Dilsukhnagar, Hyderabad, Telangana - 500035</span>
                </li>
                <li className='list-group-item mb-1 border-0 bg-transparent p-0 text-white font-size-12 d-flex align-items-center'>
                <i className='fab fa-whatsapp fa-lg text-primary mr-2 opacity-20'></i>
                  <span>+918886633291</span>
                </li>
                <li className='list-group-item mb-1 border-0 bg-transparent p-0 text-white font-size-12 d-flex align-items-center'>
                <i className='fas fa-at fa-lg text-primary mr-2 opacity-20'></i>
                  <span>support@petswonder.in</span>
                </li>
              </ul>
            </div>

            
            
            <div className='col-sm-4 col-md-3 item col-lg-2'>
              <h6 className='text-primary font-weight-medium font-size-14'>Also Available On:</h6>
              <img href='https://www.facebook.com/petswonder.in'
                  target='_blank'  src={aplay} className='w-100'/>
              <img href='https://play.google.com/store/apps/details?id=com.petswonder'
                  target='_blank' src={gplay} className='w-100'/>
            </div>
            <div className='col-sm-4 col-md-3 item col-lg-2 text-center'>
              <div className="">
                <a className="mr-2" href='https://www.facebook.com/petswonder.in' target='_blank'>
                  <i className='h5 fab fa-facebook-square'></i>
                </a>
                <a className="mr-2"
                  href='https://www.instagram.com/petswonder_official/'
                  target='_blank'>
                  
                  <i className='h5 fab fa-instagram-square'></i>
                </a>

                <a className="mr-2" href='https://twitter.com/PetsWonder1' target='_blank'>
                  
                  <i className='h5 fab fa-twitter'></i>
                </a>
                <a className="mr-2"
                  href='https://www.linkedin.com/company/petswonder/?viewAsMember=true'
                  target='_blank'>
                  
                  <i className='h5 fab fa-linkedin-square'></i>
                </a>
              </div>
              <img src={logo} className='w-25'/>
              <p className='copyright text-white font-size-14 text-center'>
                At Petswonder your pet is our pet.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
