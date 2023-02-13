import React from 'react';
import './destination.css'

const Destination = () => {
    return ( 
    <>
        <div className='bg-overlay text-light z-0'>
            <div className='center'>
                <div className='container position-relative' >
                    <h1 className='fw-bold text' style={{fontSize: '4.3vw'}}><span >Let's Find Your Desired Place Together</span></h1>
                    <div className='row'>
                        <div className='col'>
                            <div className="input-group mb-3">
                                <span className="input-group-text text-black" style={{fontSize: '2vw'}}><i className="bi bi-geo-alt-fill"></i></span>
                                <input type="text" className='form-control' style={{fontSize: '2vw'}} placeholder='Where to?'  aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col search-col'>
                            <div className="input-group ">
                                <span className="input-group-text" style={{fontSize: '2vw'}}><i class="bi bi-calendar-date" ></i></span>
                                <input className='form-control' type="text" placeholder='Check In' style={{fontSize: '2vw'}}/>
                            </div>
                        </div>
                        <div className='col search-col'>
                            <div className="input-group ">
                                <span className="input-group-text" style={{fontSize: '2vw'}}><i class="bi bi-calendar-week "></i></span>
                                <input className='form-control' type="text" placeholder='Check Out' style={{fontSize: '2vw'}}/>
                            </div>
                        </div>
                        <div className='col search-col'>
                            <div className="input-group">
                                <span className="input-group-text" style={{fontSize: '2vw'}}><i class="bi bi-person-circle"></i></span>
                                <input className='form-control' type="text" placeholder='Guest' style={{fontSize: '2vw'}} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="input-group">
                                <span className="input-group-text" style={{fontSize: '2vw'}}><i class="bi bi-search"></i></span>
                                <input type="text" className='form-control' placeholder='Search' style={{fontSize: '2vw'}}/>
                            </div>
                        </div>
                    </div>
                    <div className='z-3 position-absolute bottom-1 w-100' style={{paddingTop: 115}} >
                        <div className='row align-items-center no-gutters '>
                            <div className='col'>
                            <div style={{backgroundColor: '#0D7BC4'}}>
                                <span>
                                <a href='#' className='btn'>Hotels</a>
                                </span>
                            </div>
                            </div>
                            <div className='col'>
                            <div style={{backgroundColor: '#0D7BC4'}}>
                                <span>
                                <a href='#' className='btn'>Things to do</a>
                                </span>
                            </div>
                            </div>
                            <div className='col'>
                            <div className='' style={{backgroundColor: '#0D7BC4'}}>
                                <span>
                                <a href='#' className='btn'>Vacations Rental</a>
                                </span>
                            </div>
                            </div>
                            <div className='col '>
                            <div >
                                <span className='rounded' style={{backgroundColor: '#0D7BC4'}}>
                                <a href='#' className='btn'>Low fares</a>
                                </span>
                            </div>
                            </div>
                            <div className='col'>
                            <div style={{backgroundColor: '#0D7BC4'}}>
                                <span>
                                <a href='#' className='btn'>more</a>
                                </span>
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
 
export default Destination;