import React, { useState, useEffect, useRef } from 'react';
import LocationModal from '../../LocationModal/LocationModal';
import GuestModal from '../../GuestModal/GuestModal';
import { Link } from "react-router-dom";
// date-fns format imports
import format from 'date-fns/format'
import { addDays } from 'date-fns'

// React Date Range import
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';

const Destination = () => {
  const [showModal, setShowModal] = useState(false);
  const [guestModal, setguestModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [checkinPlaceholder, setcheckinPlaceholder] = useState(`Check-In`)
  const [checkoutPlaceholder, setcheckoutPlaceholder] = useState(`Check-Out`)
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  const refOne = useRef(null);

  const abc = () => {
    setShowModal(!showModal)
  }

  const handleDateChange = (item) => {
    setRange([item.selection]);
    setcheckinPlaceholder(`${format(range[0].startDate, "MM/dd/yyyy")}`);
    setcheckoutPlaceholder(`${format(range[0].endDate, "MM/dd/yyyy")}`);
  }

  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false)
    }
  }

  // Hide dropdown on outside click
  // const hideOnClickOutside = (e) => {
  //   // console.log(refOne.current)
  //   // console.log(e.target)
  //   if( refOne.current && !refOne.current.contains(e.target) ) {
  //     setOpen(false)
  //   }
  // }

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    // document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  return (
    <>
      <div className='bg-overlay text-light z-0'>
        <div className='center'>
          <div className='container-xxl container-xl container-lg position-relative' >
            <h1 className='fw-bold text destination-main-title text-center'><span >Welcome to <span style={{color:'#CBF2FC'}}>we<span style={{color:'#7B61FF'}}>H</span>ost</span> "the better BnB" - we are a community that is dedicated to making short-term vacation travel a better experience for everyone.<br/>
            </span></h1>

            <h3 className="text-center formulatxt">We are advocates for Lower Fees - Greater Exposure for Your Rental Property - And White Glove Customer Service.</h3>
            <div className="container mt-3">
              <div className='row pt-3 rounded-3' style={{ background: '#ffffffde' }}>
                <div className='col-xl-3 col-lg-6 col-md-6'>
                  <div className="input-group mb-3 border border border-secondary rounded destination-input border-color">
                    <span className="input-group-text border-0" id="basic-addon1">
                      <i class="bi bi-geo-alt-fill"></i>
                    </span>
                    <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Where to?" onClick={(ev) => setShowModal(!showModal)}></input>
                    <LocationModal show={showModal} setShowModal={setShowModal} />
                  </div>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6'>
                  <div className="input-group mb-3 border border border-secondary rounded destination-input border-color ">
                    <span className="input-group-text border-0" id="basic-addon1">
                      <i class="bi bi-calendar-date"></i>
                    </span>
                    <input type="text" class="form-control border-0 shadow-none p-1 searchfeildtxt" placeholder={checkinPlaceholder} readOnly onClick={() => setOpen(open => !open)} />
                    <i class="bi bi-chevron-compact-right bg-white text-black fs-3 position-relative"></i>
                    <input type="text" class="form-control border-0 shadow-none ps-2 searchfeildtxt" placeholder={checkoutPlaceholder} readOnly onClick={() => setOpen(open => !open)} />
                  </div>
                  <div className='datepicker-display'>
                    {open &&
                      <div className='position-absolute d-flex flex-column date-range-picker'>
                        <DateRangePicker
                          onChange={item => handleDateChange(item)}
                          editableDateInputs={true}
                          moveRangeOnFirstSelection={false}
                          months={2}
                          direction="horizontal"
                          ranges={range}
                        />
                        <a className='btn date-range-btn my-1' onClick={() => setOpen(open => !open)}>close</a>
                      </div>
                    }
                  </div>
                  <div className='daterange-display'>
                    {open &&
                      <div className='position-absolute d-flex flex-column date-range-picker'>
                        <DateRange
                          onChange={item => handleDateChange(item)}
                          editableDateInputs={true}
                          moveRangeOnFirstSelection={false}
                          ranges={range}
                        />
                        <a className='btn date-range-btn my-1' onClick={() => setOpen(open => !open)}>close</a>
                      </div>
                    }
                  </div>
                </div>

                {/* <div className='col-lg-3 col-md-6'>
                  <div class="input-group mb-3 destination-input">
                    <span class="input-group-text border-0" id="basic-addon1">
                      <i class="bi bi-calendar-check"></i>
                    </span>
                    <input type="text" className="form-control border-0 shadow-none" placeholder="Check-Out" />
                  </div>
                </div> */}
                <div className='col-xl-3 col-lg-6 col-md-6'>
                  <div class="input-group mb-3 border border border-secondary rounded destination-input border-color">
                    <span class="input-group-text border-0" id="basic-addon1">
                      <i class="bi bi-person-circle"></i>
                    </span>
                    <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Guests" onClick={(ev) => setguestModal(!guestModal)} />
                    <GuestModal show={guestModal} setShowModal={setguestModal} />
                  </div>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6'>
                  <div class="destination-input mb-3">
                    {/* <span class="input-group-text border-0 bg-white" id="basic-addon1">
                      <i class="bi bi-search bi-searchIcon"></i>
                    </span> */}
                    <a type="text" className="btn text-white w-100 fw-semibold" style={{ backgroundColor: '#0579C1' }}>
                      <i class="bi bi-search bi-searchIcon me-1"></i>
                      Search
                    </a>
                  </div>
                </div>

              </div>
              <div className="mt-3"> <h3 className='fw-bold text destination-main-title text-center'><span >
                Our Formula = More Money in Your Pocket and a Better Overall Experience for Everyone!
              </span></h3></div>
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
        <div className="table-responsive-xl">
          <table className="table caption-top buttons-table">
            <thead>
              <tr className='border-0'>
                <th className="border-0">
                  <div className='button-column'>
                    <Link to='/hotel'>
                      <button className='btn btn-primary bottom-button bi' id='hotels'>Hotels</button>
                    </Link>
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
                <th className="border-0">
                  <div className='button-column'>
                    <button className='btn btn-primary bottom-button bi px-5' id='more'>Filter</button>
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