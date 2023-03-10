import React, { useEffect } from 'react';
const StepTwo = ({setId}) => {
    useEffect(()=>{
        setId(true);
    })
    return (
        <div className='container'>
            <div className='row align-items-end mt-5'>
                <div className='col-12 col-md-6'>
                    <div className='firstStep-text mb-5'>
                        <h6>Second step: </h6>
                        <h1>Make it Standout</h1>
                        <h4>
                            Add a few of the amenities your location
                            provides in this phase, along with five or
                            more images. You will then write a title
                            and description.
                        </h4>
                    </div>
                </div>
                <div className='col-12 col-md-6 d-flex justify-content-md-end justify-content-sm-start'>
                    <div className='firstStep-img'>
                        <img src='/images/steptwo.png' />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default StepTwo;