import React from 'react';
import { useEffect } from 'react';


const EleventhStep = () => {
    return (
        <>
            <div className='container'>
                <h2 className='welcome-title'>Welcome Ali</h2>
                <p className='welcome-text'>Your place can be viewed by guests after this post have been published for 24 hours.</p>
                <div className='row'>
                    <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
                        <div className="card hotel-card-style border-0" >
                            <div className='image-div'>
                                <img className='imgSizeStyle' src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                            </div>
                            <div className='container'>
                                <div className="card-body p-1">
                                    <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                                        <p className='mb-1'>2-September</p>
                                        <p className='mb-1'>$800/Person</p>
                                    </div>
                                    <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                                        <p className='fw-semibold'><i class="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                                    </div>
                                    <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                                        <p className='fw-semibold'><img className='me-1 fw-semibold' src='/images/successfull.png' alt="" />Published Successfully</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='welcome-title mt-4 mb-5'>Additional Steps :</h2>
            </div>

            <div className='container-fluid p-0'>

                <div className='additonal-step-section overflow-hidden d-flex justify-content-center gap-2'>
                    <div className="card  additional-step-card " style={{ width: "18rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">Instant Book</h5>
                            <p class="card-text">This will boost up your post and
                                choose how will your guest book</p>
                        </div>
                    </div>
                    <div className="card additional-step-card " style={{ width: "18rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">Reservation Dates</h5>
                            <p class="card-text">Setup dates  on Calendar on bases of
                                availability of your house  </p>
                        </div>
                    </div>
                    <div className="card  additional-step-card">
                        <div class="card-body">
                            <h5 class="card-title">Policies</h5>
                            <p class="card-text">Setup your cancellation policies</p>
                        </div>
                    </div>
                    <div className="card additional-step-card " style={{ width: "18rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">Rules and Promotion </h5>
                            <p class="card-text">Setup your house rule and setup offers
                                to attract guests</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container'>
                <div>
                    <h2 className='welcome-title mt-4 mb-5'>Tips:</h2>
                </div>
                <div className='d-flex gap-3 flex-column flex-md-row  justify-content-start align-items-center'>
                    
                    <div class="card tip-card " >
                        <img class="card-img-top img-fluid" src="/images/pricing.jpg"  />
                        <h5 class="card-title text-center">How to get paid?</h5>   
                                
                           
                    </div>
                    <div class="card tip-card" >
                        <img class="card-img-top img-fluid" src="/images/setprice.jpg"  />
                        <h5 class="card-title text-center">How to setup pricing strategy</h5>   
                                
                           
                    </div>
                    <div class="card tip-card" >
                        <img class="card-img-top img-fluid" src="/images/housing.jpg"  />
                        <h5 class="card-title text-center">How to Prepare House?</h5>   
                                
                           
                    </div>
                </div>
            </div>

        </>
    );
}

export default EleventhStep;