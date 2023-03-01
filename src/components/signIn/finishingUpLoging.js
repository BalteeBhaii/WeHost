import { error } from 'jquery';
import React from 'react';
import { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const FinishUpLoging = ({showLoginModel, setShowLoginModal, showSignupModal, setShowSignupModal, showCodeModel, setShowCodeModel}) => {
    const [number, setNumber] = useState('');
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [dob, setDOB] = useState('');
    const [password, setPassword] = useState('');
    const [confirmP, setConfirmP] = useState('');
    const [error, setError] = useState('');

    const handleAgreeAndContinue = ()=>{
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(number !== '' && fName !== '' && lName !== '' && dob !== '' && password !== '' && confirmP !== ''){
            if(password === confirmP){
                if(document.getElementById('checkbox').checked){
                    setShowLoginModal(!showLoginModel);
                    setShowSignupModal(!showSignupModal);
                    setShowCodeModel(!showCodeModel);
                } else {
                    setError('"Please accept terms of services"')
                }
            } else {
                setError('"password is not the same!"')
            }
        } else{
            setError('"provide correct data."')
            console.log(number,'p', password, )
        }
        
    }
    return ( <>
         {(showLoginModel)&&(
            <div className="modal-background" style={{  zIndex: "3000"}}>
                <div className="modal-card">
                    <section className="modal-body my-3">
                    <div className='w-100 text-end'>
                        <button type="button" className="btn-close" onClick={()=>setShowLoginModal(!showLoginModel)}></button>
                    </div>
                        <div className='text-center mb-4 sign-in-text-size'>
                            <h1 className='mb-2'><span >F</span>inishing up loging</h1>
                            <hr className='signin-hr mb-4'/>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <label className='text-danger fw-semibold'>{error}</label>
                            <input className='form-control border-0 shadow-none login-input-width' type="text" name='first_name' onChange={(e)=>setfName(e.target.value)} placeholder='First Name'/>
                            <input className='form-control border-0 shadow-none login-input-width' type="text" name='last_name'  onChange={(e)=>setlName(e.target.value)} placeholder='Last Name'/>
                            <input className='form-control border-0 shadow-none login-input-width' type="Date" name='dob' onChange={(e)=>setDOB(e.target.value)} placeholder='Date of Birth'/>
                            <PhoneInput
                                className='mb-3'
                                country={'us'}
                                value={number}
                                onChange={(e)=>setNumber(e)}
                            />
                            <input className='form-control border-0 shadow-none login-input-width' type="text" name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
                            <input className='form-control border-0 shadow-none login-input-width' type="text" name='password_confirmation' onChange={(e)=>setConfirmP(e.target.value)} placeholder='Confirm Passowrd'/>
                            <div className="form-check signin-input-width mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="checkbox"/>
                                <label className="form-check-label fw-semibold">
                                By selecting Agree and continue, I agree to <a href='/'><ins>Terms of Service,</ins></a>
                                </label>
                            </div>
                            <button className='btn text-white fw-semibold border-1 signin-input-width' style={{backgroundColor: '#0D7BC4'}} onClick={()=>handleAgreeAndContinue()}>
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