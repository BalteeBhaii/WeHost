import React from 'react';
import { useEffect } from 'react';

const RentalIncome = () => {
    useEffect(() => {
        window.addEventListener("resize", (event) => {
            if(window.screen.width <= 749){
                document.getElementsByClassName("rental-post-button-inner")[0].classList.remove("py-2");
                document.getElementsByClassName("rental-post-button-inner")[0].classList.add("py-1");
            }
        });
    }, []);

    return ( 
    <div className='container mt-5 section'>
        {/* <figure className='position-relative'>
    <div className='container '>
        <figure className='position-relative'>
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
                    <h3 className='rental-post-button-inner mb-0 py-2'>Post your property now</h3>
                </button>
            </div>
        </div>
    </div>
     );
}
 
export default RentalIncome;