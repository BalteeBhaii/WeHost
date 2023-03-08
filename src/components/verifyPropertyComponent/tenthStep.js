import React, { useEffect, useState } from 'react';
const TenthStep = ({setId, listingCompleteData, setListingCompleteData}) => {

    // const [title, setTitle] = useState('');
    // const [description, setDiscription] = useState('')
    const [propertyTitle, setPropertyTitle] = useState('');
    const [propertyDescription, setPropertyDescription] = useState('');
    const [guestType, setGuestType] = useState('');


    const handleInputChange = (event) => {
        // setTitle(event.target.value);
        // console.log(title)
        setId(true)
    }
    // useEffect(()=>{
    //     if(propertyTitle !== '' && propertyDescription !== '' && guestType !== ''){
    //         let data = listingCompleteData;
    //         data.title= propertyTitle;
    //         data.description= propertyDescription;
    //         data.guest_type = guestType;
    //         setListingCompleteData(data);
    //         localStorage.setItem('listing_data', JSON.stringify(data));
    //       }
    //       console.log()
    // },[])

    useEffect(()=>{
        let validation = true;
        if(!propertyTitle){
            validation= false
        }
        if(!propertyDescription){
            validation= false
        }
        if(!guestType){
            validation= false
        }
        if(validation){
            let data = listingCompleteData;
            data.title= propertyTitle;
            data.description= propertyDescription;
            data.guest_type = guestType;
            setListingCompleteData(data);
            localStorage.setItem('listing_data', JSON.stringify(data));
            setId(true)
        }
    }, [propertyTitle,  propertyDescription, guestType])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-8'>

                        <h3 className='verify-2nd-title mb-0 mt-5'>Add a title and a perfect description which explain your house</h3>
                        <h4 className='mt-4'>Write your title here </h4>
                        <div className="input-group-prepend ">
                            <input type="text" className="form-control shadow-none" onChange={(event)=> {setPropertyTitle(event.target.value); console.log(event.target.value)}} aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <h4 className='mt-4'>Write your description here which tell us about your house </h4>
                        <div className="input-group ">
                            <textarea className="form-control shadow-none" onChange={(e) => {setPropertyDescription(e.target.value)}} aria-label="With textarea" maxlength="100"></textarea>
                        
                        </div>
                        <h4 className='mt-2'>0/100</h4>
                        <h3 className='verify-2nd-title my-3'>Which type of guest can book property?</h3>
                        <select class="form-select shadow-none" aria-label="Default select example" onChange={(e)=> setGuestType(e.target.value)}>
                            <option value="all-guests" >all-guests</option>
                            <option value="experienced-guests">experienced-guests</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TenthStep;