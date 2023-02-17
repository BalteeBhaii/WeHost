import React from 'react';
const ThingsToExplore = () => {
    return ( 
        <>
            <div className='container'>
                <div className='container thingstoexplore-section section my-5'>
                    <div className='thingstoexplore-main'>
                        <h2 className='thingstoexplore-title section-titles mb-0'>Things to Explore</h2>
                        <span className='thingstoexplore-description mb-2'>We have got everything you want</span>
                        <button className='thingstoexplore-button'>Explore Now</button>
                    </div>
                    {/* <div className='backgroundShadow'>
                        <div className='position-relative'>
                            <img className='img-fluid' src='/images/thingsToExplore.svg' alt='things to explore'/>
                            <div className='carousel-caption position-absolute things-to-explore-text'>
                                <h2 className=''>Things to Explore</h2>
                                <h5>We have got everything you want</h5>
                                <button className='btn btn-primary' style={{'--bs-btn-hover-bg':'#0579C1A5', '--bs-btn-bg': '#0579C1'}}>Explore Now</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
     );
}
 
export default ThingsToExplore;