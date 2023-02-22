import React from 'react';
import WeHostHeader from '../components/weHost/weHostHeader';
import WeHost from '../components/weHost/weHost';
const WeHostPage = () => {
    return ( 
        <>
            <WeHostHeader/>
            <div className='container'>
                <WeHost/>
            </div>
        </>
     );
}
 
export default WeHostPage;