import React from 'react';
import { Link } from "react-router-dom";
// import LocationModal from '../../LocationModal/LocationModal';
// import './.css'
import FilterModal from '../Utilities/Filter/filter';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { baseUrl } from '../../config';

const More = ({ textLoadedHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [Categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  const [categoryListing, setCategoryListing] = useState([]);

  const options = {
    items: 1,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  const getCategoryListing = async () => {
    var config = {
      headers: {
        Accept: 'application/json'
      }
    }
    await axios.get(`${baseUrl}listings/?category_id=${categoryId}`, { config })
      .then(res => {
        console.log(res.data.data);
        setCategoryListing(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getCategories = async () => {
    var config = {
      headers: {
        Accept: 'application/json'
      }
    }
    await axios.get(`${baseUrl}categories`, { config })
      .then(res => {
        console.log(res.data.data)
        setCategories(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getCategories();
    getCategoryListing()
    setTimeout(() => {
      let title = document.getElementsByClassName("desired-hotel-title")[0];

    }, 1000);
  }, [categoryId]);
  return (
    <>
      <div className='container mt-4 mb-3 position-relative'>
        <div>
          <OwlCarousel className='owl-carousel owl-theme' margin={10} autoWidth={true} nav>
            {Categories.map(category => {
              return (
                <div key={category.id} className='text-center category-list' onClick={e => setCategoryId(category.id)}>
                  <div className='m-3' style={{ cursor: 'pointer' }}>
                    <i className="bi bi-house-door"></i>
                    <h4 style={{}}>{category.name}</h4>
                  </div>
                </div>
              )
            }

            )}
          </OwlCarousel>
        </div>

        <div className='w-100 d-flex justify-content-between align-items-center main-text-size-style'>

          <button className='btn filter-button-size-style text-white btn-md px-3 position-fixed'
            onClick={(ev) => setShowModal(!showModal)}>
            <i className="bi bi-funnel me-1"></i>
            Filters
          </button>
          <FilterModal show={showModal} setShowModal={setShowModal} />
        </div>
        <div className='row mt-4'>
          {categoryListing.map(list => {
            return (
              <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
                <div className="card hotel-card-style border-0" >
                  <div className=''>
                    <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                      <div className='image-div '>
                        <img alt="" src={`${baseUrl}../storage/${list.cover_image}`} onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                      </div>
                      <div className='image-div  '>
                        <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                      </div>
                      <div className='image-div  '>
                        <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                      </div>
                    </Carousel>
                  </div>
                  <div className=''>
                    <div className="card-body p-1">
                      <div className='mt-2 d-flex flex-column'>
                        <div className='d-flex justify-content-between w-100 '>
                          <p className='fw-bold hatyouwant-description mb-1'>{list.title}</p>
                          <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                        </div>
                        <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                        <span className='fw-light '>{list.currency_symbol}{list.price} <span className='fw-light mx-2'>night</span></span>
                      </div>
                      <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
                        <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>{list.city}</p>
                        <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
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
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
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
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
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
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
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
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default More;