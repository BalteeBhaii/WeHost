import React from 'react';
import { Link } from "react-router-dom";
// import LocationModal from '../../LocationModal/LocationModal';
// import './desiredHotels.css'
import FilterModal from '../../Filter/filter';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
const DesiredHotels = () => {
  const [showModal, setShowModal] = useState(false);
  const options = {
    margin: 5,
    responsiveClass: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    },
  };
  return (
    <>
      <div className='container mt-5 mb-3 position-relative'>
        <div className='w-100 d-flex justify-content-between align-items-center main-text-size-style'>
          <h1 className='mb-3'>Here are the desired hotels for you</h1>
          <button className='btn filter-button-size-style text-white btn-md px-3 position-fixed'
            onClick={(ev) => setShowModal(!showModal)}>
            <i className="bi bi-funnel me-1"></i>
            Filters
          </button>
          <FilterModal show={showModal} setShowModal={setShowModal} />
        </div>
        {/* </div> */}
        {/* <div className='container mb-5'> */}
        <div className='row'>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  
                  {/* <p className='mb-1'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </p> */}
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100'>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light'>1,786 kilometers away</span>
                    <span className='fw-light mb-1'>March 1 - 6</span>
                    <span className='fw-light'>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  
                  {/* <p className='mb-1'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </p> */}
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100'>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light'>1,786 kilometers away</span>
                    <span className='fw-light mb-1'>March 1 - 6</span>
                    <span className='fw-light'>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  
                  {/* <p className='mb-1'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </p> */}
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100'>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light'>1,786 kilometers away</span>
                    <span className='fw-light mb-1'>March 1 - 6</span>
                    <span className='fw-light'>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  
                  {/* <p className='mb-1'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </p> */}
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100'>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light'>1,786 kilometers away</span>
                    <span className='fw-light mb-1'>March 1 - 6</span>
                    <span className='fw-light'>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={true} swipeable={true} >
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100'>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light'>1,786 kilometers away</span>
                    <span className='fw-light mb-1'>March 1 - 6</span>
                    <span className='fw-light'>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesiredHotels;