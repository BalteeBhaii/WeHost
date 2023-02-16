import React from 'react';
// import './rentalincome.css'
const RentalIncome = () => {
    return ( 
    <div className='container'>
        <div className='position-relative text-center'>
            <img src='/images/furniture.svg' width={'100%'}/>
            <div className='carousel-caption text-white fw-bold fs-3' style={{bottom: 225}}>

                <p >Want to gain some rental income?</p>
                {/* <div className='backcolor'>
                    <p className=''>Post your property now</p>
                </div> */}
            </div>
        </div>
    </div>
     );
}
 
export default RentalIncome;