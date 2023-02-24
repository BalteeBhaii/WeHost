import React from 'react';
const WeHostHeader = () => {
    return ( 
        <>
            <div className='container-fluid py-3 header-section-padding'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='propertyHeaderWidth'>
                        <a href='/'>
                            <img src='/images/logo.png' width={'100%'} height={'100%'}/>
                        </a>
                    </div>
                    <div className='headerText'>
                        <a>
                            <h5><i class="bi bi-question-square me-2"></i>Help?</h5>
                        </a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default WeHostHeader;