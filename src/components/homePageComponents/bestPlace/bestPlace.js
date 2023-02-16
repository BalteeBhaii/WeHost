import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { useState } from 'react';
// import './bestPlace.css';

const BestPlace = () => {
    // const [slidesToShow, setSlidesToShow] = useState(3)
    // let screenWidth = window.screen.width;
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: slidesToShow,
    //     slidesToScroll: 1,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />
    //   };
    const [slidesToShow, setSlidesToShow] = useState(3)
    let screenWidth = window.screen.width;
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
      };

    //   const resize = ()=>{
    //     if(window.innerWidth <= 500){
    //         setSlidesToShow(1)
    //     } 
    //     else if(window.innerWidth <= 767){
    //         setSlidesToShow(2)
    //     } else{
    //         setSlidesToShow(3)
    //     }
    //   }

    //   window.onresize = resize;
    //   useEffect(()=>{
    //     if(screenWidth <= 767){
    //         setSlidesToShow(2)
    //     } 
    //     if(screenWidth<= 425){
    //         setSlidesToShow(1)
    //     }
    //   },[])

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
                items: 2,
            },
            1000: {
                items: 3,
            }
        },
    };

    return (
        <div className='container my-5'>
            <h1 className='section-title mb-0 section-titles'>Find best place according to your comfort</h1>
            <OwlCarousel className="slider-items owl-carousel" {...options}>
                <div class='item'>
                    <img className='owl-image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h3 className='owl-title mb-0 mt-2'>Houses</h3>
                    <span className='owl-views'>340k+ views</span>
                </div>
                <div className='item'>
                    <img className='owl-image' src="https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h3 className='owl-title mb-0 mt-2'>Mansions</h3>
                    <span className='owl-views'>340k+ views</span>
                </div>
                <div className='item'>
                    <img className='owl-image' src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h3 className='owl-title mb-0 mt-2'>Lake View</h3>
                    <span className='owl-views'>340k+ views</span>
                </div>
                <div class='item'>
                    <img className='owl-image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h3 className='owl-title mb-0 mt-2'>Houses</h3>
                    <span className='owl-views'>340k+ views</span>
                </div>
                <div class='item'>
                    <img className='owl-image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h3 className='owl-title mb-0 mt-2'>Houses</h3>
                    <span className='owl-views'>340k+ views</span>
                </div>
                <div class='item'>
                    <img className='owl-image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h3 className='owl-title mb-0 mt-2'>Houses</h3>
                    <span className='owl-views'>340k+ views</span>
                </div>
                <div class='item'>
                    <img className='owl-image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h3 className='owl-title mb-0 mt-2'>Houses</h3>
                    <span className='owl-views'>340k+ views</span>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default BestPlace;