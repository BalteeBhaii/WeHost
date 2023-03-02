import React from 'react';
const NinethStep= () => {
    console.log(document.getElementById('imgUpload'))
    const handleimgClick = ()=>{
        document.getElementById('imgUpload').click()
    }
    return (
        <>
            <div className='container '>
                <h3 className='verify-2nd-title mb-0 mt-5 text-center'>Here are the photos we arranged it for you </h3>
                <h4 className='text-center'>Have take a look! </h4>
                <div className='row '>
                <div className=' col-12 mt-5 d-flex justify-content-center '>
                <img className='upload-main-image' src='/images/houseimage1.png' alt="" />
                </div>
                </div>
                <div className='row uploaded-images'>
                    <div className='col-6 mt-3'>
                    <img className='uploaded-image' src='/images/explore-1.jpg' alt="" />
                    </div>
                    <div className='col-6 mt-3'>
                    <img className='uploaded-image' src='/images/explore-1.jpg' alt="" />
                    </div>
                </div>
                
                <div className='row uploaded-images'>
                    <div className='col-6 mt-3 d-flex d-flex justify-content-center align-item-center flex-column photos-drag-files-wrapper'>
                        <div className="photoDropBox" onClick={handleimgClick}>
                            <i className="bi bi-plus-circle drag-file-image "></i>
                            <input type='file' className='d-none' id='imgUpload'/>
                            <p className=' mt-4 d-none d-md-block'>Add image here</p>                
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default NinethStep;