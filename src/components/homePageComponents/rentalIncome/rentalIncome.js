import React from 'react';
// import './rentalincome.css'
const RentalIncome = () => {
    return ( 
    <div className='container mt-5 section'>
        {/* <figure className='position-relative'>
            <img src='/images/furniture.svg' alt='furniture' className='img-fluid'/>
            <figcaption className='figCaptionDisplay'>
                <p >Want to gain some rental income?</p>
                <div className='backcolor'>
                    <p>Post your property now</p>
                </div>
            </figcaption>
        </figure> */}
        <div className='rental-main position-relative'>
            <h3 className='rental-title text-center section-titles text-white position-relative'>Want to gain some rental income ?</h3>
            <div className='d-flex justify-content-center mt-4'>
                <button className='rental-post-button position-relative px-4'>
                    <h3 className='rental-post-button-inner'>Post your property now</h3>
                </button>
            </div>
        </div>
    </div>
     );
}
 
export default RentalIncome;