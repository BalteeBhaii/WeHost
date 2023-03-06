import React, { useState } from 'react';
// import '../../globalcss/styles.css';
// import './style.css'

const GuestModal = ({ adultCount, setAdultCount, childrenCount, setChildrenCount, infantCount, setInfantCount }) => {
  // const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  const [counttwo, setCounttwo] = useState(0);
  const [countthree, setCountthree] = useState(0);

  return (
    <>
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
    </>
  );
};

export default GuestModal;
