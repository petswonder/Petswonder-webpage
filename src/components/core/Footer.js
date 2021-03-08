import React from 'react'
import logo from '../../images/logo1.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faLocationArrow,faPhone } from '@fortawesome/free-solid-svg-icons';
import aplay from '../../images/aplay.png'
import gplay from '../../images/gplay.png'

const Footer = () => {
        return <div className="footer-clean">
                <footer>
                    <div className="container col-12 col-md-11">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Services</h3>
                                <ul>
                                    <li className="aradhna_footerli"><Link to="/shopping">Shopping</Link></li>
                                    <li className="aradhna_footerli"><Link to="/petGuide">Pet Guide</Link></li>
                                    <li className="aradhna_footerli"><Link to="/petMate">Pet Mate</Link></li>
                                    <li className="aradhna_footerli"><Link to="/petCare">Pet Services</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li className="aradhna_footerli"><Link to="/">Home</Link></li>
                                    <li className="aradhna_footerli"><Link to="/shopping">Shopping</Link></li>
                                    <li className="aradhna_footerli"><Link to="/about">About us</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Have a question</h3>
                                <ul>
                                    <li className="aradhna_footerli">
                                    <FontAwesomeIcon icon={faLocationArrow} className=" fa-lg" style={{color:"#ffb116"}}/>{' '}
                                    Dilsukhnagar, Hyderabad, Telangana - 500035
                                    </li>
                                    <li className="aradhna_footerli">
                                    <i class="fab fa-lg fa-whatsapp" aria-hidden="true" style={{color:"#ffb116"}}></i>{' '}
                                        +918886633291
                                    </li>
                                    <li className="aradhna_footerli"><Link to=""></Link></li>
                                    <li className="aradhna_footerli">
                                    <FontAwesomeIcon icon={faPaperPlane} className="fa-lg" style={{color:"#ffb116"}}/>{' '}
                                        support@petswonder.in
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-4 col-md-4  col-lg-3 item social">
                            
                               <a href="https://www.facebook.com/petswonder.in" target="_blank" > <i class="fab fa-facebook-square"></i> </a>
                               <a href="https://www.instagram.com/petswonder_official/" target="_blank" > <i class="fab fa-instagram-square"></i> </a>
                               
                               <a href="https://twitter.com/PetsWonder1" target="_blank" > <i class="fab fa-twitter"></i> </a>
                               <a href="https://www.linkedin.com/company/petswonder/?viewAsMember=true" target="_blank" > <i class="fab fa-linkedin-square"></i> </a>

                                <p className="copyright"> <img src={logo} id="aradhna_footer_logo" /> </p>
                                <p className="copyright" style={{fontSize:"16px"}}>
                                At Petswonder your pet is our pet.                           
                                </p>
                            </div>

                            <div className="col-sm-4 col-md-4  col-lg-3 item">
                            <h3>Available also on</h3>
                                <div className="col-12 mb-7">
                                    <a href="https://www.facebook.com/petswonder.in" target="_blank" ><img style={{height:"50px", width:"150px", marginBottom:"10px"}} src={aplay}></img></a>
                                </div>
                                <div className="col-12 mb-7">
                                    <a href="https://play.google.com/store/apps/details?id=com.petswonder" target="_blank" ><img style={{height:"55px", width:"150px"}} src={gplay}></img></a>
                                </div>
                               
                               
                               
                            </div>
                            
                        </div>
                    </div>
                </footer>
            </div>;
    
}

export default Footer
