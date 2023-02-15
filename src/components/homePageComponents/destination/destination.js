import React from 'react';
import './destination.css'

const Destination = () => {
    return (
        <>
            <div className='bg-overlay text-light z-0'>
                <div className='center'>
                    <div className='container-xxl container-xl container-lg position-relative' >
                        <h1 className='fw-bold text destination-main-title' style={{ fontSize: '4.3vw' }}><span >Let's Find Your Desired Place Together</span></h1>
                        <div className="container mt-5">
                            <div className='row'>
                                <div className='col-lg-5 col-md-6'>
                                    <div className="input-group mb-3 destination-input">
                                        <span className="input-group-text border-0" id="basic-addon1">
                                            <i class="bi bi-geo-alt-fill"></i>
                                        </span>
                                        <input type="text" className="form-control border-0 shadow-none" placeholder="Where to?" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6'>
                                    <div className="input-group mb-3 destination-input">
                                        <span className="input-group-text border-0" id="basic-addon1">
                                            <i class="bi bi-calendar-date"></i>
                                        </span>
                                        <input type="text" class="form-control border-0 shadow-none" placeholder="Check-In" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6'>
                                    <div class="input-group mb-3 destination-input">
                                        <span class="input-group-text border-0" id="basic-addon1">
                                            <i class="bi bi-calendar-check"></i>
                                        </span>
                                        <input type="text" className="form-control border-0 shadow-none" placeholder="Check-Out" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div class="input-group mb-3 destination-input">
                                        <span class="input-group-text border-0" id="basic-addon1">
                                            <i class="bi bi-person-circle"></i>
                                        </span>
                                        <input type="text" className="form-control border-0 shadow-none" placeholder="Guests" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className='col-lg-7 col-md-12'>
                                    <div class="input-group mb-3 destination-input">
                                        <span class="input-group-text border-0" id="basic-addon1">
                                            <i class="bi bi-search"></i>
                                        </span>
                                        <input type="text" className="form-control border-0 shadow-none text-center" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='row'>
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
                                <span className="input-group-text" style={{fontSize: '2vw'}}><i className="bi bi-calendar-date" ></i></span>
                                <input className='form-control' type="text" placeholder='Check In' style={{fontSize: '2vw'}}/>
                            </div>
                        </div>
                        <div className='col search-col'>
                            <div className="input-group ">
                                <span className="input-group-text" style={{fontSize: '2vw'}}><i className="bi bi-calendar-week "></i></span>
                                <input className='form-control' type="text" placeholder='Check Out' style={{fontSize: '2vw'}}/>
                            </div>
                        </div>
                        <div className='col search-col'>
                            <div className="input-group">
                                <span className="input-group-text" style={{fontSize: '2vw'}}><i className="bi bi-person-circle"></i></span>
                                <input className='form-control' type="text" placeholder='Guest' style={{fontSize: '2vw'}} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="input-group">
                                <span className="input-group-text" style={{fontSize: '2vw'}}><i className="bi bi-search"></i></span>
                                <input type="text" className='form-control' placeholder='Search' style={{fontSize: '2vw'}}/>
                            </div>
                        </div>
                    </div> */}
                        {/* <div className='z-3 position-absolute bottom-1 w-100 pe-5' style={{paddingTop: 115}} >
                        <div className=' w-100 '>
                            <ul className='nav nav-pills d-flex justify-content-between bg-error'>
                                <li><a href='#' className=' btn text-light px-2 ' style={{backgroundColor: '#0D7BC4'}}><i className="bi bi-building me-2"></i>Hotels</a></li>
                                <li><a href='#'  className=' btn text-light px-2' style={{backgroundColor: '#0D7BC4'}}><i className="bi bi-list-check me-2"></i>Things to do</a></li>
                                <li><a href='#' className='btn text-light px-2' style={{backgroundColor: '#0D7BC4'}}><i className="bi bi-house-door-fill me-2"></i>Vacations Rental</a></li>
                                <li><a href='#' className='btn text-light px-2' style={{backgroundColor: '#0D7BC4'}}><i className="bi bi-cash me-2"></i>Low fares</a></li>
                                <li ><a href='#' className='btn text-light px-2' style={{backgroundColor: '#0D7BC4', width: 110}}>more</a></li>
                            </ul>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
            <div className='bottom-buttons container-xl'>
                {/* <div className='row d-flex justify-content-center table-responsive-lg'>
                    <div className='col-2 button-column'>
                        <button className='btn btn-primary bottom-button bi' id='hotels'>Hotels</button>
                    </div>
                    <div className='col-2 button-column'>
                        <button className='btn btn-primary bottom-button bi' id='things'>Things to Do</button>
                    </div>
                    <div className='col-2 button-column'>
                        <button className='btn btn-primary bottom-button bi' id='vacations'>Vacations Rental</button>
                    </div>
                    <div className='col-2 button-column'>
                        <button className='btn btn-primary bottom-button bi' id='fares'>Low Fares</button>
                    </div>
                    <div className='col-2 button-column'>
                        <button className='btn btn-primary bottom-button bi px-5' id='more'>More</button>
                    </div>
                </div> */}
                <div className="table-responsive-lg">
                    <table className="table caption-top buttons-table">
                        <thead>
                            <tr className='border-0'>
                                <th className="border-0">
                                    <div className='button-column'>
                                        <a href='/hotel'>
                                            <button className='btn btn-primary bottom-button bi' id='hotels'>Hotels</button>
                                        </a>
                                    </div>
                                </th>
                                <th className="border-0">
                                    <div className='button-column'>
                                        <button className='btn btn-primary bottom-button bi' id='things'>Things to Do</button>
                                    </div>
                                </th>
                                <th className="border-0">
                                    <div className='button-column'>
                                        <button className='btn btn-primary bottom-button bi' id='vacations'>Vacations Rental</button>
                                    </div>
                                </th>
                                <th className="border-0">
                                    <div className='button-column'>
                                        <button className='btn btn-primary bottom-button bi' id='fares'>Low Fares</button>
                                    </div>
                                </th>
                                <th className="border-0">
                                    <div className='button-column'>
                                        <button className='btn btn-primary bottom-button bi px-5' id='more'>More</button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Destination;