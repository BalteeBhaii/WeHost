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
                <button className='btn fw-semibold fs-5' style={{background: '#CBF2FC', width: 180}}>Get Started</button>
            </div>
        </div>
        
        
        </>
     );
}
 
export default VerifyPropertyPage;