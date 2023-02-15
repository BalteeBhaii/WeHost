import React from 'react';
import './thingsToExplore.css';
const ThingsToExplore = () => {
    return ( 
        <>
            <div className='container my-5'>
                <div className='backgroundShadow'>
                    <div className='position-relative'>
                        <img className='img-fluid' src='/images/thingsToExplore.svg' alt='things to explore'/>
                        <div className='carousel-caption position-absolute things-to-explore-text'>
                            <h2 className=''>Things to Explore</h2>
                            <h5>We have got everything you want</h5>
                            <button className='btn btn-primary' style={{'--bs-btn-hover-bg':'#0579C1A5', '--bs-btn-bg': '#0579C1'}}>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ThingsToExplore;