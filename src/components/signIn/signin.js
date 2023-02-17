import React from 'react';
const SignIn = ({showModal, setShowModal}) => {
    return ( 
        <>
        {/* <button type='button' onClick={()=> setShowModal(!showModal)}> laundh</button> */}
            {(showModal) && (
                <div className="modal-background" style={{  zIndex: "2000"}}            >
                    <div className="modal-card">
                        <section className="modal-body my-5">
                        <div className='w-100 text-end'>

                            <button type="button" className="btn-close" onClick={()=>setShowModal(!showModal)}></button>
                        </div>
                            <div className='text-center mb-4 sign-in-text-size'>
                                <h1 className='mb-4'><span >S</span>ign in</h1>
                                <p className='fw-semibold '>Sign in and start managing your candidates!</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center signin-input-container'>
                                <input className='form-control border-0 shadow-none signin-input-width' type="text" placeholder='Log in'/>
                                <input className='form-control border-0 shadow-none signin-input-width' type="text" placeholder='Password'/>
                                <div className='d-flex justify-content-between align-items-center sign-in-checkbox'>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label fw-semibold" for="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <p className='fw-semibold'>Forgot Password</p>
                                </div>
                                <p><a href='/' style={{color: 'black'}}><ins>Don't have account?</ins></a></p>                      
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </>
     );
}
 
export default SignIn;