import React, {useMemo, useState} from 'react';
import Select from "react-select";
import countryList from "react-select-country-list";
const Privacy = () => {
    const [country, setCountry] = useState('');
    const options = useMemo(() => countryList().getData(), [])
    return ( 
        <div className='container my-5 privacy-button'>
            <div className='row'>
                <div className='col-12 col-lg-10'>
                    <div className='mb-3'>
                        <h1 className='fs-6 fw-bold'>Privacy</h1>
                        <h4 className='fs-6'>To retrieve or remove your personal data from weHost, please submit a request.</h4>
                    </div>
                    <div className='mb-3'>
                        <h2 className='fs-6 fw-bold'>Personal Data Request?</h2>
                        <h4>Your personal information will be created in a file that you may download.</h4>
                    </div>
                    <div className='mb-3 privacy-input'>
                        <h2 className='fs-6 fw-bold'>Where are you located?</h2>
                        <Select className='mb-3' options={options} value={country} onChange={(e)=>setCountry(e)} />
                    </div>
                    <div className='mb-3 privacy-input'>
                        <h2 className='fs-6 fw-bold'>Why do you want a copy of your data?</h2>
                        <input type='text' className='form-control border-0' placeholder='I want to know what do you know about me' style={{backgroundColor: '#B4EBF9 '}}/>
                    </div>
                    <button className='btn text-white rounded-0 fw-semibold mb-4 py-2 px-1' style={{width: '130px'}}>Request Data</button>
                    <div className='mb-4'>
                        <h1 className='fs-6 fw-bold'>Activites</h1>
                        <h4>Make a choice for how others will see your profile and activities.</h4>
                    </div>
                    <div className='d-flex justify-content-between pb-3'>
                        <div>
                            <h2 className='fs-6 fw-bold'>My profile and listing should be included to search engines.</h2>
                            <h4>If you enable this, Google and other search engines will show your profile and listing pages in search results.</h4>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input text-white shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h2 className='fs-6 fw-bold'>Use my name and profile picture to combat prejudice.</h2>
                            <h4>By keeping this turned on, you are assisting us in our ongoing research to help us identify and stop prejudice on weHost.</h4>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Privacy;