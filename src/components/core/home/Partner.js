import React from 'react'
import photo from '../../../images/mate.png'

const Partner = () => {
    return (
        <div>
            <section class="recent-game-section spad set-bg" data-setbg={photo}>
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-5 col-lg-6 col-xl-6">
                        <div class="learning_img">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-6 col-xl-5">
                        <div class="about_us_text">
                            <h6 id="mentorship-heading"></h6>
                            <h2>Find the best partner for your pet</h2>
                            <br/>
                            <p id="mentorship-desc">
                            We are here with new features called PetMate which helps you find the best suited companion for your beloved pet.
                            </p>
                           
                    
                                
                        </div>
                    </div>

                </div>
            </div>
		</section>
        </div>
    )
}

export default Partner
