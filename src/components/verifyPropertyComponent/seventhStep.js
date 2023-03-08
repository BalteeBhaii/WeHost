import React from 'react';
import process from 'react';
import axios, { formToJSON } from 'axios';
import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

const SeventhStep = ({ id, setId }) => {
    const [features, setFeatures] = useState([]);
    // const [selectedFeatures, setSelectedFeatures] = useState([]);

    const url = process.env.REACT_APP_APIURL;
    var selectedFeatures = [];
    var listingData = JSON.parse(localStorage.getItem("listing_data"));

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

    const featureHandler = (event) => {
      let selectedFeature = '';
      let selectedBox = '';
      let id = '';

      if(event.target.closest(".verify-2nd-list-item-holder")){
        selectedFeature = event.target.closest(".verify-2nd-list-item-holder");
        selectedBox = selectedFeature.getElementsByClassName("feature-box")[0];
        id = selectedFeature.dataset.id;
        console.log(id);
        
        if(selectedFeatures.indexOf(parseInt(id)) !== -1){
          selectedFeatures.splice(selectedFeatures.indexOf(parseInt(id)), 1);
        } else {
          selectedFeatures.push(parseInt(id));
        }

        if(selectedBox.classList.contains("active-category")){
          selectedBox.classList.remove("active-category");
        } else {
          selectedBox.classList.add("active-category");
        }

        listingData.features = selectedFeatures;
        localStorage.setItem("listing_data", JSON.stringify(listingData));

        // console.log(selectedFeatures);
      }
    }
    
  //   useEffect(() => {
  //     console.log(selectedFeatures);
  // }, [selectedFeatures]);

    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>Can you provide us what amenities your place offers? </h3>
          </div>
      {features.map((item, index) => {
        return (
          <div className='container' key={index}>
        <h3 className='verify-2nd-title mb-0 mt-2'>{item.name}</h3>
        <div className='verify-2nd-list-items row mt-4'>
          <div className='verify-2nd-list-items-1st-column col-md-7 col-sm-12 row'>
            {item.features.map((feature, featureIndex) => {
              return (
                <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder' data-id={feature.id} key={featureIndex} onClick={featureHandler}>
              <div className='feature-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="amenities-icon" src='/images/swimming-pool.png' /> {feature.name}
                  <input type={'checkbox'} name='feature' className='d-none' value={'Tv'} />
                </span>
              </div>
            </div>
              )
            })
            }
          </div>

        </div>
      </div>
        )
      })

      }

    </>
  );
}

export default SeventhStep;