import React, { useState, useEffect } from 'react';
import GuestModal from '../../GuestModal/GuestModal';
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
    

    if(window.screen.width < 775){
      if(index == 0){
        index = 1;
      } else if(index == 1) {
        index = 2;
      }
    }

    if(window.screen.width >= 775){
      if(index == 1){
        index = 2;
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
    console.log('index',index);

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
  useEffect(() => {
    console.log(currentDropdown);
    setGuestCount(adultCount + childrenCount + infantCount);
  }, [adultCount, childrenCount, infantCount]);

  useEffect(() => {
    document.getElementsByClassName("center")[0].addEventListener("beforeunload", () => {
      console.log('aa');
    })
  }, [])

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
                  <input type="text" className="form-control border-0 shadow-none p-1 searchfeildtxt datapicker-input-field" placeholder={checkinPlaceholder} data-index={0} onClick={dropdownsHandler} />
                  <span className='destination-arrow-icon'></span>
                  <input type="text" className="form-control border-0 shadow-none ps-2 searchfeildtxt datapicker-input-field" placeholder={checkoutPlaceholder} data-index={0} onClick={dropdownsHandler} />
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
                    <a className='btn date-range-btn my-1' data-index={0} onClick={datePickerClose}>close</a>
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
                    <a className='btn date-range-btn my-1' data-index={0} onClick={datePickerClose}>close</a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-5 p-0 m-1'>
                <div className="input-group mb-3 border border border-secondary rounded destination-input border-color">
                  <span className="input-group-text border-0" id="basic-addon1">
                    <i className="bi bi-person-circle"></i>
                  </span>
                  {/* <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Guests" data-count={1} onClick={() => {setPreviousDropdown(currentDropdown); setCurrentDropdown(1); setDropdownStateToggle(Math.random())}}/> */}
                  <input type="text" className="form-control border-0 shadow-none searchfeildtxt" placeholder="Guests" data-index={1} onClick={dropdownsHandler}/>
                  <span className='guest-count'>{guestCount > 0 ? `(${guestCount})` : ''}</span>
                  <GuestModal 
                    adultCount={adultCount} 
                    setAdultCount={setAdultCount} 
                    childrenCount={childrenCount} 
                    setChildrenCount={setChildrenCount} 
                    infantCount={infantCount}
                    setInfantCount={setInfantCount}
                  />
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