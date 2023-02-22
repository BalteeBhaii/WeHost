import React from 'react';
const WeHost = () => {
    return ( 
        <>
            <div className='row'>
                <div className='col-12 py-4' style={{background:'#CBF2FC'}}>
                    <div className='col-12 col-lg-8'>
                        <div className='wehost-main-container'>
                            <h1>WeHost</h1>
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
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-8'>
                    <div className='container wehost-house-img'>
                        <img src='/images/house.png' alt='house' width={'100%'} height={'100%'}/>
                    </div>
                </div>
                <div className='col-12 col-md-9 col-lg-4'>
                    <div className='wehost-card-position'>
                        <div class="card shadow" >
                            <div class="card-body my-4">
                                <div className='container'> 
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h3 class="card-title" style={{color: '#02B5ED'}}>We<span style={{color: '#2F5BEC'}}>H</span>ost Now.</h3>
                                        <h6 class="card-subtitle mb-2 text-muted" style={{fontSize: '14px'}}>Check out your potential earnings!</h6>
                                    </div>   
                                    <div className="input-group mb-3 rounded wehost-input">
                                        <span className="input-group-text border-0" id="basic-addon1">
                                            <i className="bi bi-search" style={{color: '#31C3F0'}}></i>
                                        </span>
                                        <input type="text" class="form-control border-0 shadow-none p-1 searchfeildtxt" placeholder='Where are you located'/>
                                    </div>
                                    <div className='wehost-img mb-3'>
                                        <img src='/images/mapimage.png'/>
                                    </div>
                                    <div className='text-center wehost-button'>
                                        <button className='btn'><i class="bi bi-house-add pe-1"></i>Setup Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='wehost-card-position-2'>
                        <div class="card shadow" >
                                <div class="card-body m2-4">
                                    <div className='container'> 
                                        <div className=''>
                                            <h5 class="card-title">Already an <span style={{color: '#02B5ED'}}>We<span style={{color: '#2F5BEC'}}>H</span>ost</span> host?</h5>
                                            <p class="card-subtitle mb-2 text-muted" style={{fontSize: '14px'}}>
                                                A professional Quick Start staff is available to  assist you in creating your listing. 
                                                To contact a member of our staff, use the link below, orrequest a call from us the following
                                                working day.
                                             </p>
                                        </div>   
                                        <div className='wehost-button'>
                                            <button className='btn'><i class="bi bi-house-add pe-1"></i>Start Now</button>
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
 
export default WeHost;