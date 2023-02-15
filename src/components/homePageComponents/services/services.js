import React from 'react';
import './services.css';
const Services = () => {
    return ( 
    <>
        <div className='container mb-5 mt-5'>
            <div className='text-center mb-5'>
                <h1>services</h1>
            </div>
            <div>
                <div className='row g-3'>
                    <div className='col-sm-6 col-md-6 col-lg-3'>
                        <div className='card mx-1'>
                        <div className='card-img-top'><i class="bi bi-ticket-perforated fs-1 p-3 " style={{color: '#32DF8F'}}></i></div>
                            <div class="card-body">
                                <h5 class="card-title">Rent House</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-3'>
                        <div className='card mx-1'>
                            <div className='card-img-top'><i class="bi bi-house fs-1 p-3 " style={{color: '#00B8E0'}}></i></div>
                                <div class="card-body">
                                    <h5 class="card-title">Hotel Booking</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                    <div className='col-sm-6 col-md-6 col-lg-3'>
                    <div className='card mx-1'>
                    <div className='card-img-top'><i class="bi bi-send fs-1 p-3 " style={{color: '#E48B78'}}></i></div>
                            <div class="card-body">
                                <h5 class="card-title">Tour Plan</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-3'>
                    <div className='card mx-1'>
                    <div className='card-img-top'><i class="bi bi-house-lock fs-1 p-3 " style={{color: '#32DF8F'}}></i></div>
                            <div class="card-body">
                                <h5 class="card-title">Privacy of your home</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> 
    );
}
 
export default Services;