import React from 'react'
import photo from '../../images/hero_image_01.png'

const Extra = () => {
    return (
        
            <section className="mt-5" data-setbg={photo}>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <div className="learning_img w-100 py-0 px-5">
                            <img src={photo} alt="image" className='w-100' />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <div className="about_us_text">
                            <h2 className='text-center'>WELCOME TO PETSWONDER</h2>
                            <p id="mentorship-desc">
                            Pets Wonder provides a wide range of pet products, accessories and services including grooming and mating for pets. Pets Wonder is also very active in the community of pet owners providing education and awareness in becoming a socially responsible pet owner. Expert veterinarian care is available 24*7 through online consultation with a promise to provide intuitive, reassuring and informative service.
                            </p>
                           
                            <ul className="list-services">
								<li className="d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center"> <i className="fas fa-paw fa-lg" style={{color:"#ffb116"}}></i></div>
									<p>Shop Pet Products</p>
								</li>
								<li className="d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center"> <i className="fas fa-paw fa-lg" style={{color:"#ffb116"}}></i></div>
									<p>Pet Guide</p>
								</li>
								<li className="d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center"> <i className="fas fa-paw fa-lg" style={{color:"#ffb116"}}></i></div>
									<p>Pet Mate</p>
								</li>
								<li className="d-flex align-items-center">
									<div className="icon d-flex align-items-center justify-content-center"> <i className="fas fa-paw fa-lg" style={{color:"#ffb116"}}></i></div>
									<p>Pet Services</p>
								</li>
							</ul>
                                
                        </div>
                    </div>
                </div>
            </div>
		</section>
        
    )
}

export default Extra
