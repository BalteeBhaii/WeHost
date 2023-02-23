import React from 'react';
import { useState } from 'react';
import Welcome from '../components/verifyPropertyComponent/welcome';
import FirstStep from '../components/verifyPropertyComponent/firstStep';
import PropertyHeader from '../components/verifyPropertyComponent/propertyHeader';
import SecondStep from '../components/verifyPropertyComponent/secondStep';
import ThirdStep from '../components/verifyPropertyComponent/thirdstep';
import ForthStep from '../components/verifyPropertyComponent/forthstep';
import FifthStep from '../components/verifyPropertyComponent/fifthStep';
import SixthStep from '../components/verifyPropertyComponent/sixthStep';
import StepTwo from '../components/verifyPropertyComponent/stepTwo';
import SeventhStep from '../components/verifyPropertyComponent/seventhStep';
import EightStep from '../components/verifyPropertyComponent/eightStep';
import NinethStep from '../components/verifyPropertyComponent/ninethStep';
import '../globalcss/styles.css';
const VerifyPropertyPage = () => {
    const [page, setPage] = useState(10)
    return (
        <>
            <PropertyHeader/>
            <div className=''>
                <div>
                    {(page === 0) && <Welcome/>}
                    {(page === 1) && <FirstStep/>}
                    {(page === 2) && <SecondStep/>}
                    {(page === 3) && <ThirdStep/>}
                    {(page === 4) && <ForthStep/>}
                    {(page === 5) && <FifthStep/>}
                    {(page === 6) && <SixthStep/>}
                    {(page === 7) && <StepTwo/>}
                    {(page === 8) && <SeventhStep/>}
                    {(page === 9) && <EightStep/>}
                    {(page === 10) && <NinethStep />}
                    <div className='position-relative container'>
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