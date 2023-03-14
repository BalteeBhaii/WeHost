import React, { useEffect } from 'react';
import ImageUploading from "react-images-uploading";
import axios from 'axios';

const EightStep = ({ id, setId, images, setImages, setListingCompleteData, listingCompleteData, setIsListingDataChanged, url }) => {
  // const [images, setImages] = React.useState([]);
  const maxNumber = 10;

  const onChange = (imageList) => {
    // data for submit
    console.log(imageList[0].file);
    setImages(imageList);
  };

  const confirmHandleClick = () => {
    console.log('hello fucker');
    console.log(url);
    if(images.length >= 5){
      postImages()
      setId(true);
    } 
  }

  const postImages = async ()=> {
    let i = 0;
    if(listingCompleteData.images.length > 0){
      listingCompleteData.images = [];
    }
    for(const image of images){
      // const dataurl =  dataURLtoBlob(image.data_url);
      const formData = new FormData();
      formData.append('file', image.file);
      formData.append('type', 'image');
      await axios.post(`${url}media`, formData, { headers: { Accept: 'application/json',  Authorization: `Bearer ${JSON.parse(localStorage.getItem('dataKey'))}`}})
      .then(res => {
        if (i === 0) {
          listingCompleteData.cover_image = res.data.data.path;
          setListingCompleteData(listingCompleteData);
          setIsListingDataChanged(Math.random());
        } else {
          listingCompleteData.images.push(res.data.data.id);
          console.log(res.data.data.id);
          setListingCompleteData(listingCompleteData);
          setIsListingDataChanged(Math.random());
        }
      })
      .catch(err => {
        console.log(err)
      })
      i++;
    }
  }


  useEffect(() => {
    if (images.length === 5) {

    } else {
      setId(false)
    }
  }, [images])

  return (
    <>
      <div className='container mb-5 pb-5'>
        <h3 className='verify-2nd-title mb-0 mt-5 text-center'>Insert photos of your property </h3>
        <h4 className='text-center'>You need to add minimum of 4 photos in it </h4>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpeg", "png", "jpg"]}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <div className='col-md-5 col-sm-12 mt-5  drag-files-wrapper'>
                <div className="fileDropBox">
                  <i className="bi bi-images drag-file-image "></i>
                  <h3 className='drag-file-header mt-4'>Drag Your Photos Here</h3>
                  <p className='drag-file-text'>Choose atleast 5 photos</p>
                  <button className='btn border-0 text-decoration-underline' style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  <button className='btn border-0 text-decoration-underline' onClick={onImageRemoveAll}>Remove all images</button>
                </div>
              </div>
              <div className='container'>
                <div className='row my-3'>
                  {imageList.map((image, index) => {
                    return (
                      (index === 0) ? (
                        <div className='col-12 mb-3'>
                          <div key={index} className="image-item bg-warning" style={{ height: 500, position: 'relative' }}>
                            <div className='d-flex h-100 justify-content-center'>
                              <img src={image.data_url} alt="" width={'100%'} height={'100%'} />
                              <span className='bg-white p-1 rounded' style={{ position: 'absolute', left: '10px', top: '0.5rem' }}>Cover Image</span>
                              <div class="btn-group pt-2" style={{ position: 'absolute', right: '5px', top: '0.5rem' }}>
                                <button type="button" class="btn border rounded-circle shadow p-1" data-bs-toggle="dropdown" aria-expanded="false"
                                  style={{ width: 30, height: 30, backgroundColor: '#ffffff9c' }}
                                >
                                  <i class="bi bi-three-dots"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li ><button className='btn text-decoration-underline' onClick={() => onImageUpdate(index)}>Update</button></li>
                                  <li><button className='btn text-decoration-underline' onClick={() => onImageRemove(index)}>Remove</button></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                      :
                        (
                          <div className='col-12 col-md-6 col-lg-4 mb-3'>
                            <div key={index} className="image-item bg-warning" style={{ height: 300, overflow: 'hidden', backgroundSize: 'contain', position: 'relative' }}>
                              <div className='d-flex h-100 justify-content-center'>
                                <img src={image.data_url} alt="" width={'100%'} height={'100%'} />
                                <div class="btn-group pt-2" style={{ position: 'absolute', right: '5px', top: '0.5rem' }}>
                                  <button type="button" class="btn border rounded-circle shadow p-1" data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{ width: 30, height: 30, backgroundColor: '#ffffff9c' }}
                                  >
                                    <i class="bi bi-three-dots"></i>
                                  </button>
                                  <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button className='btn fw-semibold' onClick={() => onImageUpdate(index)}>Update</button></li>
                                    <li><button className='btn fw-semibold' onClick={() => onImageRemove(index)}>Remove</button></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                    )
                  }
                  )}
                  {(images.length>=5)&&(
                    <div className='col-12 col-md-6 col-lg-4 mb-3 d-flex align-items-center' style={{border: '1px dotted black'}}>
                      <button className='btn mb-5 fw-semibold fs-5 text-decoration-underline w-100' onClick={confirmHandleClick}>Submit</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </ImageUploading>
        {/* <div className='col-md-5 col-sm-12 mt-5  drag-files-wrapper'>
          <div className="fileDropBox">
            <i className="bi bi-images drag-file-image "></i>
            <h3 className='drag-file-header mt-4'>Drag Your Photos Here</h3>
            <p className='drag-file-text'>Choose atleast 5 photos</p>
            <span className='text-decoration-underline text-dark mt-5 drag-file-here' onClick={handleImgClick}>Upload your file here</span>
            <input type='file' className='d-none' id='imgUpload' multiple onChange={(event) => onChange(event)} />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default EightStep;