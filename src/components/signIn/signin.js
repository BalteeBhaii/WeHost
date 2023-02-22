import React from 'react';
import { useState } from 'react';
import SignUp from './signUp';
const SignIn = ({ showSigninModal, setshowSigninModal, loginValue }) => {
  const [showSignupModal, setShowSignupModal] = useState(false)
  return (
    <>
      {/* <button type='button' onClick={()=> setShowModal(!showModal)}> laundh</button> */}
      {(showSigninModal) && (
        <div className="modal-background" style={{ zIndex: "500" }}>
          <div className="modal-card">
            <section className="modal-body my-3">
              <div className='w-100 text-end'>
                <button type="button" className="btn-close" onClick={() => setshowSigninModal(!showSigninModal)}></button>
              </div>
              <div className='text-center mb-4 sign-in-text-size'>
                <h1 className='mb-2'><span >S</span>ign in</h1>
                <h5>Welcome to the {loginValue} account</h5>
                <p className='text-secondary'>Sign in and start managing your candidates!</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center signin-input-container'>
                <input className='form-control border-0 shadow-none signin-input-width' type="text" placeholder='Log in' />
                <input className='form-control border-0 shadow-none signin-input-width' type="text" placeholder='Password' />
                <div className='d-flex justify-content-between align-items-center sign-in-checkbox'>
                  <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label fw-semibold" for="flexCheckDefault">
                      Remember me
                    </label>
                  </div>
                  <p className='fw-semibold'>Forgot Password</p>
                </div>
                <div className='sign-in-checkbox mb-3'>
                  <button className='btn w-100 text-white fw-semibold fs-5' style={{ backgroundColor: '#0D7BC4' }} onClick={() => { setshowSigninModal(!showSigninModal) }}>
                    Login
                  </button>
                </div>
                <button className='border-0 bg-white text-black sign-in-checkbox' onClick={() => { setShowSignupModal(!showSignupModal) }}>
                  <ins>Don't have account?</ins>
                </button>
              </div>
            </section>
          </div>
          <SignUp showSignupModal={showSignupModal} setShowSignupModal={setShowSignupModal} />
        </div>
      )}
    </>
  );
}

export default SignIn;