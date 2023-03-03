import React from 'react';
const SecondStep = () => {
    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>What Kind of Property Do You Own ?</h3>
                <div className='verify-2nd-list-items row  mt-4'>
                    <div className='verify-2nd-list-items-1st-column col-md-6 col-sm-12 col-12 row'>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i className="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i className="verify-2nd-list-item-main-icon bi bi-building"></i> Apartment
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i className="verify-2nd-list-item-main-icon bi bi-buildings"></i> Hotel
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className="verify-2nd-list-item-main-icon"   src='/images/mansion.png' /> Guest House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className="verify-2nd-list-item-main-icon"  src='/images/tinyhouse.png' />  Tiny House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className="verify-2nd-list-item-main-icon"  src='/images/pool.png' /> Pool Home
                                </span>
                            </div>
                        </div>
                      
                        
                    </div>
                    <div className='col-12 col-md-5 col-lg-6'>
                        <img className='verify-2nd-image' src='/images/propertyhouse.png' alt="" />
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default SecondStep;