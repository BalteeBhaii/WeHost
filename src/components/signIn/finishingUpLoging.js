import React from 'react';
const FinishUpLoging = ({showLoginModel, setShowLoginModal, showSignupModal, setShowSignupModal, showCodeModel, setShowCodeModel}) => {
    const handleAgreeAndContinue = ()=>{
        setShowLoginModal(!showLoginModel);
        setShowSignupModal(!showSignupModal);
        setShowCodeModel(!showCodeModel);
    }
    return ( <>
         {(showLoginModel)&&(
            <div className="modal-background" style={{  zIndex: "3000"}}>
                <div className="modal-card">
                    <section className="modal-body my-3">
                    <div className='w-100 text-end'>
                        <button type="button" className="btn-close" onClick={()=>setShowLoginModal(!showLoginModel)}></button>
                    </div>
                        <div className='text-center mb-4'>
                            <h1 className='mb-2'><span >F</span>inishing up loging</h1>
                            <hr className='signin-hr mb-4'/>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            
                            <input className='form-control border-0 shadow-none login-input-width' type="number" placeholder='First Name'/>
                            <input className='form-control border-0 shadow-none login-input-width' type="number" placeholder='Last Name'/>
                            <input className='form-control border-0 shadow-none login-input-width' type="number" placeholder='Date of Birth'/>
                            <input className='form-control border-0 shadow-none login-input-width' type="number" placeholder='Email Address'/>
                            <input className='form-control border-0 shadow-none login-input-width' type="number" placeholder='Password'/>
                            <input className='form-control border-0 shadow-none login-input-width' type="number" placeholder='Confirm Passowrd'/>
                            <div class="form-check signin-input-width mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label fw-semibold" for="flexCheckDefault">
                                By selecting Agree and continue, I agree to <a href='/'><ins>Terms of Service,</ins></a>
                                </label>
                            </div>
                            <button className='btn text-white fw-semibold signin-input-width' style={{backgroundColor: '#0D7BC4'}} onClick={()=>handleAgreeAndContinue()}>
                                agree and Continue
                            </button>                            
                        </div>
                    </section>
                </div>
            </div>
        )}
    </> 
    );
}
 
export default FinishUpLoging;