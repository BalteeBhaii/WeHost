import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
const WishList = () => {
  return (
    <div>
      <div className='container my-5'>
        <h1 className='fw-bold'>WishtLists</h1>
        <div>
          <div className="card shadow mt-4" style={{width: 300}} >
            <div className=''>
              <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                <div className='image-div'>
                  <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />
                </div>
                <div className='image-div '>
                  <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                </div>
                <div className='image-div '>
                  <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                </div>
              </Carousel>
            </div>
            <div className=''>
              <div className="card-body px-3">

                {/* <p className='mb-1'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </p> */}
                <div className='mt-2 d-flex flex-column'>
                  <div className='d-flex justify-content-between w-100 '>
                    <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                    <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                  </div>
                  <span className='fw-light mt-1'>1,786 kilometers away</span>
                  <span className='fw-light mb-1 mt-1'>March 1 - 6</span>
                  <span className='fw-light'>$1,876 <span className='fw-light mx-2'>night</span></span>
                </div>
                <div className='d-flex justify-content-between w-100 mt-1' style={{ fontSize: '0.8rem' }}>
                  <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                  <p><Link className='link-text-color' to='/listing/detail/12'><ins>Know More</ins></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;