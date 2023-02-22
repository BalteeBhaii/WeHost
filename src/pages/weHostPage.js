import React from 'react';
import WeHostHeader from '../components/weHost/weHostHeader';
import WeHost from '../components/weHost/weHost';
import Footer from '../components/Navigation/footer/footer';
const WeHostPage = () => {
    return ( 
        <>
            <WeHostHeader/>
            <div className='container-fluid'>
                <WeHost/>
            </div>
            <Footer/>
        </>
     );
}
 
export default WeHostPage;