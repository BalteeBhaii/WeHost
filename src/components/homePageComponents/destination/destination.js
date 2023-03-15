import React, { useState, useEffect, useRef, useMemo } from 'react';
import LocationModal from '../../LocationModal/LocationModal';
import GuestModal from '../../GuestModal/GuestModal';
import FilterModal from '../../Filter/filter';
import { Link } from "react-router-dom";
// date-fns format imports
import format from 'date-fns/format';
import { addDays } from 'date-fns';
// React Date Range import
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { event } from 'jquery';
import bgimage1 from './bgimage1.svg';
import More from '../../MoreOption/More';

const Destination = ({loadedHandler}) => {
  const [showModal, setShowModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
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
  const [guestCount, setGuestCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

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

  var previousDropdown = '';
  var currentDropdown = '';

  const dropdownsHandler = (event) => {
    var dropdowns = document.querySelectorAll(".search-dropdown");
    let index = event.target.dataset.index;
    console.log(index);

    if (window.screen.width < 775) {
      if (index == 1) {
        index = 2;
      } else if (index == 2) {
        index = 3;
      }
    }

    if (window.screen.width >= 775) {
      if (index == 2) {
        index = 3;
      }
    }

    if (previousDropdown === '') {
      for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains("dropdown-active")) {
          dropdowns[i].classList.add("dropdown-inactive")
          dropdowns[i].classList.remove("dropdown-active")
        }
      }
    }

    if (index !== '1') {
      if (dropdowns['1'].classList.contains("dropdown-active")) {
        dropdowns['1'].classList.add("dropdown-inactive")
        dropdowns['1'].classList.remove("dropdown-active")
      }
    }

    previousDropdown = currentDropdown;
    currentDropdown = index;

    if (typeof (dropdowns[previousDropdown]) !== "undefined") {
      dropdowns[previousDropdown].classList.add("dropdown-inactive");
      dropdowns[previousDropdown].classList.remove("dropdown-active");
    }

    dropdowns[currentDropdown].classList.add("dropdown-active");
    if (dropdowns[currentDropdown].classList.contains("dropdown-inactive")) {
      dropdowns[currentDropdown].classList.remove("dropdown-inactive");
    }

    if (currentDropdown === previousDropdown && dropdowns[previousDropdown].classList.contains("dropdown-active")) {
      dropdowns[previousDropdown].classList.remove("dropdown-active");
      dropdowns[previousDropdown].classList.add("dropdown-inactive");
      previousDropdown = currentDropdown;
      currentDropdown = '';
    }
  };

  const datePickerClose = (event) => {
    var dropdowns = document.querySelectorAll(".search-dropdown");
    let index = event.target.dataset.index;

    dropdowns[index].classList.add('dropdown-inactive');
    dropdowns[index].classList.remove('dropdown-active');

    previousDropdown = currentDropdown;
    currentDropdown = '';
  }

  const searchOutlineHandler = (event) => {
    let element = document.getElementsByClassName("search-bottom-outline")[0];

    if (element.classList.contains("search-bottom-outline-active")) {
      element.classList.remove("search-bottom-outline-active")
    } else {
      element.classList.add("search-bottom-outline-active")
    }
  }

  useEffect(() => {
    document.addEventListener("click", (event) => {

      if (window.location.href !== "http://localhost:3000/" && window.location.href !== "dev.wehosttravel.com/") {
        return;
      }

      if (!event.target.closest('.destination-searchbar')) {
        let element = document.getElementsByClassName("search-bottom-outline")[0];

        if (element.classList.contains("search-bottom-outline-active")) {
          element.classList.remove("search-bottom-outline-active")
        }
      }

      if (!event.target.closest(".search-dropdown") && !event.target.closest(".form-control")) {
        var dropdowns = document.querySelectorAll(".search-dropdown");

        console.log(previousDropdown);
        if (previousDropdown === '') {
          for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains("dropdown-active")) {
              dropdowns[i].classList.add("dropdown-inactive")
              dropdowns[i].classList.remove("dropdown-active")
            }
          }
        }

        if (previousDropdown !== '') {
          dropdowns[previousDropdown].classList.add("dropdown-inactive");
          dropdowns[previousDropdown].classList.remove("dropdown-active");

          previousDropdown = '';
          currentDropdown = '';
        }

        if (currentDropdown !== '') {
          dropdowns[currentDropdown].classList.add("dropdown-inactive");
          dropdowns[currentDropdown].classList.remove("dropdown-active");

          previousDropdown = currentDropdown;
          currentDropdown = '';
        }
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (event.target.closest(".destination-main-search-item")) {
        event.preventDefault();
      }
    });
  }, []);

  useEffect(() => {
    console.log(currentDropdown);
    setGuestCount(adultCount + childrenCount + infantCount);
  }, [adultCount, childrenCount, infantCount]);

  return (
    <>
      <div className='h-fit-content not-loaded'>
        <div className='bg-overlay text-light z-0'>
          <div className='center'>
            <img className='destination-main-bg' src={bgimage1} alt="" onLoad={loadedHandler} />
            <div className='container-xxl container-xl container-lg container-md position-relative' >
              <h1 className='fw-bold text destination-main-title' >
                Welcome to weHost "the better BnB"<br />
              </h1>
              <h3 className="formulatxt">We are dedicated to making short-term vacation travel a better experience for everyone.</h3>
              <div className="container mt-3">
                <div className='row pt-3 rounded-1' style={{ background: '#ffffffde' }}>
                  <div className='col-xl-3 col-lg-6 col-md-6'>
                    <div className="input-group mb-3 border border border-secondary rounded destination-input border-color">
                      <span className="input-group-text border-0" id="basic-addon1">
                        <i className="bi bi-geo-alt-fill"></i>
                      </span>
                      {/* <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Where to?" data-count={0} onClick={() => {setPreviousDropdown(currentDropdown); setCurrentDropdown(0); setDropdownStateToggle(Math.random())}}></input> */}
                      <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Where to?" data-index={0} onClick={dropdownsHandler} readOnly></input>
                      {/* <LocationModal show={showModal} setShowModal={setShowModal} /> */}
                      <div className='search-dropdown'>
                        <div className='search-dropdown-main py-2'>
                          <div className='destination-searchbar-holder mx-3'>
                            <input type="text" className='destination-searchbar' placeholder='Search...' onClick={searchOutlineHandler} />
                            <i className="bi bi-search destination-searchbar-icon"></i>
                            <span className='search-bottom-outline'></span>
                          </div>
                          <div className='mx-3 d-flex flex-column mt-3 mb-2'>
                            <Link className='destination-main-search-item mt-2'><i className="bi bi-send-fill destination-main-search-item-icon"></i>Nearby Locations</Link>
                            <Link className='destination-main-search-item mt-2'><i className="bi-star-fill destination-main-search-item-icon"></i>Most Visited</Link>
                            <span className='destination-main-search-item-title mt-3'>Popular Destinations</span>
                            <Link className='destination-main-search-item mt-2'><i className="bi-geo-alt-fill destination-main-search-item-icon"></i>Hawai</Link>
                            <Link className='destination-main-search-item mt-2'><i className="bi-geo-alt-fill destination-main-search-item-icon"></i>Paris</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-6 col-md-6'>
                    <div className="input-group mb-3 border border border-secondary rounded destination-input border-color ">
                      <span className="input-group-text border-0" id="basic-addon1">
                        <i className="bi bi-calendar-date"></i>
                      </span>
                      <input type="text" className="form-control border-0 shadow-none p-1 searchfeildtxt datapicker-input-field" placeholder={checkinPlaceholder} data-index={1} onClick={dropdownsHandler} />
                      <span className='destination-arrow-icon'></span>
                      <input type="text" className="form-control border-0 shadow-none ps-2 searchfeildtxt datapicker-input-field" placeholder={checkoutPlaceholder} data-index={1} onClick={dropdownsHandler} />
                    </div>
                    <div className='datepicker-display'>
                      <div className='position-absolute d-flex flex-column date-range-picker search-dropdown'>
                        <DateRangePicker
                          onChange={item => handleDateChange(item)}
                          editableDateInputs={true}
                          moveRangeOnFirstSelection={false}
                          months={2}
                          direction="horizontal"
                          ranges={range}
                        />
                        <a className='btn date-range-btn my-1' data-index={1} onClick={datePickerClose}>close</a>
                      </div>
                    </div>
                    <div className='daterange-display'>
                      <div className='position-absolute d-flex flex-column date-range-picker search-dropdown'>
                        <DateRange
                          onChange={item => handleDateChange(item)}
                          editableDateInputs={true}
                          moveRangeOnFirstSelection={false}
                          ranges={range}
                        />
                        <a className='btn date-range-btn my-1' data-index={1} onClick={datePickerClose}>close</a>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-6 col-md-6'>
                    <div className="input-group mb-3 border border border-secondary rounded destination-input border-color">
                      <span className="input-group-text border-0" id="basic-addon1">
                        <i className="bi bi-person-circle"></i>
                      </span>
                      {/* <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Guests" data-count={1} onClick={() => {setPreviousDropdown(currentDropdown); setCurrentDropdown(1); setDropdownStateToggle(Math.random())}}/> */}
                      <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Guests" data-index={2} onClick={dropdownsHandler} readOnly />
                      <span className='guest-count'>{guestCount > 0 ? `(${guestCount})` : ''}</span>
                      <GuestModal
                        adultCount={adultCount}
                        setAdultCount={setAdultCount}
                        childrenCount={childrenCount}
                        setChildrenCount={setChildrenCount}
                        infantCount={infantCount}
                        setInfantCount={setInfantCount}
                      />
                      {/* <div className='search-dropdown'>
                      <div className='search-dropdown-main pt-2 pb-3'>
                        <div className='guest-dropdown-main d-flex justify-content-between align-items-center mx-3 mt-2'>
                          <span className='destination-main-search-item mt-2'>Adults</span>
                          <div className='guest-dropdown-counter'>
                            <i className="bi bi-dash-circle guest-dropdown-counter-minus" onClick={() => {
                              if (adultCount > 0) {
                                setAdultCount(adultCount - 1);
                              }
                            }}></i>
                            <span className='guest-dropdown-counter-text'>{adultCount}</span>
                            <i className="bi bi-plus-circle guest-dropdown-counter-plus" onClick={(event) => { event.preventDefault(); setAdultCount(adultCount + 1); }}></i>
                          </div>
                        </div>
                        <div className='guest-dropdown-main d-flex justify-content-between align-items-center mx-3 mt-4'>
                          <span className='destination-main-search-item mt-2'>Children</span>
                          <div className='guest-dropdown-counter'>
                            <i className="bi bi-dash-circle guest-dropdown-counter-minus" onClick={() => {
                              if (childrenCount > 0) {
                                setChildrenCount(childrenCount - 1);
                              }
                            }}></i>
                            <span className='guest-dropdown-counter-text'>{childrenCount}</span>
                            <i className="bi bi-plus-circle guest-dropdown-counter-plus" onClick={() => { setChildrenCount(childrenCount + 1); }}></i>
                          </div>
                        </div>
                        <div className='guest-dropdown-main d-flex justify-content-between align-items-center mx-3 mt-4'>
                          <span className='destination-main-search-item mt-2'>Infants</span>
                          <div className='guest-dropdown-counter'>
                            <i className="bi bi-dash-circle guest-dropdown-counter-minus" onClick={() => {
                              if (infantCount > 0) {
                                setInfantCount(infantCount - 1);
                              }
                            }}></i>
                            <span className='guest-dropdown-counter-text'>{infantCount}</span>
                            <i className="bi bi-plus-circle guest-dropdown-counter-plus" onClick={() => { setInfantCount(infantCount + 1); }}></i>
                          </div>
                        </div>                         
                      </div>
                    </div> */}
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-6 col-md-6'>
                    <div className="destination-input mb-3">
                      <a type="text" className="btn text-white w-100 fw-semibold" style={{ backgroundColor: '#0579C1' }}>
                        <i className="bi bi-search bi-searchIcon me-1"></i>
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
                      <Link to='/host'>
                        <button className='btn btn-primary bottom-button bi' id='things'>Things to Do</button>
                      </Link>
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
                      <Link to='/More'>
                      <button className='btn btn-primary bottom-button bi px-5' id='more'>More</button>
                      
                      </Link>
                    </div>
                  </th>
                  <th className="border-0">
                    <div className='button-column'>
                      <button className='btn btn-primary bottom-button bi px-5' id='filter' onClick={() => { setFilterModal(!filterModal) }}>Filter</button>
                    </div>
                    <FilterModal show={filterModal} setShowModal={setFilterModal} />
                  </th>
                </tr>
              </thead>
            </table>
          </div>

        </div>

      </div>

    </>
  );
}

export default Destination;