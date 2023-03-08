import React, { useEffect } from 'react';
import { useState } from 'react';
import { json } from 'react-router-dom';
const SixthStep = ({ id, setId, listingCompleteData, setListingCompleteData }) => {
  const [count, setCount] = useState(1);
  const [counttwo, setCounttwo] = useState(1);
  const [countthree, setCountthree] = useState(1);
  const [countforth, setCountforth] = useState(0);
  useEffect(()=>{
    console.log('hello ali');
    let data = listingCompleteData;
    data.no_of_guests = count;
    data.no_of_bedrooms = counttwo;
    data.no_of_bathrooms = countthree;
    data.no_of_bathrooms = countthree;
    data.no_of_beds = countforth;
    setListingCompleteData(data);
    localStorage.setItem('listing_data', JSON.stringify(data));
  },[count, countforth, countthree, counttwo])
  return (
    <>
      <div className='container'>
        <h3 className='verify-2nd-title mb-0 mt-5'>Some more details about your property. </h3>
        <h4 className='verify-2nd-title mb-0 mt-2'>Can you tell us that: </h4>
        <div className="counter-header d-flex justify-content-between">
          <span className="counter-header-text d-block ">Guest</span>

          <div className="counter-buttons">
            {(count > 1) && (<button className="counter-button" onClick={() => { setCount(count - 1); }}>-</button>)}
            <span className="counter-header-count">{count}</span>
            <button className="counter-button" onClick={() => { setCount(count + 1); setId(true) }}>+</button>

          </div>
        </div>
        <span className="counter-text">(18+ years)</span>
        <div className="counter-header d-flex justify-content-between mt-2">
          <span className="counter-header-text d-block">Bedrooms</span>

          <div className="counter-buttons">
            {(counttwo > 1) && (<button className="counter-button" onClick={() => setCounttwo(counttwo - 1)}>-</button>)}
            <span className="counter-header-count">{counttwo}</span>
            <button className="counter-button" onClick={() => { setCounttwo(counttwo + 1); setId(true) }}>+</button>
          </div>
        </div>
        <div className="counter-header d-flex justify-content-between mt-2">
          <span className="counter-header-text d-block">Bathroom</span>

          <div className="counter-buttons">
            {(countthree > 1) && (<button className="counter-button" onClick={() => setCountthree(countthree - 1)}>-</button>)}
            <span className="counter-header-count">{countthree}</span>
            <button className="counter-button" onClick={() => { setCountthree(countthree + 1); setId(true) }}>+</button>
          </div>
        </div>
        <div className="counter-header d-flex justify-content-between mt-2">
          <span className="counter-header-text d-block">Beds</span>

          <div className="counter-buttons">
            {(countforth > 0) && (<button className="counter-button" onClick={() => setCountforth(countforth - 1)}>-</button>)}
            <span className="counter-header-count">{countforth}</span>
            <button className="counter-button" onClick={() => { setCountforth(countforth + 1); setId(true) }}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SixthStep;