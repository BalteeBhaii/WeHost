import React from 'react';
const EightStep= ({id, setId}) => {
    const handleImgClick = ()=>{
        document.getElementById('imgUpload').click()
        setId(true);
    }
    return (
        <>
            <div className='container '>
                <h3 className='verify-2nd-title mb-0 mt-5 text-center'>Insert photos of your property </h3>
                <h4 className='text-center'>You need to add minimum of 4 photos in it </h4>
                <div className='col-md-5 col-sm-12 mt-5  drag-files-wrapper'>
                <div className="fileDropBox"><i className="bi bi-images drag-file-image "></i>
                <h3 className='drag-file-header mt-4'>Drag Your Photos Here</h3>
                <p className='drag-file-text'>Choose atleast 5 photos</p>
                <span className='text-decoration-underline text-dark mt-5 drag-file-here' onClick={handleImgClick}>Upload your file here</span>
                <input type='file' className='d-none' id='imgUpload'/>
                </div>
                </div>
            </div>
        </>
    );
}

export default EightStep;