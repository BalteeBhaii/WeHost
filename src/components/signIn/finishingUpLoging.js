import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const FinishUpLoging = (props) => {
  const [number, setNumber] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [dob, setDOB] = useState('');
  const [password, setPassword] = useState('');
  const [confirmP, setConfirmP] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('abc@gmail.com');
  const navigate = useNavigate();

  const url = 'http://localhost:8000';
  //const url = 'http://localhost:8000/api/';
  const { id } = useParams();

  var signupButton = document.getElementsByClassName("submit-button")[0];
  var spinner = '<div class="auth-spinner mt-0 pt-0 spinner-border text-white" role="status"><span class="visually-hidden">Loading...</span></div>';

  const handleAgreeAndContinue = (event) => {
    event.preventDefault();

    signupButton.innerHTML = spinner;

    if (number !== '' && fName !== '' && lName !== '' && dob !== '' && password !== '' && confirmP !== '') {
      if (password === confirmP) {
        if (document.getElementById('checkbox').checked) {
          postData();
        } else {
          setError('"Please accept terms of services"');
          signupButton.innerHTML = 'Agree and Continue';
        }
      } else {
        setError('"Password confirmation does not match!"');
        signupButton.innerHTML = 'Agree and Continue';
      }
    } else {
      setError('"Please provide correct data!"');
      signupButton.innerHTML = 'Agree and Continue';
      console.log(number, 'p', password,)
    }

  }

  const apibody = {
    name: fName,
    id: id,
    password: password,
    password_confirmation: confirmP
  }

  const postData = async () => {
    await axios.post(`${url}/api/register/complete`, apibody, { headers: { "Accept": "application/json" } })
      .then(res => {
        signupButton.innerHTML = 'Agree and Continue';

        if (res.data.success) {
          navigate('/signin');
        }
        console.log(res.data);
      })
      .catch(err => {
        signupButton.innerHTML = 'Agree and Continue';

        if (err.response.status === 422) {
          console.log(err.response.status)
          setError(err.response.data.message)
        }
        console.log(err.response);

      });
  }
  return (
    <>
      <section className="text-center text-lg-start">
        <div className="container py-5">
          <div className="row g-0 align-items-center justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4 mb-5 mb-lg-0">
              <div className="card cascading-right card-display-style">
                <div className="card-body p-5 shadow-5 text-center">
                  <h3 className='mb-2'>Finishing up loging</h3>
                  <hr className='signin-hr mb-4' />
                  <form onSubmit={handleAgreeAndContinue}>
                    <div className="form-outline">
                      <label className='text-danger fw-semibold'>{error}</label>
                      <input className='form-control border border-secondary shadow-none mb-2' required type="text" name='first_name' onChange={(e) => setfName(e.target.value)} placeholder='First Name' />
                      <input className='form-control border border-secondary shadow-none mb-2' required type="text" name='last_name' onChange={(e) => setlName(e.target.value)} placeholder='Last Name' />
                      <input className='form-control border border-secondary shadow-none mb-2' required type="Date" name='dob' onChange={(e) => setDOB(e.target.value)} placeholder='Date of Birth' />
                      <PhoneInput
                        className='mb-2'
                        country={'us'}
                        value={number}
                        onChange={(e) => setNumber(e)}
                      />
                      <input className='form-control border border-secondary shadow-none mb-2' required type="text" name='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                      <input className='form-control border border-secondary shadow-none mb-2' required type="text" name='password_confirmation' onChange={(e) => setConfirmP(e.target.value)} placeholder='Confirm Passowrd' />
                      <div className="form-check mb-3">
                        <input className="form-check-input p-0 shadow-none" type="checkbox" value="" id="checkbox" />
                        <label className="form-check-label">
                          By selecting Agree and continue, I agree to <a href='/'><ins>Terms of Service,</ins></a>
                        </label>
                      </div>
                      <div>
                        <button className='btn text-white fw-semibold w-100 border-1 submit-button' style={{ backgroundColor: '#0D7BC4' }}>
                          Agree and Continue
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-5 mb-5 mb-lg-0 d-none d-md-block">
              <img src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-100 rounded-4 shadow-4"
                alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FinishUpLoging;