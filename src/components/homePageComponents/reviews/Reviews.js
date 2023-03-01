import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Reviews = () => {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 3,
            }
        },
    };

  return (
    <>
        <div className='container section'>
            <div className='review-main-section overflow-hidden'>
                <h1 className='worldwide-section-title section-titles text-center mb-3'>Reviews</h1>
                <OwlCarousel className="slider-items owl-carousel review-owl px-4" {...options}>
                <div className='item'>
                    <div className='review-owl-item d-flex px-2 py-3'>
                        <img className='review-owl-item-image' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <div className='review-owl-info'>
                            <span className='review-owl-description'>Rented my house it was quite a good doing business with them.</span>
                            <div className='d-flex w-100 mt-3'>
                                <div className='review-stars-container px-2 py-1'>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='review-owl-item d-flex px-2 py-3'>
                        <img className='review-owl-item-image' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <div className='review-owl-info'>
                            <span className='review-owl-description'>Rented my house it was quite a good doing business with them.</span>
                            <div className='d-flex w-100 mt-3'>
                                <div className='review-stars-container px-2 py-1'>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='review-owl-item d-flex px-2 py-3'>
                        <img className='review-owl-item-image' src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <div className='review-owl-info'>
                            <span className='review-owl-description'>Rented my house it was quite a good doing business with them.</span>
                            <div className='d-flex w-100 mt-3'>
                                <div className='review-stars-container px-2 py-1'>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='review-owl-item d-flex px-2 py-3'>
                        <img className='review-owl-item-image' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <div className='review-owl-info'>
                            <span className='review-owl-description'>Rented my house it was quite a good doing business with them.</span>
                            <div className='d-flex w-100 mt-3'>
                                <div className='review-stars-container px-2 py-1'>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='review-owl-item d-flex px-2 py-3'>
                        <img className='review-owl-item-image' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <div className='review-owl-info'>
                            <span className='review-owl-description'>Rented my house it was quite a good doing business with them.</span>
                            <div className='d-flex w-100 mt-3'>
                                <div className='review-stars-container px-2 py-1'>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                    <i className="bi bi-star-fill review-owl-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
            </div>
        </div>
    </>
  )
}

export default Reviews;