import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{  display: "block",}}
        onClick={onClick}
      ><img src='/images/arrowright.svg' />
</div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block",  }}
        onClick={onClick}
      ><img src='/images/arrow.svg'/></div>
    );
  }

const BestPlace = () => {
    const [slidesToShow, setSlidesToShow] = useState(3)
    let screenWidth = window.screen.width;
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      const resize = ()=>{
        if(window.innerWidth <= 500){
            setSlidesToShow(1)
        } 
        else if(window.innerWidth <= 767){
            setSlidesToShow(2)
        } else{
            setSlidesToShow(3)
        }
      }

      window.onresize = resize;
      useEffect(()=>{
        if(screenWidth <= 767){
            setSlidesToShow(2)
        } 
        if(screenWidth<= 425){
            setSlidesToShow(1)
        }
      },[])
      return (
        <div className='container px-5 my-5'>
        <h2 className='fw-semibold mb-3'>Find best place according to your comfort</h2>
            <Slider {...settings}>
                <div className=''>
                    <div className='card mx-1'>
                        <img src='/images/house1.svg' width={'100%'} height={'auto'}/>
                        <div class="card-body">
                            <h5 class="card-title">Hotel Booking</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card mx-1'>
                    <img src='/images/house2.svg' width={'100%'} height={'auto'}/>
                        <div class="card-body">
                            <h5 class="card-title">Hotel Booking</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card mx-1'>
                    <img src='/images/house3.svg' width={'100%'} height={'auto'}/>
                        <div class="card-body">
                            <h5 class="card-title">Hotel Booking</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='card mx-1'>
                    <img src='/images/house1.svg' width={'100%'} height={'auto'}/>
                        <div class="card-body">
                            <h5 class="card-title">Hotel Booking</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
      )
}
 
export default BestPlace;