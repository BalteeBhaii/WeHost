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
            <div>
                <h2>About</h2>
                <p className='mb-1'>
                Set in a bustling area near shops and restaurants, 
                this  laid-back hostel is 2 km from both Makaha Beach 
                and  the Museo de Arte Contemporáneo, and 4 km from  Ayacucho subway station.
                </p>
                <p><ins>Show more</ins></p>
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