import React from 'react';
import logo from '../../images/logo1.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <ul class="list-group">
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/shopping' class='text-white font-size-12 font-weight-light'>Shopping</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/petGuide' class='text-white font-size-12 font-weight-light'>Pet Guide</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/petMate' class='text-white font-size-12 font-weight-light'>Pet Mate</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/petCare' class='text-white font-size-12 font-weight-light'>Pet Services</Link>
                </li>
              </ul>
            </div>
            <div className='col-sm-4 col-md-3 item col-lg-2'>
            <h6 className='text-primary font-weight-medium font-size-14'>Quick Links</h6>
              <ul class='list-group'>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/' class='text-white font-size-12 font-weight-light'>Home</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/shopping' class='text-white font-size-12 font-weight-light'>Shopping</Link>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0'>
                  <Link to='/about' class='text-white font-size-12 font-weight-light'>About Us</Link>
                </li>
              </ul>
            </div>
            <div className='col-sm-4 col-md-3 item col-lg-2'>
              <h6 className='text-primary font-weight-medium font-size-14'>Contact</h6>
              <ul class='list-group'>
                <li className='list-group-item border-0 bg-transparent p-0 text-white font-size-12 d-flex align-items-center'>
                  <i class='fas fa-map-marker-alt fa-lg text-primary mr-2 opacity-20'></i>
                  <span>Dilsukhnagar, Hyderabad, Telangana - 500035</span>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0 text-white font-size-12 d-flex align-items-center'>
                <i class='fab fa-whatsapp fa-lg text-primary mr-2 opacity-20'></i>
                  <span>+918886633291</span>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0 text-white font-size-12 d-flex align-items-center'>
                <i class='fas fa-at fa-lg text-primary mr-2 opacity-20'></i>
                  <span>support@petswonder.in</span>
                </li>
                <li className='list-group-item border-0 bg-transparent p-0 text-white font-size-12 d-flex align-items-center'>
                <a href='https://www.facebook.com/petswonder.in' target='_blank'>
                <i class='fab fa-facebook-square'></i>
              </a>
              <a
                href='https://www.instagram.com/petswonder_official/'
                target='_blank'>
                
                <i class='fab fa-instagram-square'></i>
              </a>

              <a href='https://twitter.com/PetsWonder1' target='_blank'>
                
                <i class='fab fa-twitter'></i>
              </a>
              <a
                href='https://www.linkedin.com/company/petswonder/?viewAsMember=true'
                target='_blank'>
                
                <i class='fab fa-linkedin-square'></i>
              </a>
                </li>
              </ul>
            </div>

            
            
            <div className='col-sm-4 col-md-3 item col-lg-2'>
              <h6 className='text-primary font-weight-medium font-size-14'>Also Available On:</h6>
              <img href='https://www.facebook.com/petswonder.in'
                  target='_blank'  src={aplay} class='w-100'/>
              <img href='https://play.google.com/store/apps/details?id=com.petswonder'
                  target='_blank' src={gplay} class='w-100'/>
            </div>
            <div className='col-sm-4 col-md-3 item col-lg-2 text-center'>
              <img src={logo} class='w-25'/>
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
