import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FinishUpLoging from './finishingUpLoging';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CodeModel = (props) => {
  const [showLoginModel, setShowLoginModal] = useState(false);
  const [code, setCode] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const url = 'http://localhost:8000';
  const { id } = useParams();

  var signupButton = document.getElementsByClassName("submit-button")[0];
  var spinner = '<div class="auth-spinner mt-0 pt-0 spinner-border text-white" role="status"><span class="visually-hidden">Loading...</span></div>';

  //const url = 'https://dev.wehosttravel.com/api/';

  const handleCodeclick = (event) => {
    event.preventDefault();

    signupButton.innerHTML = spinner;

    if (code) {
      let data = { id: id, otp: code };
      let config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      axios.post(`${url}/api/register/email/verification`, data, config)
        .then((response) => {
          signupButton.innerHTML = "Verify";

          if (response.data.success) {
            console.log(response.data);
            navigate('/register/complete/'+response.data.data);
          }
        })
        .catch((error) => {
          signupButton.innerHTML = "Verify";

          if (error) {
            console.log(error);
            setError(error);
          }
        })

    } else {
      setError('"code is required"')
    }
  }
  return (
    <>
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
                      <button className='btn btn-outline-secondary border-1 fw-semibold submit-button' id='auth-email-confirmation-submit-button'>
                      Verify
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
    </>
  );
}

export default CodeModel;