import React from 'react';
const PropertyHeader = () => {
    return ( 
        <>
            <div className='container-fluid py-3 header-section-padding' style={{backgroundColor: '#CBF2FC'}}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='propertyHeaderWidth'>
                        <img src='/images/logo.png' width={'100%'} height={'100%'}/>
                    </div>
                    <div style={{fontFamily: 'Laila'}}>
                        <h5>Save & exit</h5>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default PropertyHeader;