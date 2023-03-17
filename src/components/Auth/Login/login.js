import React, { useState, useEffect, useMemo } from 'react';
import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../Utilities/user/userSlice';
import { userInfo } from '../../Utilities/user/userInfoSlice';
import { baseUrl as url } from '../../../config';
import { Link } from 'react-router-dom';

import axios from 'axios';
const Login = (props) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState([]);
  const { isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  var signupButton = document.getElementsByClassName("submit-button")[0];
  var spinner = '<div className="auth-spinner mt-0 pt-0 spinner-border text-white" role="status"><span className="visually-hidden">Loading...</span></div>';

  const handleLoginClick = (event) => {
    event.preventDefault();

    signupButton.innerHTML = spinner;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email !== '' && password !== '') {
      if (email.match(validRegex)) {
        getData(email, password);
        // setshowSigninModal(!showSigninModal)
        console.log(password)
      } else {
        signupButton.innerHTML = 'Login';
        setErrorMessage('"Email is not Correct!"');
      }


      if (document.getElementById('CheckBox').checked) {
      } else {
      }

    } else {
      setErrorMessage('"Email is not Correct!"');
      signupButton.innerHTML = 'Login';
    }
  }


    const apibody = {
      email: email,
      password: password
    }

    const getData = async (email, password) => {
      await axios.post(`${url}login`, { email: email, password: password }, { headers: { "Accept": "application/json" } })
        .then(res => {
          signupButton.innerHTML = 'Login';
          // return console.log(res.data);
          if (res.data.success) {
            setData(res.data.data);
            const token = res.data.token.split("|");
            localStorage.setItem('dataKey', JSON.stringify(token[1]));
            localStorage.setItem('user', JSON.stringify(res.data.data));

            dispatch(logIn());
            dispatch(userInfo({ email: res.data.data.email, name: res.data.data.name, role: res.data.data.roles[0].name }));
            setErrorMessage('successful');
            props.isLogin();

            let url = window.location.href;

            if(url.lastIndexOf("/host/create/listing") !== -1){
              navigate('/host/create/listing');
            } else {
              navigate('/');
            }

          }
          console.log(res.data);
        })
        .catch(err => {
          signupButton.innerHTML = 'Login';
          console.log(err);
          
          if (err.response.data.error) {
            setErrorMessage(err.response.data.message, "email or password dosen't match");
          }
        });
    }


    return (<>
      <section className="text-center text-lg-start">
        <div className="container py-5">
          <div className="row g-0 align-items-center justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4 mb-5 mb-lg-0">
              <div className="card cascading-right card-display-style"
              >
                <div className="card-body px-4 py-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-3">Sign In</h2>
                  <h5>Welcome to Guest account</h5>
                  <form onSubmit={handleLoginClick}>
                    <label className='text-danger mb-2 fw-semibold'>{errorMessage}</label>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <input
                          className='form-control  shadow-none '
                          type="email"
                          name='email'
                          placeholder='Email'
                          required onChange={(e) => { setEmail(e.target.value) }}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input className='form-control  shadow-none '
                        type="password"
                        placeholder='Password'
                        required onChange={(e) => { setPassword(e.target.value) }}
                      />
                      {/* <label className="form-label" for="form3Example3">Email address</label> */}
                    </div>
                    <div className='d-flex flex-wrap justify-content-between '>
                      <div className="form-check">
                        <input className="form-check-input shadow-none" type="checkbox" value="" id="CheckBox" />
                        <label className="form-check-label">
                          Remember me
                        </label>
                      </div>
                      <p className=''>Forgot Password</p>
                    </div>
                    <div className='mb-3'>
                      <button className='submit-button btn w-100 text-white fw-semibold fs-5' style={{ backgroundColor: '#0D7BC4' }}>
                        Login
                      </button>
                    </div>
                    <div >
                      <Link className='text-muted' to='/register'><ins>Create Account</ins></Link>
                    </div>
                    <hr />
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-facebook"></i>
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-google"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-5 mb-5 mb-lg-0 d-none d-md-block">
              <img src="https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-100 rounded-4 shadow-4"
                alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
    );
  }
  export default Login;