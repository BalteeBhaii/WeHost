import React from 'react';
import { Link } from "react-router-dom";
// import './desiredHotels.css'
const DesiredHotels = () => {
    return (
        <>
            <div className='container mt-5 mb-3'>
                <div className='w-100 d-flex justify-content-between align-items-center main-text-size-style'>
                    <h1 className='mb-0'>Here are the desired hotels for you</h1>
                    <button className='btn btn-primary btn-md m-1' ><i class="bi bi-funnel me-1"></i>Filters</button>
                </div>
            </div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-sm-11 col-md-6 col-lg-4 mb-3'>
                        <div className="card" >
                            <div className='image-div'>
                                <img className='imgSizeStyle' src="/images/cardImage.svg" width={'100%'} height={'100%'} alt="..."/>
                            </div>
                            <div className='container'>
                                <div className="card-body p-1">
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='mb-1'>2-September</p>
                                        <p className='mb-1'>$800/Person</p>
                                    </div>
                                    <p className='mb-1'>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-half"></i>
                                    </p>
                                    <p className="card-text mb-1">Enjoy the Lima city sightseeing and explore the buetyof Lima</p>
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='fw-semibold'><i class="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                                        <p><Link to='/hotel/12'><ins>Know More</ins></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-11 col-md-6 col-lg-4 mb-3'>
                        <div className="card" >
                            <div className='image-div'>
                                <img className='imgSizeStyle' src="/images/cardImage.svg" width={'100%'} height={'100%'} alt="..."/>
                            </div>
                            <div className='container'>
                                <div className="card-body p-1">
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='mb-1'>2-September</p>
                                        <p className='mb-1'>$800/Person</p>
                                    </div>
                                    <p className='mb-1'>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-half"></i>
                                    </p>
                                    <p className="card-text mb-1">Enjoy the Lima city sightseeing and explore the buetyof Lima</p>
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='fw-semibold'><i class="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                                        <p><a><ins>Know More</ins></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-11 col-md-6 col-lg-4 mb-3'>
                        <div className="card" >
                            <div className='image-div'>
                                <img className='imgSizeStyle' src="/images/cardImage.svg" width={'100%'} height={'100%'} alt="..."/>
                            </div>
                            <div className='container'>
                                <div className="card-body p-1">
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='mb-1'>2-September</p>
                                        <p className='mb-1'>$800/Person</p>
                                    </div>
                                    <p className='mb-1'>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-half"></i>
                                    </p>
                                    <p className="card-text mb-1">Enjoy the Lima city sightseeing and explore the buetyof Lima</p>
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='fw-semibold'><i class="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                                        <p><a><ins>Know More</ins></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-11 col-md-6 col-lg-4 mb-3'>
                        <div className="card" >
                            <div className='image-div'>
                                <img className='imgSizeStyle' src="/images/cardImage.svg" width={'100%'} height={'100%'} alt="..."/>
                            </div>
                            <div className='container'>
                                <div className="card-body p-1">
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='mb-1'>2-September</p>
                                        <p className='mb-1'>$800/Person</p>
                                    </div>
                                    <p className='mb-1'>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-half"></i>
                                    </p>
                                    <p className="card-text mb-1">Enjoy the Lima city sightseeing and explore the buetyof Lima</p>
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='fw-semibold'><i class="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                                        <p><a><ins>Know More</ins></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-11 col-md-6 col-lg-4 mb-3'>
                        <div className="card" >
                            <div className='image-div'>
                                <img className='imgSizeStyle' src="/images/cardImage.svg" width={'100%'} height={'100%'} alt="..."/>
                            </div>
                            <div className='container'>
                                <div className="card-body p-1">
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='mb-1'>2-September</p>
                                        <p className='mb-1'>$800/Person</p>
                                    </div>
                                    <p className='mb-1'>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-half"></i>
                                    </p>
                                    <p className="card-text mb-1">Enjoy the Lima city sightseeing and explore the buetyof Lima</p>
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='fw-semibold'><i class="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                                        <p><a><ins>Know More</ins></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-11 col-md-6 col-lg-4 mb-3'>
                        <div className="card" >
                            <div className='image-div'>
                                <img className='imgSizeStyle' src="/images/cardImage.svg" width={'100%'} height={'100%'} alt="..."/>
                            </div>
                            <div className='container'>
                                <div className="card-body p-1">
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='mb-1'>2-September</p>
                                        <p className='mb-1'>$800/Person</p>
                                    </div>
                                    <p className='mb-1'>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-half"></i>
                                    </p>
                                    <p className="card-text mb-1">Enjoy the Lima city sightseeing and explore the buetyof Lima</p>
                                    <div className='d-flex justify-content-between w-100' style={{fontSize: '0.8rem'}}>
                                        <p className='fw-semibold'><i class="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                                        <p><a><ins>Know More</ins></a></p>
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