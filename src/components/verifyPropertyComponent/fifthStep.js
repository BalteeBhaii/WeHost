import React, { useState, useMemo } from 'react';
import Select from "react-select";
import countryList from "react-select-country-list";
const FifthStep = ({setId, listingCompleteData, setListingCompleteData}) => {
    const [street, setStreet] = useState('');
    const [apt, setApt] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState(null);
    const [country, setCountry] = useState('');

    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setCountry(value)
      }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        let data = listingCompleteData;
        data.city = city;
        data.country = country.label;
        data.state = state;
        data.street = street;
        data.zip_code = zipCode;
        data.apartment = apt;
        setListingCompleteData(data);
        localStorage.setItem('listing_data', JSON.stringify(data));
        setId(true);
    }
    return (
        <>
            <div className='container'>
                {/* <h3 className='verify-2nd-title mb-0 mt-5'>Is this pin point position accurate?</h3> */}
                <div className='row justify-content-center'>
                    <h3 className='verify-2nd-title text-center'>
                        Confirm your address
                    </h3>

                    <div className='col-md-5 col-sm-12 mt-3'>
                        <div className='border border-secondary rounded-3 mb-5 '>
                            <form onSubmit={handleOnSubmit}>
                                <div class="form-floating border-bottom border-2">
                                    <input type="text" class="form-control border-0 shadow-none" placeholder='St.' required onChange={(e)=>setStreet(e.target.value)} />
                                    <label for="floatingInput">street</label>
                                </div>
                                <div class="form-floating rounded-0 border-bottom border-2">
                                    <input type="text" class="form-control border-0 shadow-none" placeholder='(Optional)' onChange={(e)=>setApt(e.target.value)}/>
                                    <label for="floatingInput">Apt</label>
                                </div>
                                <div class="form-floating border-bottom border-2">
                                    <input type="text" class="form-control border-0 shadow-none" placeholder='city' required onChange={(e)=>setCity(e.target.value)}/>
                                    <label for="floatingInput">City</label>
                                </div>
                                <div class="form-floating border-bottom border-2">
                                    <input type="text" class="form-control border-0 shadow-none" placeholder='(Optional)' onChange={(e)=>setState(e.target.value)}/>
                                    <label for="floatingInput">State</label>
                                </div>
                                <div class="form-floating border-bottom">
                                    <input type="number" class="form-control shadow-none border-0 " id="floatingInput" placeholder='0000' onChange={(e)=> setZipCode(e.target.value)} />
                                    <label for="floatingInput">Zip Code</label>
                                </div>
                                <div class="border-bottom">
                                    <Select className='form-control p-0 text-start border-0' placeholder='Select Country' options={options} value={country} onChange={changeHandler} required/>
                                </div>

                                <button className='btn btn-lg w-100'>Confirm</button>
                            </form>
                        </div>
                        <img className='verify-2nd-image' src='/images/pointlocation.png' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FifthStep;