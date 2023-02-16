import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import './bestPlace.css';

const BestPlace = () => {
    return (
        <div className='container my-5'>
            <h1 className='section-title mb-0'>Find best place according to your comfort</h1>
            <OwlCarousel className='owl-theme' margin={10} nav responsive={true}>
                <div className='item'>
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