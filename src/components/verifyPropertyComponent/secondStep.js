import process from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecondStep = ({ id, setId, listingCompleteData, setListingCompleteData, setCategories, categories, url, setIsListingDataChanged }) => {
  const [placeTypeId, setPlaceTypeId] = useState(null);
  const [placeTypes, setPlaceTypes] = useState([]);
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState(null);

  const setCategory = (event, id) => {
    const parentEl = event.nativeEvent.target.closest('.category-box');
    if (!parentEl) return;
    const categoryEls = document.querySelectorAll('.category-box');
    categoryEls.forEach((el) => el.classList.remove('active-category'));
    parentEl.classList.add('active-category');

    setSelectedPlaceTypes(id); 
    listingCompleteData.place_type_id = id;
    setListingCompleteData(listingCompleteData);
    setIsListingDataChanged(Math.random());
    setId(true);
  }

  useEffect(() => {
    fetchPlaceTypes();
  }, [selectedPlaceTypes]);

  const fetchPlaceTypes = async () => {
    var config = {
      headers: {
        Accept: 'application/json'
      }
    }

    let request = axios.get(`${url}categories`, { config })
    await request.then((response) => {
        setCategories(response.data.data);
    });
    await request.catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <div className='container'>
        <h3 className='verify-2nd-title mb-0 mt-5'>What Kind of Property Do You Own ?</h3>
        <div className='verify-2nd-list-items row  mt-4'>
          <div className='verify-2nd-list-items-1st-column col-md-6 col-sm-12 col-12 row'>
            {/* Place Types */}
            {categories.map((item, index) => {
            return (
              <div key={index} className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder' onClick={(e)=>setCategory(e,item.id)}>
                <div className='category-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                  <span className='verify-2nd-list-item-main'>
                    {/*<i className="verify-2nd-list-item-main-icon bi bi-house"></i>*/} 
                    {item.name}
                    <input type={'radio'} name='category' className='d-none' value={item.id} />
                  </span>
                </div>
              </div>)
            })}
            {/* Place Types End */}
          </div>
          <div className='col-12 col-md-5 col-lg-6'>
            <img className='verify-2nd-image' src='/images/propertyhouse.png' alt="" />
          </div>
        </div>
      </div>

    </>
  );
}

export default SecondStep;