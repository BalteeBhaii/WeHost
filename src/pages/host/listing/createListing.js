import React, { useEffect } from 'react';
import { useState } from 'react';
import Welcome from '../../../components/Host/Listing/CreateListing/welcome';
import PropertyAbout from '../../../components/Host/Listing/CreateListing/propertyAbout';
import PropertyHeader from '../../../components/Host/Listing/CreateListing/propertyHeader';
import PropertyType from '../../../components/Host/Listing/CreateListing/propertyType';
import PropertyCategory from '../../../components/Host/Listing/CreateListing/propertyCategory';
import PropertyAddress from '../../../components/Host/Listing/CreateListing/propertyAddress';
import PropertyConfirmAddress from '../../../components/Host/Listing/CreateListing/propertyConfirmAddress';
import PropertyMoreInfo from '../../../components/Host/Listing/CreateListing/propertyMoreInfo';
import PropertyAmenities from '../../../components/Host/Listing/CreateListing/propertyAmenities';
import PropertyFeatures from '../../../components/Host/Listing/CreateListing/propertyFeatures';
import PropertyMedia from '../../../components/Host/Listing/CreateListing/propertyMedia.js';
import NinethStep from '../../../components/Host/Listing/CreateListing/ninethStep';
import PropertyPublish from '../../../components/Host/Listing/CreateListing/propertyPublish';
import PropertySecurity from '../../../components/Host/Listing/CreateListing/propertySecurity';
import PropertyPrice from '../../../components/Host/Listing/CreateListing/propertyPrice';
import PropertyTitle from '../../../components/Host/Listing/CreateListing/propertyTitle';
import PropertyFinish from '../../../components/Host/Listing/CreateListing/propertyFinish';
import axios from 'axios';
import process from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../config';

const CreateListing = () => {
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(0);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(false);
  const [propertyTitle, setPropertyTitle] = useState('');
  const [propertyDescription, setPropertyDescription] = useState('');
  const [guestType, setGuestType] = useState('');
  const [images, setImages] = React.useState([]);

  const listingData = JSON.parse(localStorage.getItem('listing_data'))?JSON.parse(localStorage.getItem('listing_data')):{
    "title": '',
    'description': '',
    'place_type_id': 0,
    'category_id': 0,
    'no_of_guests': 0,
    'no_of_bedrooms': 0,
    'no_of_beds': 0,
    'no_of_bathrooms': 0,
    'guest_type': '',
    'price': 0,
    'currency_code': 'USD',
    'currency_symbol': '$',
    'has_security_cameras': 2,
    'has_weapons': 2,
    'has_animals': 2,
    'street': '',
    'apartment': '',
    'city': '',
    'country': "",
    'features': [],
    'state': '',
    'zip_code': '',
    'country_code': '+1',
    'cover_image': '',
    'images': []
  }

  const navigate = useNavigate();
  const [listingCompleteData, setListingCompleteData] = useState(listingData);
  const [isListingDataChanged, setIsListingDataChanged] = useState(0);

  const getStartedHandle = () => {
    localStorage.setItem("page", JSON.stringify(1));
    setPage(page + 1);
    setWidth(page * 6.66);
    console.log(page);
  }

  const nextHandler = () => {
    localStorage.setItem("page", JSON.stringify(page+1));
    setPage(page + 1); 
    setWidth((page + 1) * 6.66); 
    setId(false) 
  } 

  
  const dataURLtoBlob = (dataurl) => {
    var arr = dataurl.split(',');
    var mime= arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1])
    var n = bstr.length;
    let u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
  }

  const finishHandler = async () => {
    console.log(listingCompleteData);
    let config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      }
    }

    await axios.post(baseUrl + 'listings', listingCompleteData, config)
      .then((response) => {
        console.log(response.data);
        navigate('/host/listings');
        localStorage.setItem('page', JSON.stringify(0));
      })
      .catch((error) => {
        console.log(error);
      }
    )
  }

  useEffect(() => {
    const navigation = localStorage.getItem('page');
    console.log(navigation)
    if(!navigation){
      localStorage.setItem('page', JSON.stringify(0));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("listing_data", JSON.stringify(listingCompleteData));
    setPage(JSON.parse(localStorage.getItem('page')));
    console.log(page)
  }, [isListingDataChanged]);

  return (
    <>
      <PropertyHeader />
      <div className='my-5'>
        <div>
          {
            (page === 0) && 
            <Welcome 
              setListingCompleteData={setListingCompleteData}
            />
          }
          {
            (page === 1) && 
            <PropertyAbout setId={setId}/>
          }
          {
            (page === 2) && 
            <PropertyType 
              id={id} 
              setId={setId} 
              listingCompleteData={listingCompleteData} 
              setListingCompleteData={setListingCompleteData} 
              setCategories={setCategories} 
              categories={categories}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }
          {
            (page === 3) && 
            <PropertyCategory 
              id={id} 
              setId={setId} 
              categories={categories}
              listingCompleteData={listingCompleteData}
              setListingCompleteData={setListingCompleteData} 
              setCategories={setCategories}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {
            (page === 4) && 
            <PropertyAddress setId={setId}
            />
          }
          {(page === 5) && 
            <PropertyConfirmAddress 
              setId={setId} 
              listingCompleteData={listingCompleteData} 
              setListingCompleteData={setListingCompleteData}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {
            (page === 6) && 
            <PropertyMoreInfo 
              id={id} 
              setId={setId} 
              listingCompleteData={listingCompleteData}
              setListingCompleteData={setListingCompleteData}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {(page === 7) && <PropertyAmenities setId={setId}/>}
          {(page === 8) && <PropertyFeatures id={id} setId={setId} listingCompleteData={listingCompleteData} setListingCompleteData={setListingCompleteData}  url={baseUrl} setIsListingDataChanged = {setIsListingDataChanged} />}
          {
            (page === 9) && 
            <PropertyMedia 
              id={id} 
              setId={setId} 
              url={baseUrl} 
              setIsListingDataChanged = {setIsListingDataChanged} 
              images={images} 
              setImages={setImages} 
              setListingCompleteData={setListingCompleteData}
              listingCompleteData={listingCompleteData}
              />
            }
          {/* {(page === 10) && <NinethStep />} */}
          
          {
            (page === 10) && 
            <PropertyTitle 
              setId={setId} 
              listingCompleteData={listingCompleteData}
              setListingCompleteData={setListingCompleteData}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {(page === 11) && <PropertyFinish setId={setId}/>}
          {(page === 12) && <PropertyPrice id={id} setId={setId}  url={baseUrl} listingCompleteData={listingCompleteData} setListingCompleteData={setListingCompleteData} setIsListingDataChanged = {setIsListingDataChanged} />}
          {(page === 13) && <PropertySecurity id={id} setId={setId}  url={baseUrl} listingCompleteData={listingCompleteData} setListingCompleteData={setListingCompleteData} setIsListingDataChanged = {setIsListingDataChanged} />}
          {(page === 14) && <PropertyPublish id={id} setId={setId}  url={baseUrl} listingCompleteData={listingCompleteData} setIsListingDataChanged = {setIsListingDataChanged} />}

          <div className='position-fixed bottom-0 left-0 bg-white w-100 px-4 pb-3'>
            <div className="progress mb-3" style={{ background: '#0079c2bf' }}>
              <div className="progress-bar" style={{ width: `${width}%`, background: '#81E2F1' }}></div>
            </div>
            {(page === 0) && (
              <div className='text-end'>
                <button className='btn fw-semibold property-footer-button' style={{ width: 115 }} onClick={getStartedHandle}>
                  Get Started
                </button>
              </div>
            )}
            {(page >= 1) && (
              <div className='d-flex justify-content-between'>
                <button className='btn property-footer-button ms-5' onClick={() => { setPage(page - 1); setWidth((page - 1) * 6.66); console.log(page, width); localStorage.setItem("page", JSON.stringify(page-1)); }}><i className="bi bi-arrow-left me-1"></i>Back</button>
                
                {((page < 14) && (id)) ? (

                  <button className='btn property-footer-button me-5' onClick={nextHandler}>Next<i className="bi bi-arrow-right ms-1"></i></button>

                ) : ''}
                {(page === 14) && (<button className='btn property-footer-button' onClick={finishHandler}>finish<i className="bi bi-arrow-right ms-1"></i></button>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateListing;