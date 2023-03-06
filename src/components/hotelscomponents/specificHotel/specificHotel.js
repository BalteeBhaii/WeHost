import React, {useState, useEffect} from 'react';
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format'
import { addDays } from 'date-fns';
import GuestModal from '../../GuestModal/GuestModal';
const SpecificHotel = () => {
  const [checkinPlaceholder, setcheckinPlaceholder] = useState(`Check-In`);
  const [checkoutPlaceholder, setcheckoutPlaceholder] = useState(`Check-Out`);
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
  useEffect(() => {
    console.log(currentDropdown);
    setGuestCount(adultCount + childrenCount + infantCount);
  }, [adultCount, childrenCount, infantCount]);
  return (
    <>
      <div className='container specific-hotel-container'>
        <div className='w-100 d-flex flex-wrap justify-content-between'>
          <div >
            <h2>Hotel of Lima City</h2>
            <div className='d-flex'>
              <p className='me-3'>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-half text-warning"></i>
              </p>
              <p className='me-2'>
                345 reviews
              </p>
              <p>
                #2 of 6
              </p>
            </div>
          </div>
          <div className='d-flex' >
            <p className='mb-1 me-3'><i className="bi bi-share me-1"></i>share</p>
            <p><i className="bi bi-heart me-1"></i>Save</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-8'>
            <div>
              <div className='mainImagesize mb-1'>
                <img className='img-fluid' src='/images/hotelmainImage.svg' width={'100%'} alt='hotelImages' />
              </div>
              <div className='d-flex multipleImages'>
                <img className='img-fluid' src='/images/image1.svg' alt='hotelImages' />
                <img className='img-fluid' src='/images/image2.svg' alt='hotelImages' />
                <img className='img-fluid' src='/images/image3.svg' alt='hotelImages' />
              </div>
            </div>
            <div className='text-justify'>
              <h2>About</h2>
              <p className='mb-1 text-justify'>
                Set in a bustling area near shops and restaurants,
                this  laid-back hostel is 2 km from both Makaha Beach
                and  the Museo de Arte Contemporáneo, and 4 km from  Ayacucho subway station.
              </p>
              <p><ins>Show more</ins></p>
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <div className="card card-border-radius">
              <div className="card-body">
                <div className='d-flex justify-content-between'>
                  <h5 className="card-title">$157/Night</h5>
                  <h5 className="card-title">34 reviews</h5>
                </div>
                <div className='input-group-design'>
                  <div className=''>
                    <div className="input-group mb-3 border border border-secondary rounded destination-input border-color ">
                      <span className="input-group-text border-0" id="basic-addon1">
                        <i className="bi bi-calendar-date"></i>
                      </span>
                      <input type="text" className="form-control border-0 shadow-none p-1 searchfeildtxt datapicker-input-field" placeholder={checkinPlaceholder} data-index={0} onClick={dropdownsHandler} />
                      <span className='destination-arrow-icon'></span>
                      <input type="text" className="form-control border-0 shadow-none ps-2 searchfeildtxt datapicker-input-field" placeholder={checkoutPlaceholder} data-index={0} onClick={dropdownsHandler} />
                    </div>
                  </div>
                  <div className='datepicker-display'>
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
                </div>
                </div>
                <div className='my-3'>
                  <button className='btn btn-primary btn-sm w-100 p-0'>Reserve</button>
                </div>
                <div className='d-flex justify-content-between '>
                  <p className='m-0'>$160 x 7 night</p>
                  <p className='m-0'>$1,142</p>
                </div>
                <div className='d-flex justify-content-between '>
                  <p className='m-0'>Weekly Discount</p>
                  <p className='m-0'>-$80</p>
                </div>
                <div className='d-flex justify-content-between '>
                  <p className='m-0'>Cleaning Fee</p>
                  <p className='m-0'>$49</p>
                </div>
                <div className='d-flex justify-content-between '>
                  <p className='m-0'>Service Fee</p>
                  <p className='m-0'>$20</p>
                </div>
                <hr></hr>
                <div className='d-flex justify-content-between '>
                  <p className='m-0'>Total Fee</p>
                  <p className='m-0'>$1,278</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>Want To See What This Hotel Offers?</h2>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p><i className="bi bi-wifi me-1"></i>Wifi</p>
            </div>
            <div className='col-12 col-md-6'>
              <p><i className="bi bi-snow me-1"></i>Air-Conditioner</p>
            </div>
            <div className='col-12 col-md-6'>
              <p><i className="bi bi-p-circle me-1"></i>Parking</p>
            </div>
            <div className='col-12 col-md-6'>
              <p><i className="bi bi-water me-1"></i>Pool</p>
            </div>
            <div className='col-12 col-md-6'>
              <p><i className="bi bi-tv me-1"></i>Lcd</p>
            </div>
            <div className='col-12 col-md-6'>
              <p><i className="bi bi-playstation me-1"></i>gaming</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-8'>
            <h2>Where you'll be</h2>
            <p>Calle Alcanfores 465, Mira 15074, Peru</p>
            <div className='googlemapImage'>
              <img src='/images/googlemap.svg' className='img-fluid' width={'100%'} alt='hotelImages' />
            </div>
            <div className='my-4'>
              <h2>Reviews</h2>
              <p>1 review</p>
              <div className='d-flex '>
                <div className='rounded-circle me-3'>
                  <img src='/images/profile.svg' className='img-fluid' alt='hotelImages' />
                </div>
                <div>
                  <h5 className='m-0'>Ramos</h5>
                  <p>02 May, 2022</p>
                </div>
              </div>
              <div className='paragraphWidth'>
                <p>
                  While I have camped on the property several times, this
                  was my first stay in the Grist Mill Cabin. My son and
                  I both love the property and the space. When waking
                  up from our first night
                </p>
              </div>
            </div>
            <hr/>
            <div className='d-flex align-items-center mb-3'>
              <div className='rounded-circle me-3'>
                <img src='/images/bacham.png' className='img-fluid' alt='hotelImages' />
              </div>
              <div>
                <h5 className='m-0'>Hosted by Beckham</h5>
                <p className='text-secondary'>joined weHost on Feb 14, 2023</p>
              </div>
            </div>
            <div className='paragraphWidth d-flex justify-content-between mb-3'>
              <p><i className="bi bi-star-fill me-2"></i>104 reviews</p>
              <p><i className="bi bi-patch-check-fill me-2"></i>Verified host</p>
              <p><i className="bi bi-shield-check me-2"></i>Super host</p>
            </div>
            <h5>Co-host</h5>
            <div className='d-flex align-items-center my-3'>
              <div className='rounded-circle me-3'>
                <img src='/images/kathriene.png' className='img-fluid' alt='hotelImages' />
              </div>
              <div>
                <h5 className='m-0'>Katheryn</h5>
              </div>
            </div>
            <div className='paragraphWidth'>
              <h5>Beckham and Katheryn are hosts</h5>
              <p className='mb-1'>They are superhost and they have listed property in quite fare prices. Want to grab this property now?</p>
              <p className='mb-1'>Response rate = 100%</p>
              <p className='mb-2'>Response Time = Reply within hour</p>
              <button className='btn text-white' style={{background: '#0579C1'}}>Contact Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecificHotel;