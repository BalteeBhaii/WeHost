import React, { useEffect } from 'react';
import WeHostHeader from '../components/weHost/weHostHeader';
import WeHost from '../components/weHost/weHost';
import Footer from '../components/Navigation/footer/footer';
const WeHostPage = () => {
    useEffect(()=>{
        
    }, [])
    return ( 
        <>
            <WeHostHeader/>
            <div className=''>
                <WeHost/>
            </div>
            <Footer/>
        </>
     );
}
 
export default WeHostPage;