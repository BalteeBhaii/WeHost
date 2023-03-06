import React, { useEffect, useState } from 'react';
import data from './data.json';
const WhatYouWant = () => {
  console.log(data);
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    setApiData(data);
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className='container section'>
        <div>
          <h2 className='section-titles mb-4'>What you want to do?</h2>
        </div>
        <div className='row'>
          {/* populating api data */}
          {(apiData) ?
            apiData.map(a => {
              return (
                <div id={a.id} className='col-12 col-md-6 col-lg-4 col-xl-3'>

                  <figure className='figure-text-sizing'>
                    <div className='' style={{ height: 250 }}>
                      <img className='figure-image' src={a.image} />
                    </div>
                    <div className='whatyouwant-texts mt-2 d-flex flex-column'>
                      <span className='whatyouwant-location'>{a.title}</span>
                      <span className='whatyouwant-description'>{a.address}</span>
                      <span className='whatyouwant-date mb-1'>{a.beds}</span>
                      <span className='whatyouwant-date mb-1'>{a.availability}</span>
                      <span className='whatyouwant-price'>{a.price} <span className='whatyouwant-time'>{a.price_type}</span></span>
                    </div>
                  </figure>
                </div>
              )
            })
            :
            ''
          }
          {/* end of populating api data */}

          <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
            <figure className='figure-text-sizing'>
              <div className='' style={{ height: 250 }}>
                <img className='figure-image' src='https://images.pexels.com/photos/1647972/pexels-photo-1647972.jpeg?auto=compress&cs=tinysrgb&w=1600' />
              </div>
              <div className='whatyouwant-texts mt-2 d-flex flex-column'>
                <span className='whatyouwant-location'>Ko Samui, Thailand</span>
                <span className='whatyouwant-description'>1,786 kilometers away</span>
                <span className='whatyouwant-date mb-1'>March 1 - 6</span>
                <span className='whatyouwant-price'>$1,876 <span className='whatyouwant-time mx-2'>night</span></span>
              </div>
            </figure>
          </div>

        </div>
      </div>
    </>);
}

export default WhatYouWant;