import React from 'react'
import photo from '../../../images/food.png'

const Getall = () => {
    return (
        
            <section class="" data-setbg={photo}>
            <div class="container">
                <div class="row align-items-center justify-content-between">
                     <div class="col-md-5 col-lg-6 col-xl-6">
                        <div class="learning_img w-100 py-0 px-5">
                            <img src={photo} alt="image"  class='w-100' />
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-6 col-xl-5">
                        <div class="about_us_text">
                            <h6 id="mentorship-heading"></h6>
                            <h2 class='text-center'>Get All that your Pet needs</h2>
                            <br/>
                            <p id="mentorship-desc">
                            With our wide range of products and services including pet food, grooming, acccesories, toys and many more...
                            </p>
                           
                    
                                
                        </div>
                    </div>
                    
                </div>
            </div>
		</section>
        
    )
}

export default Getall
