import React from 'react';
import './rentalincome.css'
const RentalIncome = () => {
    return ( 
    <div className='container'>
        <figure className='position-relative'>
            <img src='/images/furniture.svg' alt='furniture' className='img-fluid'/>
            <figcaption className='figCaptionDisplay'>
                <p >Want to gain some rental income?</p>
                <div className='backcolor'>
                    <p>Post your property now</p>
                </div>
            </figcaption>
        </figure>
    </div>
     );
}
 
export default RentalIncome;