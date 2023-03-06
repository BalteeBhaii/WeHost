import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import CodeModel from './codeModel';
import FinishUpLoging from './finishingUpLoging';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const SingUp = () => {
  const [country, setCountry] = useState('');
  const [showCodeModel, setShowCodeModal] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const options = useMemo(() => countryList().getData(), [])
  const changeHandler = value => {
    setCountry(value)
  }
  const navigate = useNavigate();

  const url = 'http://localhost:8000';

  const handleContinueClick = (event) => {
    event.preventDefault();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email !== '' && country !== '') {
      if (email.match(validRegex)) {
        let data = { email: email };
        let config = {
          headers: {
            'Accept': 'application/json'
          }
        };

        axios.post(`${url}/api/register`, data, config)
          .then((response) => {
            if (response.data.success) {
              setError('');
              return (<Navigate  to={'/register/email-confirmation/'+email} />)
            }
          })
          .catch((error) => {
            if (error) {
              console.log(error.response.data.message);
              setError(error.response.data.message);
            }
          })

      } else {
        setError('Email is not Correct!')
      }
    } else {
      setError('"Incorrect email and country"')
    }
  }

  return (<>
    <section className="text-center text-lg-start">
      <div className="container py-5">
        <div className="row g-0 align-items-center justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="card cascading-right card-display-style">
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form onSubmit={handleContinueClick}>
                  <label className='text-danger fw-semibold'>{error}</label>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <Select className='form-control p-0 text-start' placeholder='Select Country' options={options} value={country} onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control shadow-none" placeholder='Email' required onChange={(e) => { setEmail(e.target.value) }} />
                  </div>
                  <div className='mb-4'>
                    <button type="submit" className="btn w-100 text-white fw-semibold btn-block " style={{background: '#0D7BC4'}}>Sign up</button>
                  </div>
                  <div >
                    <a className='text-muted' href='/signin'><ins>Already have an account? Sign In here.</ins></a>
                  </div>
                  <hr />
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i class="bi bi-facebook"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i class="bi bi-google"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 mb-5 mb-lg-0 d-none d-md-block">
            <img src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-100 rounded-4 shadow-4"
              alt="" />
          </div>
        </div>
      </div>
    </section>
  </>);
}

export default SingUp;