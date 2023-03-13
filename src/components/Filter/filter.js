import React, { useState } from 'react';
import '../../globalcss/styles.css';
import { Form, FormCheck } from 'react-bootstrap';
import img1 from '../../Assets/img1.png'
import img2 from '../../Assets/img2.png'
import img3 from '../../Assets/img3.png'
import img4 from '../../Assets/img4.png'
// import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const FilterModal = ({ show, setShowModal }) => {
  // const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>

      {(show) && (
        <div className="modal-background searchmodal" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
          <div className="modal-card filtermodal">
            <header>
              <div className='d-flex justify-content-between align-items-center'>
                <p className="headerfilter">Refine Your Search</p>
                <button type="button" className="btn-close shadow-none mx-3" onClick={()=>setShowModal(!show)}></button>
              </div>
              <div className='refineline'>
              </div>

            </header>
            <section className="modal-body">
              <div className='spaceleft'>
                <a className='modaldes' href="#">
                  <i className="bi bi-geo-alt-fill geoimg "></i>
                  <span className="Filtertxt">Location</span>
                </a></div>
              <div className="spaceleft">
                <a className='modaldes' href="#">
                  <i className="bi bi-house-door-fill housedoorimg"></i>
                  <span className="Filtertxt">Type of Place</span>
                </a>
                <Form className='formfilter'>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Entire place"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Private Room"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Shared Room"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                    </div>
                  ))}
                </Form>

              </div>
              <div className="spaceleft">
                <a className='modaldes' href="#">
                  <i className="bi bi-cash-coin cashimg"></i>
                  <span className="Filtertxt">Price Range</span>
                </a></div>
              <div className="Ranger">
                <Form.Range />
                <div className="input-group mb-3">
                  <input type="number" className="form-control shadow-none" placeholder="$50" aria-label="Username" />
                  <span className="riceranger">to</span>
                  <input type="number" className="form-control shadow-none" placeholder="$500" aria-label="Server">
                  </input>
                </div>
              </div>

              <div className="spaceleft">

                <a className='modaldes' href="#">
                  <i className="bi bi-buildings buildingimg"></i>
                  <span className="Filtertxt">Property Type</span>
                </a>
                <ul className="list-group list-group-horizontal property-type-list mx-5">

                  <li className="list-group-item">
                    <button>
                      <i className="bi bi-house-door"></i>
                      <p className='mb-0'>Houses</p>
                    </button>

                  </li>
                  <li className="list-group-item">
                    <button><i className="bi bi-buildings-fill"></i>
                      <p className='mb-0'>Apartment</p></button>

                  </li>
                  <li className="list-group-item">
                    <button><i className="bi bi-building-fill"></i><p className='mb-0'>Hotel</p></button>

                  </li>
                  <li className="list-group-item">
                    <button>
                      <img className='list-btn-guesthouse' src={img1} />
                      <p className='mb-0'>Guest House</p>
                    </button>

                  </li>
                </ul>
              </div>
              <div className="spaceleft">
                <a className='modaldes' href="#">
                  <img className="convenience" src={img2} />
                  <span className="Filtertxt">Convenience</span>
                </a>
                <Form>
                  {['checkbox'].map((type) => (

                    <>
                      <div className="coveniencehead ">Essentails</div>
                      <div key={`inline-${type}`} className="row .spaceleft10">

                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Wifi"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Kitchen"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Washer"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Dryer"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Air Conditioning"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Heating"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Bathroom"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="TV"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Hair Dryer"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Iron"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>

                      </div>
                    </>

                  ))}
                </Form>
                <Form>
                  {['checkbox'].map((type) => (

                    <>
                      <div className="coveniencehead ">Features</div>
                      <div key={`inline-${type}`} className="row .spaceleft10 ">

                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Pool"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="HotTub"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Parking"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Ev charger"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="Gym"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                        <div className='col-6 mt-2'>
                          <Form.Check

                            inline
                            label="BBQ Grill"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>


                      </div>
                    </>

                  ))}
                </Form>
              </div>
              <div className="spaceleft">
                <a className='modaldes' href="#">
                  <img className="bed" src={img3} />
                  <span className="Filtertxt">Rooms and Beds</span>
                </a>
                <p className="Roomandbedstxt">Bedrooms</p>

                <ul className="d-flex gap-2 spaceleft">
                  <li className="Roomandbedtype">Any</li>
                  <li className="Roomandbedtype">1</li>
                  <li className="Roomandbedtype">2</li>
                  <li className="Roomandbedtype">3</li>
                  <li className="Roomandbedtype">4</li>
                  <li className="Roomandbedtype">5</li>
                  <li className="Roomandbedtype">6+</li>
                </ul>
                <p className="Roomandbedstxt">Beds</p>

                <ul className="d-flex gap-2 ml-3 spaceleft">
                  <li className="Roomandbedtype">Any</li>
                  <li className="Roomandbedtype">1</li>
                  <li className="Roomandbedtype">2</li>
                  <li className="Roomandbedtype">3</li>
                  <li className="Roomandbedtype">4</li>
                  <li className="Roomandbedtype">5</li>
                  <li className="Roomandbedtype">6+</li>
                </ul>
                <p className="Roomandbedstxt">Bathrooms</p>

                <ul className="d-flex gap-2 ml-3 spaceleft">
                  <li className="Roomandbedtype">Any</li>
                  <li className="Roomandbedtype">1</li>
                  <li className="Roomandbedtype">2</li>
                  <li className="Roomandbedtype">3</li>
                  <li className="Roomandbedtype">4</li>
                  <li className="Roomandbedtype">5</li>
                  <li className="Roomandbedtype">6+</li>
                </ul>


              </div>
              <div className="spaceleft">
                <a className='modaldes' href="#">
                  <img className="bed" src={img4} />
                  <span className="Filtertxt">Booking Options</span>
                </a>

                <div >
                  <div className="d-flex justify-content-between">
                    <p className="Roomandbedstxt mb-0">Instant Book</p>
                    {/* <BootstrapSwitchButton checked={true} onstyle="outline-secondary" offstyle="outline-success" className="switchbtn"  size="xs" /> */}
                  </div>
                  <p className="instantbooktxt">Book without waiting of approval get your booking now</p>

                </div>
                <div >
                  <div className="d-flex justify-content-between">
                    <p className="Roomandbedstxt mb-0">Self check-in</p>
                    {/* <BootstrapSwitchButton checked={true} onstyle="outline-secondary" offstyle="outline-success" className="switchbtn"  size="xs" /> */}
                  </div>
                  <p className="instantbooktxt">Once you arrive, the property is straightforward to access</p>

                </div>
                <div>


                </div>
              </div>

            </section>
            <footer className="modal-footer justify-content-between">
              <div><a className='clearallbtn modaldes'>Clear All</a></div>
              <button className="modal-footer-button" onClick={() => setShowModal(false)}>
                Apply
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterModal;
