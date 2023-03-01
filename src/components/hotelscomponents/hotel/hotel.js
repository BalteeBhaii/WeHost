import React, { useState } from 'react';
// React Date Range import
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';

// date-fns format imports
import format from 'date-fns/format'
import { addDays } from 'date-fns'

const Hotel = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [checkinPlaceholder, setcheckinPlaceholder] = useState(`Check-In`)
  const [checkoutPlaceholder, setcheckoutPlaceholder] = useState(`Check-Out`)
  const [guestCount, setGuestCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const handleDateChange = (item) => {
    setRange([item.selection]);
    setcheckinPlaceholder(`${format(range[0].startDate, "MM/dd/yyyy")}`);
    setcheckoutPlaceholder(`${format(range[0].endDate, "MM/dd/yyyy")}`);
  }

  var previousDropdown = '';
  var currentDropdown = '';

  const dropdownsHandler = (event) => {
    var dropdowns = document.querySelectorAll(".search-dropdown");
    let index = event.target.dataset.index;
    console.log(index);

    // if(window.screen.width < 775){
    //   if(index == 0){
    //     index = 1;
    //   } else if(index == 1) {
    //     index = 2;
    //   }
    // }

    // if(window.screen.width >= 775){
    //   if(index == 1){
    //     index = 2;
    //   }
    // }

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
    console.log(currentDropdown)
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

  return (
    <div className='divBackgroundImage text-light z-0'>
      <div className='center'>
        <div className='container-xxl container-xl container-lg position-relative pt-5' >
          <h1 className='fw-bold text-center destination-main-title'>Choose the best hotels</h1>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-5  p-0 m-1'>
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
              <div className='col-12 col-lg-5 p-0 m-1'>
                <div className="input-group mb-3 border border border-secondary rounded destination-input border-color">
                  <span className="input-group-text border-0" id="basic-addon1">
                    <i className="bi bi-person-circle"></i>
                  </span>
                  {/* <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Guests" data-count={1} onClick={() => {setPreviousDropdown(currentDropdown); setCurrentDropdown(1); setDropdownStateToggle(Math.random())}}/> */}
                  <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Guests" data-index={2} onClick={dropdownsHandler}/>
                  <span className='guest-count'>{guestCount > 0 ? `(${guestCount})` : ''}</span>
                  <div className='search-dropdown'>
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
                      <div className='guest-dropdown-main d-flex justify-content-between align-items-center mx-3 mt-4 mb-1'>
                        <span className='destination-main-search-item mt-2'>Pets</span>
                        <div className='guest-dropdown-counter'>
                          <span className='guest-dropdown-counter-pets'>Yes</span>
                          <input className="form-check-input shadow-none guest-dropdown-counter-radio guest-dropdown-counter-radio-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <span className='guest-dropdown-counter-pets'>No</span>
                          <input className="form-check-input shadow-none guest-dropdown-counter-radio guest-dropdown-counter-radio-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                      </div>
                    </div>
                  </div>
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