import React from 'react';
import './explore.css';
const Explore = () => {
    return ( 
        <div>
            <div className='container-fluid my-5 '>
                <div className='w-100 d-flex justify-content-between'>
                    <div >
                        <h1 style={{fontSize: '3.7vw'}}>Where to explore, right now</h1>
                        <p style={{fontSize: '1vw'}}>Rent House with amenities, spaciousness, and comfort</p>
                    </div>
                    <div >
                        <button className='btn btn-primary btn-md p-2' style={{fontSize: '0.9rem'}}><i class="bi bi-funnel me-1"></i>Filters</button>
                    </div>
                </div>
                <div className='row h-100 g-4' >
                    <div className='col-6 ' >
                        <div className='w-100 position-relative'>
                            <img src='/images/top10hotels.svg' width={'100%'} height={'auto'}/>
                            <p className='carousel-caption text-white fw-semibold fs-5' style={{bottom: '-25px'}}>Fascinating View</p>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className='row h-50 '>
                            <div className='col'>
                                <div className='w-100 position-relative'>
                                    <img src='/images/beachHouse.svg' width={'100%'} height={'auto'}/>
                                    <p className='carousel-caption text-white fw-semibold fs-5'>Beach House</p>
                                </div>
                            </div>
                        </div>
                        <div className='row h-50 '>
                            <div className='col'>
                                <div className='w-100 position-relative' style={{}}>
                                    <img className='imagecolor' src='/images/swimingPool.svg' width={'100%'} height={'auto'} />
                                    <p className='carousel-caption text-white fw-semibold fs-5 ' style={{bottom: '-25px'}}>Swiming pool</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container text-center mt-4'>
                    <div >
                        <a className='btn btn-lg text-light' style={{backgroundColor: '#0579C1', width: '20%'}}>Explore more <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Explore;