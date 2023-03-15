import React, { useEffect, useState } from 'react';

const TenthStep = ({ setId, listingCompleteData, setListingCompleteData, setIsListingDataChanged }) => {
    const [propertyTitle, setPropertyTitle] = useState('');
    const [propertyDescription, setPropertyDescription] = useState('');
    const [guestType, setGuestType] = useState('all-guests');
    const [error, setError] = useState('');

    const submitHandler = () => {
        if(!propertyTitle || !propertyDescription || !guestType)
            return setError('Please provide the below information.');

        setId(false);
        setError('');

        listingCompleteData.title = propertyTitle;
        listingCompleteData.description = propertyDescription;
        listingCompleteData.guest_type = guestType;

        setListingCompleteData(listingCompleteData);
        setIsListingDataChanged(Math.random());

        setId(true);
    }

    useEffect(()=>{
        setId(false);
    }, [])
    useEffect(()=>{
        if(!propertyTitle || !propertyDescription || !guestType){
        setError('Please provide the below information.');
        setId(false);
        }
    }, [propertyTitle, propertyDescription, guestType])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-8'>

                        <h3 className='verify-2nd-title mb-2 mt-5'>Add a title and a perfect description which explain your house</h3>
                        <span className='text-danger'>{error}</span>
                        <h4 className='mt-4'>Write your title here </h4>
                        <div className="input-group-prepend ">
                            <input type="text" className="form-control shadow-none" onChange={(event) => { setPropertyTitle(event.target.value) }} aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <h4 className='mt-4'>Write your description here which tell us about your house </h4>
                        <div className="input-group ">
                            <textarea className="form-control shadow-none" onChange={(e) => { setPropertyDescription(e.target.value) }} aria-label="With textarea" maxLength="100"></textarea>

                        </div>
                        <h4 className='mt-2'>0/100</h4>
                        <h4 className='mt-4'>Which type of guest can book property?</h4>
                        <select className="form-select shadow-none" aria-label="Default select example" onChange={(e) => setGuestType(e.target.value)}>
                            <option value="all-guests" >all-guests</option>
                            <option value="experienced-guests">experienced-guests</option>
                        </select>
                    </div>
                </div>
                <button className='btn btn-outline border mt-5 hosting-tenth-step-submit' onClick={submitHandler}>Confirm</button>
            </div>
        </>
    );
}

export default TenthStep;