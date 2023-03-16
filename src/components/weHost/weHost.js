import React from 'react';
import { Link } from "react-router-dom";
const WeHost = () => {
    return ( 
        <>
            <div className='row'>
                <div className='col-12 py-4' style={{background:'#CBF2FC'}}>
                    <div className='col-12 col-lg-8'>
                        <div className='wehost-main-container'>
                            <h1 className='destination-main-title'>WeHost</h1>
                            <p className='mb-2'>Welcome to weHost "the better BnB" - we are a community that is dedicated to making
                                short-term vacation travel a better experience for everyone. We value your property
                            </p>
                            <div className=' p-2 text-white text-center wehost-h6-div'>
                                <h6 className='mb-0'>Our Formula = More Money in Your Pocket and a Better Overall Experience for Everyone!</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        <div className=' wehost-house-img'>
                            <img src='/images/house.png' alt='house' width={'100%'} height={'100%'}/>
                        </div>
                    </div>
                    <div className='col-12 col-md-9 col-lg-4 mb-3'>
                        <div className='wehost-card-position'>
                            <div className="card shadow" >
                                <div className="card-body my-4">
                                    <div className='container'> 
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <h3 className="card-title" style={{color: '#02B5ED'}}>We<span style={{color: '#2F5BEC'}}>H</span>ost Now.</h3>
                                            <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '14px'}}>Check out your potential earnings!</h6>
                                        </div>   
                                        <div className="input-group mb-3 rounded wehost-input">
                                            <span className="input-group-text border-0" id="basic-addon1">
                                                <i className="bi bi-search" style={{color: '#31C3F0'}}></i>
                                            </span>
                                            <input type="text" className="form-control border-0 shadow-none p-1 searchfeildtxt" placeholder='Where are you located'/>
                                        </div>
                                        <div className='wehost-img mb-3'>
                                            <img src='/images/mapimage.png'/>
                                        </div>
                                        <div className='text-center wehost-button'>
                                            <button className='btn'><i className="bi bi-house-add pe-1"></i>Setup Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='wehost-card-position-2'>
                            <div className="card shadow" >
                                <div className="card-body m2-4">
                                    <div className='container'> 
                                        <div className=''>
                                            <h5 className="card-title">Already an <span style={{color: '#02B5ED'}}>We<span style={{color: '#2F5BEC'}}>H</span>ost</span> host?</h5>
                                            <p className="card-subtitle mb-2 text-muted" style={{fontSize: '14px'}}>
                                                A professional Quick Start staff is available to  assist you in creating your listing. 
                                                To contact a member of our staff, use the link below, orrequest a call from us the following
                                                working day.
                                                </p>
                                        </div>   
                                        <div className='wehost-button'>
                                            <Link to='/host/create-listing'>
                                                <button className='btn'><i className="bi bi-house-add pe-1"></i>Start Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom: '50px'}}>
                <div className='wehost-bg-img'>
                    <div className='text-center wehost-bg-img-text'>
                        <h1>You will be seen by million we value your property</h1>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-4 mb-3'>
                                <div className="card d-flex flex-column jsutify-content-center align-items-center">
                                    <div className='w-25 h-25 py-3'>
                                        <img src="/images/VR-icons-grow-business1.png" className="card-img-top" alt="wehost"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Grow Business</h5>
                                        <p className="card-text">
                                            Be more competitive, make decisions based on current information, and assistance in boosting visibility and bookings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 mb-3'>
                                <div className="card d-flex flex-column jsutify-content-center align-items-center">
                                    <div className='w-25 h-25 py-3'>
                                        <img src="/images/VR-icons-grow-business2.png" className="card-img-top" alt="wehost"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Ideal Customer</h5>
                                        <p className="card-text">
                                            Make reservations for the kind of visitors who will enjoy what you have to offer and keep coming back.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className="card d-flex flex-column jsutify-content-center align-items-center">
                                    <div className='w-25 h-25 py-3'>
                                        <img src="/images/VR-icons-grow-business3.png" className="card-img-top" alt="wehost"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Low Fairs</h5>
                                        <p className="card-text">
                                            Our innovative strategy allows us to keep fees lower than anybody else, and our Risk-Free Guarantee backs up our 10% management fee.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='text-center wehost-conviction-text pb-4'>
                    <h1>Host With Conviction</h1>
                    <h6>Listen it from our hosts</h6>
                </div>
                <div className='row my-5'>
                    <div className='col-12 col-md-6'>
                        <div className='wehost-profile-pic my-3'>
                            <img src='/images/1360932.png' className='img-fluid' alt=''/>
                        </div>
                        <div className='wehost-profile-text'>
                            <h6>
                                “ I’ve a great experience using weHost andit’s quite great to work as an host in it “
                            </h6>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='wehost-profile-pic my-3'>
                            <img src='/images/1360933.png' className='img-fluid' alt=''/>
                        </div>
                        <div className='wehost-profile-text'>
                            <h6>
                                “ I’ve a great experience using weHost andit’s quite great to work as an host in it “
                            </h6>
                        </div>
                    </div>

                </div>
            </div>
        </> 
    );
}
 
export default WeHost;