import React from 'react';
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
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div className='container   '>
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