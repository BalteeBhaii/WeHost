import React from 'react';
import './hotel.css';
const Hotel = () => {
    return ( 
        <div className='divBackgroundImage text-light z-0'>
            <div className='center'>
                <div className='container-xxl container-xl container-lg position-relative pt-5' >
                    <h1 className='fw-bold text-center' style={{fontSize: '4.3vw'}}><span >Chose the best hotels</span></h1>
                    <div className='row p-0 m-1'>
                        <div className='col search-col p-0 m-1'>
                            <div className="input-group ">
                                <span className="input-group-text p-1" style={{fontSize: '2vw'}}><i className="bi bi-calendar-date" ></i></span>
                                <input className='form-control p-1' type="text" placeholder='Check In' style={{fontSize: '2vw'}}/>
                            </div>
                        </div>
                        <div className='col search-col p-0 m-1'>
                            <div className="input-group ">
                                <span className="input-group-text p-1" style={{fontSize: '2vw'}}><i className="bi bi-calendar-week "></i></span>
                                <input className='form-control p-1' type="text" placeholder='Check Out' style={{fontSize: '2vw'}}/>
                            </div>
                        </div>
                        <div className='col search-col p-0 m-1'>
                            <div className="input-group">
                                <span className="input-group-text p-1" style={{fontSize: '2vw'}}><i className="bi bi-person-circle"></i></span>
                                <input className='form-control p-1' type="text" placeholder='Guest' style={{fontSize: '2vw'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hotel;