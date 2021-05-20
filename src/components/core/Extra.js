import React from 'react'
import photo from '../../images/hero_image_01.png'

const Extra = () => {
    return (
        
            <section class="mt-5" data-setbg={photo}>
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6 col-lg-6 col-xl-6">
                        <div class="learning_img w-100 py-0 px-5">
                            <img src={photo} alt="image" class='w-100' />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                        <div class="about_us_text">
                            <h2 class='text-center'>WELCOME TO PETSWONDER</h2>
                            <p id="mentorship-desc">
                            Pets Wonder provides a wide range of pet products, accessories and services including grooming and mating for pets. Pets Wonder is also very active in the community of pet owners providing education and awareness in becoming a socially responsible pet owner. Expert veterinarian care is available 24*7 through online consultation with a promise to provide intuitive, reassuring and informative service.
                            </p>
                           
                            <ul class="list-services">
								<li class="d-flex align-items-center">
									<div class="icon d-flex align-items-center justify-content-center"> <i class="fas fa-paw fa-lg" style={{color:"#ffb116"}}></i></div>
									<p>Shop Pet Products</p>
								</li>
								<li class="d-flex align-items-center">
									<div class="icon d-flex align-items-center justify-content-center"> <i class="fas fa-paw fa-lg" style={{color:"#ffb116"}}></i></div>
									<p>Pet Guide</p>
								</li>
								<li class="d-flex align-items-center">
									<div class="icon d-flex align-items-center justify-content-center"> <i class="fas fa-paw fa-lg" style={{color:"#ffb116"}}></i></div>
									<p>Pet Mate</p>
								</li>
								<li class="d-flex align-items-center">
									<div class="icon d-flex align-items-center justify-content-center"> <i class="fas fa-paw fa-lg" style={{color:"#ffb116"}}></i></div>
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
