import React, { useState, useEffect, useRef, useMemo } from 'react';
import LocationModal from '../../LocationModal/LocationModal';
import GuestModal from '../../GuestModal/GuestModal';
import { Link } from "react-router-dom";
// date-fns format imports
import format from 'date-fns/format'
import { addDays } from 'date-fns'

// React Date Range import
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { event } from 'jquery';

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
  const [previousDropdown, setPreviousDropdown] = useState('');
  const [currentDropdown, setCurrentDropdown] = useState('');

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
    if (e.key === "Escape") {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true)
  }, [])

  useEffect(() => {
        let dropdowns = document.querySelectorAll(".search-dropdown");
        console.log(currentDropdown);
        if(currentDropdown !== '' && typeof(currentDropdown) !== "undefined"){
          dropdowns[currentDropdown].classList.add('dropdown-active');
          if(dropdowns[currentDropdown].classList.contains('dropdown-inactive')){
            dropdowns[currentDropdown].classList.remove('dropdown-inactive');
          }
        }
        if(previousDropdown !== '' && typeof(previousDropdown) !== "undefined" && dropdowns[previousDropdown].classList.contains("dropdown-active")){
          dropdowns[previousDropdown].classList.add('dropdown-inactive');
          dropdowns[previousDropdown].classList.remove('dropdown-active');
        }
  }, [currentDropdown]);

  
  return (
    <>
      <div className='bg-overlay text-light z-0' onClick={(event) => {
        if(!event.target.closest(".search-dropdown") && currentDropdown !== ''){
          setPreviousDropdown(currentDropdown);

          if(event.target.closest(".form-control")){
            let element = event.target.closest(".form-control");
            setCurrentDropdown(element.dataset.count);
          } else {
            setCurrentDropdown('');
          }
        }

        if(!event.target.closest(".datapicker-input-field") && !event.target.closest(".datepicker-display") && open === true){
          setOpen(false)
        }
      }}>
        <div className='center'>
          <div className='container-xxl container-xl container-lg container-md position-relative' >
            <h1 className='fw-bold text destination-main-title' >
              Welcome to weHost "the better BnB"<br/>
            </h1>
            <h3 className="formulatxt">We are dedicated to making short-term vacation travel a better experience for everyone.</h3>
            <div className="container mt-3">
              <div className='row pt-3 rounded-1' style={{ background: '#ffffffde' }}>
                <div className='col-xl-3 col-lg-6 col-md-6'>
                  <div className="input-group mb-3 border border border-secondary rounded destination-input border-color">
                    <span className="input-group-text border-0" id="basic-addon1">
                      <i class="bi bi-geo-alt-fill"></i>
                    </span>
                    <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Where to?" data-count={0} onClick={() => {setPreviousDropdown(currentDropdown); setCurrentDropdown(0)}}></input>
                    {/* <LocationModal show={showModal} setShowModal={setShowModal} /> */}
                    <div className='search-dropdown'>
                      <div className='search-dropdown-main py-2'>
                        <div className='destination-searchbar-holder mx-3'>
                          <input type="text" className='destination-searchbar' placeholder='Search...' />
                          <i class="bi bi-search destination-searchbar-icon"></i>
                        </div>
                        <hr className='my-1' />
                        <div className='mx-3 d-flex flex-column mt-3 mb-2'>
                          <Link className='destination-main-search-item mt-2'><i class="bi bi-send-fill destination-main-search-item-icon"></i>Nearby Locations</Link>
                          <Link className='destination-main-search-item mt-2'><i class="bi-star-fill destination-main-search-item-icon"></i>Most Visited</Link>
                          <span className='destination-main-search-item-title mt-3'>Popular Destinations</span>
                          <Link className='destination-main-search-item mt-2'><i class="bi-geo-alt-fill destination-main-search-item-icon"></i>Hawai</Link>
                          <Link className='destination-main-search-item mt-2'><i class="bi-geo-alt-fill destination-main-search-item-icon"></i>Paris</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6'>
                  <div className="input-group mb-3 border border border-secondary rounded destination-input border-color ">
                    <span className="input-group-text border-0" id="basic-addon1">
                      <i class="bi bi-calendar-date"></i>
                    </span>
                    <input type="text" class="form-control border-0 shadow-none p-1 searchfeildtxt datapicker-input-field" placeholder={checkinPlaceholder} readOnly onClick={() => setOpen(open => !open)} />
                    <span className='destination-arrow-icon'></span>
                    <input type="text" class="form-control border-0 shadow-none ps-2 searchfeildtxt datapicker-input-field" placeholder={checkoutPlaceholder} readOnly onClick={() => setOpen(open => !open)} />
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
                <div className='col-xl-3 col-lg-6 col-md-6'>
                  <div class="input-group mb-3 border border border-secondary rounded destination-input border-color">
                    <span class="input-group-text border-0" id="basic-addon1">
                      <i class="bi bi-person-circle"></i>
                    </span>
                    <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Guests" data-count={1} onClick={() => {setPreviousDropdown(currentDropdown); setCurrentDropdown(1)}}/>
                    <div className='search-dropdown'>
                      <div className='search-dropdown-main pt-2 pb-3'>
                        <div className='guest-dropdown-main d-flex justify-content-between align-items-center mx-3 mt-2'>
                          <span className='destination-main-search-item mt-2'>Adults</span>
                          <div className='guest-dropdown-counter'>
                            <i class="bi bi-dash-circle guest-dropdown-counter-minus"></i>
                            <span className='guest-dropdown-counter-text'>0</span>
                            <i class="bi bi-plus-circle guest-dropdown-counter-plus"></i>
                          </div>
                        </div>
                        <div className='guest-dropdown-main d-flex justify-content-between align-items-center mx-3 mt-3'>
                          <span className='destination-main-search-item mt-2'>Children</span>
                          <div className='guest-dropdown-counter'>
                            <i class="bi bi-dash-circle guest-dropdown-counter-minus"></i>
                            <span className='guest-dropdown-counter-text'>0</span>
                            <i class="bi bi-plus-circle guest-dropdown-counter-plus"></i>
                          </div>
                        </div>
                        <div className='guest-dropdown-main d-flex justify-content-between align-items-center mx-3 mt-3'>
                          <span className='destination-main-search-item mt-2'>Infants</span>
                          <div className='guest-dropdown-counter'>
                            <i class="bi bi-dash-circle guest-dropdown-counter-minus"></i>
                            <span className='guest-dropdown-counter-text'>0</span>
                            <i class="bi bi-plus-circle guest-dropdown-counter-plus"></i>
                          </div>
                        </div>
                        <div className='guest-dropdown-main d-flex justify-content-between align-items-center mx-3 mt-3'>
                          <span className='destination-main-search-item mt-2'>Infants</span>
                          <div className='guest-dropdown-counter'>
                            <span className='guest-dropdown-counter-pets'>Yes</span>
                            <input class="form-check-input shadow-none guest-dropdown-counter-radio guest-dropdown-counter-radio-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <span className='guest-dropdown-counter-pets'>No</span>
                            <input class="form-check-input shadow-none guest-dropdown-counter-radio guest-dropdown-counter-radio-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6'>
                  <div class="destination-input mb-3">
                    <a type="text" className="btn text-white w-100 fw-semibold" style={{ backgroundColor: '#0579C1' }}>
                      <i class="bi bi-search bi-searchIcon me-1"></i>
                      Search
                    </a>
                  </div>
                </div>

              </div>
              {/* <div className="mt-3"> <h3 className='fw-bold text destination-main-title text-center'><span >
                Our Formula = More Money in Your Pocket and a Better Overall Experience for Everyone!
              </span></h3></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className='bottom-buttons container-xl'>
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