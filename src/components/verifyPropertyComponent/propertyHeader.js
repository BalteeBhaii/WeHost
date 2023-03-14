import React from 'react';
const PropertyHeader = () => {
    return ( 
        <>
            <div className='container-fluid py-3 header-section-padding' style={{backgroundColor: '#CBF2FC'}}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='propertyHeaderWidth'>
                        <a href='/'>
                            <img src='/images/logo.png' width={'100%'} height={'100%'}/>
                        </a>
                    </div>
                    <div className='headerText'>
                        <a href='/' className='text-black'>Exit</a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default PropertyHeader;