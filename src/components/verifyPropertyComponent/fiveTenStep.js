import React from 'react';
import { useState, useEffect } from 'react';

const FiveTenStep = ({id, setId}) => {
    const [hasCameras, setHasCameras] = useState(0);
    const [hasWeapons, setHasWeapons] = useState(0);
    const [hasAnimals, setAnimals] = useState(0);

    var listingData = JSON.parse(localStorage.getItem("listing_data"));

    useEffect(() => {
        hasAnimals == true ? listingData.has_animals = 1 : listingData.has_animals = 0;;
        hasCameras == true ? listingData.has_security_cameras = 1 : listingData.has_security_cameras = 0;
        hasWeapons == true ? listingData.has_weapons = 1 : listingData.has_weapons = 0;

        localStorage.setItem("listing_data", JSON.stringify(listingData));
    }, [hasCameras, hasWeapons, hasAnimals]);
    
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-md-8 col-lg-5'>
                    <div className='mb-5 fiveteen-step-text'>
                        <h2>Just one last step and we are ready to go.</h2>
                        <h6>Does your place offers any of the following?</h6>
                    </div>
                    <div className='d-flex justify-content-between mb-3 fw-semibold'>
                        <label className="form-check-label">Security camera</label>
                        <input className="form-check-input border border-secondary shadow-none" onChange={()=> {setId(true); setHasCameras(!hasCameras)}} type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                    <div className='d-flex justify-content-between mb-3 fw-semibold'>
                        <label className="form-check-label">Weapons</label>
                        <input className="form-check-input border border-secondary shadow-none" onChange={()=> {setId(true); setHasWeapons(!hasWeapons)}} type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                    <div className='d-flex justify-content-between mb-3 fw-semibold'>
                        <label className="form-check-label">Animals</label>
                        <input className="form-check-input border border-secondary shadow-none" onChange={()=> {setId(true); setAnimals(!hasAnimals)}} type="checkbox" value="" id="flexCheckDefault"/>
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