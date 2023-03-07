import React from 'react';
import process from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const SeventhStep = ({ id, setId }) => {
    const [features, setFeatures] = useState([]);

    const setCategory = (event) => {
        const parentEl = event.nativeEvent.target.closest('.feature-box');
        if (!parentEl) return;

        const categoryEls = document.querySelectorAll('.feature-box');
        // categoryEls.forEach((el) => el.classList.remove('active-category'));
        parentEl.classList.toggle('active-category');
        setId(true);
    }

    const url = 'http://localhost:8000';

    const fetch_features = async () => {
        var config = {
            headers: {
                Accept: 'application/json'
            }
        }

        let request = axios.get(`${url}/api/features`, { config });
        await request.then((response) => {
            if (response.data.success) {
                console.log(response.data);
                setFeatures(response.data.data);
            }
        });
        await request.catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetch_features();
    }, []);

    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>Can you provide us what amenities your place offers? </h3>
                <div className='verify-2nd-list-items row mt-4'>
                    <div className='verify-2nd-list-items-1st-column col-md-7 col-sm-12 row'>
                        {/* Features */}

                        {features.map((item, index) => {
                            return (
                                <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder' key={index}>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                            {/*<i className="verify-2nd-list-item-main-icon bi bi-wifi"></i>*/} {item.name}
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Wifi'} />
                                </span>
                            </div>
                        </div>
                            )
                        })}

                        {/* End Features */}
                        {/* <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box  verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <i className="verify-2nd-list-item-main-icon bi bi-tv"></i> Tv
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/kitchen.png' /> Kitchen
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/washer.png' /> Washer
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/garage.png' />  Free Parking
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="anenities-icon" src='/images/parking1.png' /> Paid Parking
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/office-space.png' />Workspace
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/air-conditioner.png' /> Ac
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                                </span>
                            </div>
                        </div> */}

    {/* const categoryEls = document.querySelectorAll('.feature-box');
    // categoryEls.forEach((el) => el.classList.remove('active-category'));
    parentEl.classList.toggle('active-category');
  }
  const checkSelected = ()=> {

  }
  return (
    <>
      <div className='container'>
        <h3 className='verify-2nd-title mb-0 mt-5'>Can you provide us what amenities your place offers? </h3>
        <div className='verify-2nd-list-items row mt-4'>
          <div className='verify-2nd-list-items-1st-column col-md-7 col-sm-12 row'>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <i className="verify-2nd-list-item-main-icon bi bi-wifi"></i> Wifi
                  <input type={'checkbox'} name='feature' className='d-none' value={'Wifi'} />
                </span>
              </div>
            </div> */}
            {/* <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-2'>Do you offer any unique facilities? </h3>
                <div className='verify-2nd-list-items row mt-4'>
                    <div className='verify-2nd-list-items-1st-column col-md-7 col-sm-12 row'>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/swimming-pool.png' /> Pool
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/bath.png' /> Tv
                                    <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="verify-2nd-list-item-main-icon" src='/images/patio.png' /> Patio
                                    <input type={'checkbox'} name='feature' className='d-none' value={'patio'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/grill.png' /> BBQ grill
                                    <input type={'checkbox'} name='feature' className='d-none' value={'bbq grill'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/outdoor.png' />  Outdoor
                                    <input type={'checkbox'} name='feature' className='d-none' value={'outdoor'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/firepit.png' /> Firepit
                                    <input type={'checkbox'} name='feature' className='d-none' value={'firepit'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/pool-table.png' />Pool
                                    Table
                                    <input type={'checkbox'} name='feature' className='d-none' value={'pool'} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="verify-2nd-list-item-main-icon" src='/images/chimney.png' />Indoor
                                    Fire
                                    <input type={'checkbox'} name='feature' className='d-none' value={'indoor fire'} />
                                </span>
                            </div>

                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/piano.png' />Paino
                                    <input type={'checkbox'} name='feature' className='d-none' value={'paino'} />
                                </span>
                            </div>

                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/gym.png' />Exercise
                                    <input type={'checkbox'} name='feature' className='d-none' value={'exercise'} />
                                </span>
                            </div>

                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/lake .png' />Lake
                                    access
                                    <input type={'checkbox'} name='feature' className='d-none' value={'lake'} />
                                </span>
                            </div>

                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/beach.png' />Beach
                                    access
                                    <input type={'checkbox'} name='feature' className='d-none' value={'beach'} />
                                </span>
                            </div>

                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/skating.png' />Sk-in/out
                                    <input type={'checkbox'} name='feature' className='d-none' value={'sk-in/out'} />
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>Can you provide us what amenities your place offers? </h3>
                <div className='verify-2nd-list-items row mt-4'>
                    <div className='verify-2nd-list-items-1st-column col-md-7 col-sm-12 row'>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/alarm.png' />Fire
                                    Alarm
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/first-aid.png' /> First aid
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                    <img className="amenities-icon" src='/images/fire-extinguisher.png' /> Fire
                                    extinguisher
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}



          </div>

        </div>
      </div>
      <div className='container'>
        <h3 className='verify-2nd-title mb-0 mt-2'>Do you offer any unique facilities? </h3>
        <div className='verify-2nd-list-items row mt-4'>
          <div className='verify-2nd-list-items-1st-column col-md-7 col-sm-12 row'>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/swimming-pool.png' /> Pool
                  <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/bath.png' /> Tv
                  <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="verify-2nd-list-item-main-icon" src='/images/patio.png' /> Patio
                  <input type={'checkbox'} name='feature' className='d-none' value={'patio'} />
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/grill.png' /> BBQ grill
                  <input type={'checkbox'} name='feature' className='d-none' value={'bbq grill'} />
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/outdoor.png' />  Outdoor
                  <input type={'checkbox'} name='feature' className='d-none' value={'outdoor'} />
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/firepit.png' /> Firepit
                  <input type={'checkbox'} name='feature' className='d-none' value={'firepit'} />
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/pool-table.png' />Pool
                  Table
                  <input type={'checkbox'} name='feature' className='d-none' value={'pool'} />
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="verify-2nd-list-item-main-icon" src='/images/chimney.png' />Indoor
                  Fire
                  <input type={'checkbox'} name='feature' className='d-none' value={'indoor fire'} />
                </span>
              </div>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/piano.png' />Paino
                  <input type={'checkbox'} name='feature' className='d-none' value={'paino'} />
                </span>
              </div>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/gym.png' />Exercise
                  <input type={'checkbox'} name='feature' className='d-none' value={'exercise'} />
                </span>
              </div>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/lake .png' />Lake
                  access
                  <input type={'checkbox'} name='feature' className='d-none' value={'lake'} />
                </span>
              </div>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/beach.png' />Beach
                  access
                  <input type={'checkbox'} name='feature' className='d-none' value={'beach'} />
                </span>
              </div>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/skating.png' />Sk-in/out
                  <input type={'checkbox'} name='feature' className='d-none' value={'sk-in/out'} />
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className='container'>
        <h3 className='verify-2nd-title mb-0 mt-5'>Can you provide us what amenities your place offers? </h3>
        <div className='verify-2nd-list-items row mt-4'>
          <div className='verify-2nd-list-items-1st-column col-md-7 col-sm-12 row'>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/alarm.png' />Fire
                  Alarm
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/first-aid.png' /> First aid
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='feature-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/fire-extinguisher.png' /> Fire
                  extinguisher
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default SeventhStep;