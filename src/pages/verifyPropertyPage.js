import React, { useEffect } from 'react';
import { useState } from 'react';
import Welcome from '../components/verifyPropertyComponent/welcome';
import FirstStep from '../components/verifyPropertyComponent/firstStep';
import PropertyHeader from '../components/verifyPropertyComponent/propertyHeader';
import SecondStep from '../components/verifyPropertyComponent/secondStep';
import ThirdStep from '../components/verifyPropertyComponent/thirdstep';
import ForthStep from '../components/verifyPropertyComponent/forthstep';
import FifthStep from '../components/verifyPropertyComponent/fifthStep';
import SixthStep from '../components/verifyPropertyComponent/sixthStep';
import StepTwo from '../components/verifyPropertyComponent/stepTwo';
import SeventhStep from '../components/verifyPropertyComponent/seventhStep';
import EightStep from '../components/verifyPropertyComponent/eightStep';
import NinethStep from '../components/verifyPropertyComponent/ninethStep';
import SixTenStep from '../components/verifyPropertyComponent/sixtenStep';
import FiveTenStep from '../components/verifyPropertyComponent/fiveTenStep';
import FourTenStep from '../components/verifyPropertyComponent/fourTenStep';
import '../globalcss/styles.css';
import TenthStep from '../components/verifyPropertyComponent/tenthStep';
import StepThree from '../components/verifyPropertyComponent/stepThree';
import axios from 'axios';
import process from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config';

const VerifyPropertyPage = () => {
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(0);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(false);
  const [propertyTitle, setPropertyTitle] = useState('');
  const [propertyDescription, setPropertyDescription] = useState('');
  const [guestType, setGuestType] = useState('');
  const [images, setImages] = React.useState([]);

  const listingData = JSON.parse(localStorage.getItem('listing_data'))?JSON.parse(localStorage.getItem('listing_data')):{
    "title": 'tes',
    'description': 'test',
    'place_type_id': 0,
    'category_id': 0,
    'no_of_guests': 0,
    'no_of_bedrooms': 0,
    'no_of_beds': 0,
    'no_of_bathrooms': 0,
    'guest_type': 'all-guests',
    'price': 0.0,
    'currency_code': 'USD',
    'currency_symbol': '$',
    'has_security_cameras': 2,
    'has_weapons': 2,
    'has_animals': 2,
    'street': 'street # 5',
    'apartment': 'apartment # 2',
    'city': 'NY',
    'country': "USA",
    'features': [],
    'state': 'USA',
    'zip_code': '1234',
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
        navigate('/hosting/listings');
        localStorage.setItem('page', JSON.stringify(0));
      })
      .catch((error) => {
        console.log(error);
      }
    )
  }

  useEffect(() => {
    console.log(id);
    setPage(JSON.parse(localStorage.getItem('page')));
  }, [page])

  useEffect(() => {
    localStorage.setItem("listing_data", JSON.stringify(listingCompleteData));
  }, [isListingDataChanged]);

  return (
    <>
      <PropertyHeader />
      <div className='my-5'>
        <div>
          {
            (JSON.parse(localStorage.getItem('page')) === 0) && 
            <Welcome 
              setListingCompleteData={setListingCompleteData}
            />
          }
          {
            (JSON.parse(localStorage.getItem('page')) === 1) && 
            <FirstStep setId={setId}/>
          }
          {
            (JSON.parse(localStorage.getItem('page')) === 2) && 
            <SecondStep 
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
            (JSON.parse(localStorage.getItem('page')) === 3) && 
            <ThirdStep 
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
            (JSON.parse(localStorage.getItem('page')) === 4) && 
            <ForthStep setId={setId}
            />
          }
          {(JSON.parse(localStorage.getItem('page')) === 5) && 
            <FifthStep 
              setId={setId} 
              listingCompleteData={listingCompleteData} 
              setListingCompleteData={setListingCompleteData}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {
            (JSON.parse(localStorage.getItem('page')) === 6) && 
            <SixthStep 
              id={id} 
              setId={setId} 
              listingCompleteData={listingCompleteData}
              setListingCompleteData={setListingCompleteData}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {(JSON.parse(localStorage.getItem('page')) === 7) && <StepTwo setId={setId}/>}
          {(JSON.parse(localStorage.getItem('page')) === 8) && <SeventhStep id={id} setId={setId} listingCompleteData={listingCompleteData} setListingCompleteData={setListingCompleteData}  url={baseUrl} setIsListingDataChanged = {setIsListingDataChanged} />}
          {
            (JSON.parse(localStorage.getItem('page')) === 9) && 
            <EightStep 
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
            (JSON.parse(localStorage.getItem('page')) === 10) && 
            <TenthStep 
              setId={setId} 
              listingCompleteData={listingCompleteData}
              setListingCompleteData={setListingCompleteData}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {(JSON.parse(localStorage.getItem('page')) === 11) && <StepThree setId={setId}/>}
          {(JSON.parse(localStorage.getItem('page')) === 12) && <FourTenStep id={id} setId={setId}  url={baseUrl} setIsListingDataChanged = {setIsListingDataChanged} />}
          {(JSON.parse(localStorage.getItem('page')) === 13) && <FiveTenStep id={id} setId={setId}  url={baseUrl}    listingCompleteData={listingCompleteData} setListingCompleteData={setListingCompleteData} setIsListingDataChanged = {setIsListingDataChanged} />}
          {(JSON.parse(localStorage.getItem('page')) === 14) && <SixTenStep id={id} setId={setId}  url={baseUrl} setIsListingDataChanged = {setIsListingDataChanged} />}

          <div className='position-fixed bottom-0 left-0 bg-white w-100 px-4 pb-3'>
            <div className="progress mb-3" style={{ background: '#0079c2bf' }}>
              <div className="progress-bar" style={{ width: `${width}%`, background: '#81E2F1' }}></div>
            </div>
            {(JSON.parse(localStorage.getItem('page')) === 0) && (
              <div className='text-end'>
                <button className='btn fw-semibold property-footer-button' style={{ width: 115 }} onClick={getStartedHandle}>
                  Get Started
                </button>
              </div>
            )}
            {(JSON.parse(localStorage.getItem('page')) >= 1) && (
              <div className='d-flex justify-content-between'>
                <button className='btn property-footer-button ms-5' onClick={() => { setPage(page - 1); setWidth((page - 1) * 6.66); console.log(page, width); localStorage.setItem("page", JSON.stringify(page-1)); }}><i className="bi bi-arrow-left me-1"></i>Back</button>
                
                {((JSON.parse(localStorage.getItem('page')) < 14) && (id)) ? (

                  <button className='btn property-footer-button me-5' onClick={nextHandler}>Next<i className="bi bi-arrow-right ms-1"></i></button>

                ) : ''}
                {(JSON.parse(localStorage.getItem('page')) === 14) && (<button className='btn property-footer-button' onClick={finishHandler}>finish<i className="bi bi-arrow-right ms-1"></i></button>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyPropertyPage;