import React from 'react';
import { Collapse } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const EasyPromise = () => {

  return (
    <div>
      <div className='divBackgroundImageRest text-light z-0'>
        <div className='center'>
          <div className='container-xxl container-xl container-lg position-relative pt-5' >
            <h1 className='fw-bold text-center work-Together-text'>Our Rest Easy Promise</h1>
            <h2 className='rest-easy-text'>We'll be there for you if your plans alter if the house isn't what we promised.</h2>

          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 d-flex justify-content-center flex-column'>
            <h2 className='work-together-title'>Plan Changed? No Problem  </h2>
            <p className='mx-2'>Because we believe that travel should be relaxing, we allow you to cancel without penalty within the first 48 hours of confirming your reservation. If you need to modify your plans, just let us know at least 48 hours before check-in, and we'll give you a two-year travel credit.</p>
          </div>
          <div className='col-12 col-md-6'>
            <img className='work-together-img' src='/images/planchanged.png' alt="" />

          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img className='w-100' src='/images/peace.png' alt="" />

          </div>
          <div className='col-12 col-md-6 d-flex justify-content-center flex-column'>
            <h2 className='work-together-title mt-2'>As Soon as You Book, You Can Relax </h2>
            <p className='mx-2'>When we put our name on a house, we personally inspect it to ensure that it is ready for visitors — and every owner we partner with has passed a background check. This means you'll arrive at a location that's clean, safe, convenient, and true to what you saw online.</p>
          </div>

        </div>
      </div>
     
     
    </div>

  );
}

export default EasyPromise;