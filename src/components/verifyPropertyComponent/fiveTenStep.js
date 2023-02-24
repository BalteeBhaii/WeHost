import React from 'react';
const FiveTenStep = () => {
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='mb-5 fiveteen-step-text'>
                        <h2>Just one last step and we are ready to go.</h2>
                        <h6>Does your place offers any of the following?</h6>
                    </div>
                    <div className='d-flex justify-content-between mb-3 fw-semibold'>
                        <label className="form-check-label" for="flexCheckDefault">Security camera</label>
                        <input className="form-check-input border border-secondary shadow-none" type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                    <div className='d-flex justify-content-between mb-3 fw-semibold'>
                        <label className="form-check-label" for="flexCheckDefault">Weapons</label>
                        <input className="form-check-input border border-secondary shadow-none" type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                    <div className='d-flex justify-content-between mb-3 fw-semibold'>
                        <label className="form-check-label" for="flexCheckDefault">Dangerous Animals</label>
                        <input className="form-check-input border border-secondary shadow-none" type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                    <hr/>
                    <p className='mb-1 fw-semibold'>Note: </p>
                    <h6 className='fw-semibold'>Please be sure you have read our policy</h6>
                </div>
            </div>
        </div>
     );
}
 
export default FiveTenStep;