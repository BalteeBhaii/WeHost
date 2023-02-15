import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './bestPlace.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block", }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block", }}
            onClick={onClick}
        />
    );
}

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
    return (
        <div className='container my-5'>
            <h1 className='section-title mb-0'>Find best place according to your comfort</h1>
            <OwlCarousel className='owl-theme' margin={10} nav responsive={true}>
                <div class='item'>
                    <img className='owl-image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h3 className='owl-title mb-0 mt-2'>Houses</h3>
                    <span className='owl-views'>340k+ views</span>
                </div>
                <div class='item'>
                    <img className='owl-image' src="https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h3 className='owl-title mb-0 mt-2'>Mansions</h3>
                    <span className='owl-views'>340k+ views</span>
                </div>
                <div class='item'>
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
            {/* <h2 className='fw-semibold mb-3'>Find best place according to your comfort</h2>
            <Slider {...settings}>
                <div className=''>
                    <div className='card mx-1'>
                        <img src='/images/house1.svg' width={'100%'} height={'auto'}/>
                        <div className="card-body">
                            <h5 className="card-title">Hotel Booking</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card mx-1'>
                    <img src='/images/house2.svg' width={'100%'} height={'auto'}/>
                        <div className="card-body">
                            <h5 className="card-title">Hotel Booking</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card mx-1'>
                    <img src='/images/house3.svg' width={'100%'} height={'auto'}/>
                        <div className="card-body">
                            <h5 className="card-title">Hotel Booking</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card mx-1'>
                    <img src='/images/house1.svg' width={'100%'} height={'auto'}/>
                        <div className="card-body">
                            <h5 className="card-title">Hotel Booking</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
            </Slider> */}
        </div>
    )
}

export default BestPlace;