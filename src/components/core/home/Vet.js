import React from 'react'
import photo from '../../../images/vet.png'

const Vet = () => {
    return (
        <div>
            <section class="recent-game-section spad set-bg" data-setbg={photo}>
            <div class="container">
                
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-5 col-lg-6 col-xl-6">
                        <div class="learning_img w-100 py-0 px-5">
                            <img src={photo} alt="image" class='w-100' />
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-6 col-xl-5">
                        <div class="about_us_text">
                            <h6 id="mentorship-heading"></h6>
                            <h2 class='text-center'>Online Veterinary Consultion</h2>
                            <br/>
                            <p id="mentorship-desc">
                            Book a appointment or consulting a vet over call, get the best health care services for your pet.
                            </p>
                           
                    
                                
                        </div>
                    </div>
                   
                </div>
            </div>
		</section>
        </div>
    )
}

export default Vet
