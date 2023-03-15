import React, { useEffect } from 'react';
const PropertyAddress = ({setId}) => {
    useEffect(()=>{
        setId(true);
    })
    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>What are you offering guests?</h3>
                <div className='col-md-5 col-sm-12 mt-3'>
                    <img className='verify-2nd-image' src='/images/googlemap.png' alt="" />
                </div>
            </div>
        </>
    );
}

export default PropertyAddress;