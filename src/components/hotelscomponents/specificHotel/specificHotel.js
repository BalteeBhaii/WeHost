import React from 'react';
import './specificHotel.css'
const SpecificHotel = () => {
    return ( 
        <>
        <div className='container'>
            <div className='w-100 d-flex justify-content-between'>
                <div >
                    <h2 style={{fontSize: '3.3vw'}}>Hotel of Lima City</h2>
                    <div className='d-flex'>
                        <p className='me-3'>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-half text-warning"></i>
                        </p>
                        <p className='me-2'>
                            345 reviews
                        </p>
                        <p>
                            #2 of 6
                        </p>
                    </div>
                </div>
                <div className='d-flex' >
                    <p className='mb-1 me-3'><i className="bi bi-share me-1"></i>share</p>
                    <p><i className="bi bi-heart me-1"></i>Save</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-8'>
                    <div>
                        <div className='mainImagesize mb-1'>
                            <img className='img-fluid'  src='/images/hotelmainImage.svg'/>
                        </div>
                        <div className='d-flex multipleImages'>
                            <img className='img-fluid' src='/images/image1.svg'/>
                            <img className='img-fluid' src='/images/image2.svg'/>
                            <img className='img-fluid' src='/images/image3.svg'/>
                        </div>
                    </div>
                    <div>
                        <h2>About</h2>
                        <p className='mb-1'>
                        Set in a bustling area near shops and restaurants, 
                        this  laid-back hostel is 2 km from both Makaha Beach 
                        and  the Museo de Arte Contemporáneo, and 4 km from  Ayacucho subway station.
                        </p>
                        <p><ins>Show more</ins></p>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">$157/Night</h5>
                                <h5 className="card-title">34 reviews</h5>
                            </div>
                            <div className='d-flex flex-wrap justify-content-between mb-1'>
                                <div className="input-group inputgroup mb-1 destination-input border rounded shadow">
                                    <span className="input-group-text p-1 border-0" ><i class="bi bi-calendar-event"></i></span>
                                    <input className='form-control p-1 border-0 shadow-none' type="text" placeholder='Check In' />
                                </div>
                                <div className="input-group inputgroup destination-input border rounded shadow">
                                    <span className="input-group-text p-1 border-0" ><i class="bi bi-calendar-event"></i></span>
                                    <input className='form-control p-1 border-0 shadow-none' type="text" placeholder='Check Out' />
                                </div>
                            </div>
                            <div className="input-group border rounded shadow" >
                                <span className="input-group-text p-1 border-0" style={{backgroundColor: 'white'}}><i className="bi bi-search"></i></span>
                                <input className='form-control p-1 border-0 shadow-none' type="text" placeholder='Guest' />
                            </div>
                            <div className='my-3'>
                                <button className='btn btn-primary btn-sm w-100 p-0'>Reserve</button>
                            </div>
                            <div className='d-flex justify-content-between '>
                                <p className='m-0'>$160 x 7 night</p>
                                <p className='m-0'>$1,142</p>
                            </div>
                            <div className='d-flex justify-content-between '>
                                <p className='m-0'>Weekly Discount</p>
                                <p className='m-0'>-$80</p>
                            </div>
                            <div className='d-flex justify-content-between '>
                                <p className='m-0'>Cleaning Fee</p>
                                <p className='m-0'>$49</p>
                            </div>
                            <div className='d-flex justify-content-between '>
                                <p className='m-0'>Service Fee</p>
                                <p className='m-0'>$20</p>
                            </div>
                            <hr></hr>
                            <div className='d-flex justify-content-between '>
                                <p className='m-0'>Total Fee</p>
                                <p className='m-0'>$1,278</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <h2>Want To See What This Hotel Offers?</h2>
                <div className='d-flex jsu w-50 justify-content-between'>
                    <p><i class="bi bi-wifi me-1"></i>Wifi</p>
                    <p><i class="bi bi-snow me-1"></i>Air-Conditioner</p>
                </div>
                <div className='d-flex jsu w-50 justify-content-between'>
                    <p><i class="bi bi-p-circle me-1"></i>Parking</p>
                    <p><i class="bi bi-water me-1"></i>Pool</p>
                </div>
                <div className='d-flex jsu w-50 justify-content-between'>
                    <p><i class="bi bi-tv me-1"></i>Lcd</p>
                    <p><i class="bi bi-playstation me-1"></i>gaming</p>
                </div>
            </div>
            <div>
                <h2>Where you'll be</h2>
                <p>Calle Alcanfores 465, Mira 15074, Peru</p>
                <div className='googlemapImage'>
                    <img src='/images/googlemap.svg' className='img-fluid'/>
                </div>
            </div>
            <div>
                <h2>Reviews</h2>
                <p>1 review</p>
                <div className='d-flex '>
                    <div className='rounded-circle me-3'>
                        <img src='/images/profile.svg' className='img-fluid'/>
                    </div>
                    <div>
                        <p className='m-0'>Ramos</p>
                        <p>02 May, 2022</p>
                    </div>
                </div>
                <div className='paragraphWidth'>
                    <p>
                        While I have camped on the property several times, this
                        was my first stay in the Grist Mill Cabin. My son and 
                        I both love the property and the space. When waking
                        up from our first night
                    </p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default SpecificHotel;