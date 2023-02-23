import React from 'react';
const NinethStep= () => {
    return (
        <>
            <div className='container '>
                <h3 className='verify-2nd-title mb-0 mt-5 text-center'>Here are the photos we arranged it for you </h3>
                <h4 className='text-center'>Have take a look! </h4>
                <div className=' col-md-5 col-sm-12 mt-5 '>
                <img className='upload-main-image' src='/images/houseimage1.png' alt="" />
                </div>
                <div className='row uploaded-images'>
                    <div className='col-6 mt-3'>
                    <img className='uploaded-image' src='/images/explore-1.jpg' alt="" />
                    </div>
                    <div className='col-6 mt-3'>
                    <img className='uploaded-image' src='/images/explore-1.jpg' alt="" />
                    </div>
                </div>
                <div className='col-md-5 col-sm-12 mt-5  photos-drag-files-wrapper'>
                <div className="photoDropBox"><i className="bi bi-plus-circle drag-file-image "></i>
                <p className=' mt-4'>Add image here</p>
                
                </div>
                </div>
            </div>
        </>
    );
}

export default NinethStep;