import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import data from './data.json';

const WhatYouWant = ({postLoadedHandler}) => {
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
                    <div className='not-loaded' style={{ height: 250 }}>
                      <img className='figure-image' src={a.image} onLoad={postLoadedHandler} />
                    </div>
                    <div className='whatyouwant-texts mt-2 d-flex flex-column'>
                      <span className='whatyouwant-location mb-1 not-loaded'>{a.title}</span>
                      <span className='whatyouwant-description mb-1 not-loaded'>{a.address}</span>
                      <span className='whatyouwant-date mb-1 not-loaded'>beds {a.beds}</span>
                      <span className='whatyouwant-date mb-1 not-loaded'>{a.availability}</span>
                      <span className='whatyouwant-price not-loaded'>${a.price} <span className='whatyouwant-time'>{a.price_type}</span></span>
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
              <div className='not-loaded' style={{ height: 250 }}>
                <img className='figure-image' src='https://images.pexels.com/photos/1647972/pexels-photo-1647972.jpeg?auto=compress&cs=tinysrgb&w=1600' onLoad={postLoadedHandler} />
              </div>
              <div className='whatyouwant-texts mt-2 d-flex flex-column'>
                <span className='whatyouwant-location mb-1 not-loaded'>Ko Samui, Thailand</span>
                <span className='whatyouwant-description mb-1 not-loaded'>1,786 kilometers away</span>
                <span className='whatyouwant-description mb-1 not-loaded'>beds 2</span>
                <span className='whatyouwant-date mb-1 not-loaded'>March 1 - 6</span>
                <span className='whatyouwant-price not-loaded'>$1,876 <span className='whatyouwant-time mx-2'>night</span></span>
              </div>
            </figure>
          </div>

        </div>
      </div>
    </>);
}

export default WhatYouWant;