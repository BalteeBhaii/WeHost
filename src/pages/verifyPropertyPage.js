import React from 'react';
import { useState } from 'react';
import Welcome from '../components/verifyPropertyComponent/welcome';
import PropertyHeader from '../components/verifyPropertyComponent/propertyHeader';
import '../globalcss/styles.css';
const VerifyPropertyPage = () => {
    const [page, setPage] = useState(0)
    return (
        <>
        <PropertyHeader/>
        <div className='container'>
            {(page === 0)?<Welcome/>:''}
            <div className="progress my-5" style={{background: '#0079c2bf'}}>
                <div className="progress-bar" style={{width: '5%', background: '#81E2F1'}}></div>
            </div>
            <div className='text-end'>
                <button className='btn fw-semibold property-footer-text'>Get Started</button>
            </div>
            <div className='d-flex justify-content-between'>
                <button className='btn property-footer-text'><i class="bi bi-arrow-left"></i>Back</button>
                <button className='btn property-footer-text'>Next<i class="bi bi-arrow-right"></i></button>
            </div>
        </div>
        
        
        </>
     );
}
 
export default VerifyPropertyPage;