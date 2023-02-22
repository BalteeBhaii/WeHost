import React from 'react';
const Hotel = () => {
    return ( 
        <div className='divBackgroundImage text-light z-0'>
            <div className='center'>
                <div className='container-xxl container-xl container-lg position-relative pt-5' >
                    <h1 className='fw-bold text-center destination-main-title'><span >Choose the best hotels</span></h1>
                    <div className=''>
                        <div className='row rowPaddingStyle'>
                            <div className='col-12 col-md-4 search-col p-0 m-1'>
                                <div className="input-group destination-input ">
                                    <span className="input-group-text border-0" >
                                        <i className="bi bi-calendar-date" ></i>
                                    </span>
                                    <input className='form-control border-0 shadow-none' type="text" placeholder='Check In'/>
                                </div>
                            </div>
                            <div className='col-12 col-md-3 search-col p-0 m-1'>
                                <div className="input-group destination-input ">
                                    <span className="input-group-text border-0" >
                                        <i className="bi bi-calendar-week "></i>
                                    </span>
                                    <input className='form-control border-0 shadow-none' type="text" placeholder='Check Out'/>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 search-col p-0 m-1'>
                                <div className="input-group destination-input">
                                    <span className="input-group-text border-0">
                                        <i className="bi bi-person-circle"></i>
                                    </span>
                                    <input className='form-control border-0 shadow-none' type="text" placeholder='Guest'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hotel;