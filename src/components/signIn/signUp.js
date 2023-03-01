import React, { useState, useMemo } from 'react';
import Select from "react-select";
import countryList from "react-select-country-list";
import CodeModal from './codeModel';
const SignUp = ({ showSignupModal, setShowSignupModal }) => {
  const [showCodeModel, setShowCodeModal] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setCountry(value)
  }

  const handleContinueClick = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email !== '' && country !== ''){
      if(email.match(validRegex)){
        console.log('valid email');
        setShowCodeModal(!showCodeModel);
        setError('');
      } else{
        setError('Email is not Correct!')
      }
    } else{
      setError('"Incorrect email and country"')
    }
  }


  return (
    <>
      {(showSignupModal) && (
        <div className="modal-background" style={{ zIndex: "1000" }}>
          <div className="modal-card">
            <section className="modal-body my-3">
              <div className='w-100 text-end'>
                <button type="button" className="btn-close" onClick={() => setShowSignupModal(!showSignupModal)}></button>
              </div>
              <div className='text-center mb-4 sign-in-text-size'>
                <h1 className='mb-2'><span >S</span>ign up</h1>
                <p className='fw-semibold '>Join us now</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center signin-input-container'>
              <label className='text-danger fw-semibold'>{error}</label>
                <Select className='signin-input-width mb-3' options={options} value={country} onChange={changeHandler} />
                <input
                   className='form-control border-0 shadow-none signin-input-width'
                    type="email"
                    name='email'
                    value={email}
                    placeholder='Email'
                    required onChange={(e)=>{setEmail(e.target.value)}}
                  />
                {/* <PhoneInput
                  className='mb-3'
                  country={'us'}
                  value={number}
                  onChange={(e)=>setNumber(e)}
                /> */}
                <button className='btn button-continue text-white fw-semibold signin-input-width' onClick={handleContinueClick}>
                  Continue
                </button>
                <div className='d-flex signin-input-width'>
                  <hr className='signin-hr w-50' />
                  <p className='mx-3 fw-semibold fs-5'>Or</p>
                  <hr className='signin-hr w-50' />
                </div>
                <button className='form-control button-facebook fw-semibold mb-3 border-0 shadow-none signin-input-width'>Login with facebook</button>
                <button className='form-control button-facebook fw-semibold border-0 shadow-none signin-input-width'>Login with Gmail</button>
                {/* <div className='d-flex justify-content-between align-items-center sign-in-checkbox'>
                  <div className="form-check">
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
          <CodeModal showCodeModel={showCodeModel} email={email} setShowCodeModal={setShowCodeModal} showSignupModal={showSignupModal} setShowSignupModal={setShowSignupModal} />
        </div>
      )}
    </>
  );
}

export default SignUp;