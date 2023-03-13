import React, { useEffect } from 'react';
const StepThree = ({setId}) => {
    useEffect(()=>{
        setId(true);
        console.log('hello fucker')
    },[])
    return (
        <div className='container'>
            <div className='row align-items-end mt-5'>
                <div className='col-12 col-md-6'>
                    <div className='firstStep-text mb-5'>
                        <h6>Third step: </h6>
                        <h1>Finish and Publish</h1>
                        <h4>
                            We're almost done; you'll decide if you want
                            to start with a seasoned visitor before setting
                            your nightly rate. Quickly respond to a few
                            questions, then post when you're ready.
                        </h4>
                    </div>
                </div>
                <div className='col-12 col-md-6 d-flex justify-content-md-end justify-content-sm-start'>
                    <div className='firstStep-img'>
                        <img src='/images/stepthree.png' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepThree;