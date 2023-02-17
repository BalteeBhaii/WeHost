import React, { useState } from 'react';
import countries from 'i18n-iso-countries';
import enLocate from 'i18n-iso-countries/langs/en.json';
import CodeModal from './codeModel';
const SignUp = ({showSignupModal, setShowSignupModal}) => {
    const [selectedcountries, setSelectedCountries] = useState("");
    const [showCodeModel, setShowCodeModal] = useState(false);
    countries.registerLocale(enLocate);
    const countryObj = countries.getNames("en", {select : 'official'});
    // console.log(countryObj);
    const selectcountryHandler = (value) => {
        setSelectedCountries(value);
    }
    const countryArr = Object.entries(countryObj).map(([key, value]) => {
        return{
        label: value,
        value: key
        };
    });
    return (
        <>
            {(showSignupModal) && (
                <div className="modal-background" style={{  zIndex: "1000"}}>
                    <div className="modal-card">
                        <section className="modal-body my-3">
                        <div className='w-100 text-end'>

                            <button type="button" className="btn-close" onClick={()=>setShowSignupModal(!showSignupModal)}></button>
                        </div>
                            <div className='text-center mb-4 sign-in-text-size'>
                                <h1 className='mb-2'><span >S</span>ign up</h1>
                                <p className='fw-semibold '>Join us now</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center signin-input-container'>
                                <select className='border-0 shadow-none signin-input-width form-select' 
                                    value={selectedcountries} 
                                    onChange= {(e)=> selectcountryHandler(e.target.value)}>
                                        {!!countryArr?.length && countryArr.map(({label, value})=>(
                                        <option className='bg-white' key={value} value={value}>{label}</option>
                                        )
                                    )}
                                </select>
                                <input className='form-control border-0 shadow-none signin-input-width' type="number" placeholder='+92'/>
                                <button className='btn button-continue text-white fw-semibold signin-input-width' onClick={()=>setShowCodeModal(!showCodeModel)}>
                                    Continue
                                </button>
                                <div className='d-flex signin-input-width'>
                                    <hr className='signin-hr w-50'/>
                                    <p className='mx-3 fw-semibold fs-5'>Or</p>
                                    <hr className='signin-hr w-50'/>
                                </div>
                                <button className='form-control button-facebook fw-semibold mb-3 border-0 shadow-none signin-input-width'>Login with facebook</button>
                                <button className='form-control button-facebook fw-semibold border-0 shadow-none signin-input-width'>Login with Gmail</button>
                                {/* <div className='d-flex justify-content-between align-items-center sign-in-checkbox'>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label fw-semibold" for="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <p className='fw-semibold'>Forgot Password</p>
                                </div> */}
                                {/* <button className='mt-5 border-0 bg-white' onClick={()=>{setshowSigninModal(!showSigninModal)}}><a href='' style={{color: '#7B8FA1'}}><ins>Already have account?</ins></a></button>                       */}
                            </div>
                        </section>
                    </div>
                    <CodeModal showCodeModel={showCodeModel} setShowCodeModal={setShowCodeModal} showSignupModal={showSignupModal} setShowSignupModal={setShowSignupModal}/>
                </div>
            )}
        </>
     );
}
 
export default SignUp;