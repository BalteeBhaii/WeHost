import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Welcome = ({setListingCompleteData}) => {
    const navigate = useNavigate();
    
    useEffect(()=>{  
        setListingCompleteData(JSON.parse(localStorage.getItem('listing_data')));
    }, [])

    return ( 
        <div className='container'>
            <div className='row align-items-center mt-5'>
                <div className='col-12 col-lg-6 mb-5 welcome-text'>
                    <h1>Welcome to <span>We<span style={{color: '#7B61FF'}}>H</span>ost</span> !</h1>
                    <h2>Verify your Property Now</h2>
                    <h6 style={{color: '#7B8FA1'}}>We are advocates for Lower Fees - Greater Exposure for Your Rental Property and White Glove Concierge </h6>
                </div>
                <div className='col-12 col-lg-6 mb-5 welcome-text'>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <div>
                            <h3>1 - Tell us about your place</h3>
                            <p className='mb-0'>Share show basic info about your place like how many people can stay</p>
                        </div>
                        <div className='welcome-images'>
                            <img src='/images/bed.png' alt='bed' />
                        </div> 
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <div>
                            <h3>2- Make it Standout</h3>
                            <p className='mb-0'>Add your photo and make  it more attractive for the user</p>
                        </div>
                        <div className='welcome-images'>
                            <img src='/images/bed2.png' alt='bed' />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <div>
                            <h3>3- Finish and publish</h3>
                            <p className='mb-0'>Setup your post  and get listed</p>
                        </div>
                        <div className='welcome-images'>
                            <img src='/images/bed3.png' alt='bed' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Welcome;