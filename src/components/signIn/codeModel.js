import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FinishUpLoging from './finishingUpLoging';
import axios from 'axios';

const CodeModel = (props) => {
  const [showLoginModel, setShowLoginModal] = useState(false);
  const [code, setCode] = useState(null);
  const [error, setError] = useState('');
  const [authState, setAuthState] = useState(1);
  const navigate = useNavigate();

  var localAuthState = localStorage.getItem("authState");

  const url = 'http://localhost:8000';

  const handleCodeclick = (event) => {
    event.preventDefault();
    if (code) {
      let data = {email: props.email, otp: code};
      let config = {
        headers: {
          'Accept': 'application/json'
        }
      };
      
      axios.post(`${url}/api/email/verification`, data, config)
      .then((response) => {
        if(response.data.success){
          setError('');
          setAuthState(2);
          localAuthState = 2;
          localStorage.setItem("authState", 2);
        }
      })
      .catch((error) => {
        if(error){
          console.log(error.response.data.message);
          setError(error.response.data.message);
        }
      })

    } else {
      setError('"code is required"')
    }
  }
  return (
    <>
        {localAuthState == 1 ?
          <section className="text-center text-lg-start">
          <div className="container py-5">
            <div className="row g-0 align-items-center justify-content-center">
              <div className="col-md-6 col-lg-5 col-xl-4 mb-5 mb-lg-0">
                <div className="card cascading-right" style={{
                  marginRight: '-50px', background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)'
                }}
                >
                  <div className="card-body p-5 shadow-5 text-center">
                    <h1 className='mb-2'>Confirm your code</h1>
                    <p className='text-success'>We have sent you a verification code. Please check your email.</p>
                    <hr className='mb-4' />
                    <form onSubmit={handleCodeclick}>
                      <label className='text-danger mb-2 fw-semibold'>{error}</label>
                      <div className="form-outline mb-4">
                        <input className='form-control border-1 shadow-none mb-5' type="number" onChange={(e) => setCode(e.target.value)} placeholder='i.e 6757' required />
                        <hr className=' w-100' />
                        <button className='btn btn-outline-secondary border-1 fw-semibold'>
                          Done
                        </button>
                      </div>
                      <div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-5 mb-5 mb-lg-0">
                <img src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-100 rounded-4 shadow-4"
                  alt="" />
              </div>
            </div>
          </div>
        </section>
        :
        <FinishUpLoging email={props.email} />
        }
    </>
  );
}

export default CodeModel;