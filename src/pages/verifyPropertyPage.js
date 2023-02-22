import React from 'react';
import { useState } from 'react';
import Welcome from '../components/verifyPropertyComponent/welcome';
import FirstStep from '../components/verifyPropertyComponent/firstStep';
import PropertyHeader from '../components/verifyPropertyComponent/propertyHeader';
import '../globalcss/styles.css';
const VerifyPropertyPage = () => {
    const [page, setPage] = useState(0)
    return (
        <>
            <PropertyHeader/>
            <div className='container'>
                <div>
                    {(page === 0) && <Welcome/>}
                    {(page === 1) && <FirstStep/>}
                    <div className='position-relative'>
                        <div className="progress my-5" style={{background: '#0079c2bf'}}>
                            <div className="progress-bar" style={{width: '5%', background: '#81E2F1'}}></div>
                        </div>
                        {(page===0)&&(
                            <div className='text-end'>
                                <button className='btn fw-semibold property-footer-button' style={{width: 115}} onClick={()=>{setPage(page+1)}}>
                                    Get Started
                                </button>
                            </div>
                        )}
                        {(page >=1)&&(
                            <div className='d-flex justify-content-between'>
                                <button className='btn property-footer-button' onClick={()=>{setPage(page-1)}}><i class="bi bi-arrow-left me-1"></i>Back</button>
                                <button className='btn property-footer-button' onClick={()=>{setPage(page+1)}}>Next<i class="bi bi-arrow-right ms-1"></i></button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default VerifyPropertyPage;