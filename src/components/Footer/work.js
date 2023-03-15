import React from 'react';
import { Collapse } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const LetsWork = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);  
  const [icon1, setIcon1] = useState('bi bi-plus');
  const [icon2, setIcon2] = useState('bi bi-plus');
  const [icon3, setIcon3] = useState('bi bi-plus');
  
  useEffect(() => {
    if (open1) {
      setIcon1('bi bi-dash');
      setIcon2('bi bi-plus');
      setIcon3('bi bi-plus');
    } else if (open2) {
      setIcon1('bi bi-plus');
      setIcon2('bi bi-dash');
      setIcon3('bi bi-plus');
    } else if (open3) {
      setIcon1('bi bi-plus');
      setIcon2('bi bi-plus');
      setIcon3('bi bi-dash');
    } else {
      setIcon1('bi bi-plus');
      setIcon2('bi bi-plus');
      setIcon3('bi bi-plus');
    }
  }, [open1, open2, open3]);
  return (
    <div>
      <div className='divBackgroundImageWork text-light z-0'>
        <div className='center'>
          <div className='container-xxl container-xl container-lg position-relative pt-5' >
            <h1 className='fw-bold text-center work-Together-text'>we are a community that is dedicated to making short-term vacation travel a better experience for everyone.</h1>

          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 d-flex justify-content-center flex-column'>
            <h2 className='work-together-title'>Your Satisfaction Our Priority  </h2>
            <p className='mx-2'>Wehost vets every property in our network,and we ensure visitors that if something isn't up to our standards, we'll make it right. It is the simplest method to expand your business and establish a solid reputation.</p>
          </div>
          <div className='col-12 col-md-6'>
            <img className='work-together-img' src='/images/satisfication.png' alt="" />

          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img className='help-img' src='/images/help.png' alt="" />

          </div>
          <div className='col-12 col-md-6 d-flex justify-content-center flex-column'>
            <h2 className='work-together-title mt-2'>We are Here to  Help You  </h2>
            <p className='mx-2'>Consider weHost the front desk for your vacation rental
              company. We respond to enquiries, but we go above and
              above to assist  your guests at every point of their
              journey, at any time of day. The best aspect is that you
              can be certain that they are receiving courteous,
              competent assistance.</p>
          </div>

        </div>

        <div className='row mt-5'>
          <div className='col-12 col-md-6 d-flex justify-content-center flex-column'>
            <h2 className='work-together-title'>Your Residence Our friendliness. </h2>
            <p className='mx-2'>Consider weHost the front desk for your vacation rental
              company. Guest inquiries and bookings are managed by us
              you don’t need to worry about that we deal with all the
              pre-stays for u our main concern is you love the place where
              you gone stay.
            </p>
          </div>
          <div className='col-12 col-md-6'>
            <img className='work-together-img' src='/images/villa.png' alt="" />

          </div>
        </div>

      </div>
      <div className='container-fluid work-together-host-property'>
        <div className='text-center pt-4 pb-5'>
          <h2 className='work-together-host-property-title'>
            Host Your Property Now
          </h2>
          <p className='work-together-host-property-txt'>
            Now rent property and become a part of weHost we consider
            your property as our property.
          </p>
          <button type="button" class="btn btn-list-property">List Property Now</button>
        </div>
      </div>
      <div className='container mt-3'>
  <h2 className='frequent-question text-center'>Frequent Asked Questions</h2>
  <p className='text-center'>Here are the questions we are asked too much</p>
  <div>
    <div
      onClick={() => setOpen1(!open1)}
      aria-controls="example-collapse-text"
      aria-expanded={open1}
    >
      <h3 className='question-title'> <i className={icon1}></i> What is Wehost?</h3>
    </div>
    <Collapse in={open1}>
      <div id="example-collapse-text">
         We are a community that is dedicated to making short-term vacation travel a better experience for everyone.
      </div>
    </Collapse>
    <hr/>
  </div>
  <div>
    <div
      onClick={() => setOpen2(!open2)}
      aria-controls="example-collapse-text"
      aria-expanded={open2}
    >
      <h3 className='question-title'><i className={icon2}></i>  What are fees?</h3>
    </div>
    <Collapse in={open2}>
      <div id="example-collapse-text">
        Our Formula = More Money in Your Pocket and a Better Overall Experience for Everyone!
      </div>
    </Collapse>
    <hr/>
  </div>
  <div>
    <div
      onClick={() => setOpen3(!open3)}
      aria-controls="example-collapse-text"
      aria-expanded={open3}
    >
      <h3 className='question-title'><i className={icon3}></i> Will my property be listed?</h3>
    </div>
    <Collapse in={open3}>
      <div id="example-collapse-text">
        Yes if you fulfill all weHost requirements you will be able to host your property on weHost.
      </div>
    </Collapse>
    <hr/>
  </div>
</div>
    </div>

  );
}

export default LetsWork;