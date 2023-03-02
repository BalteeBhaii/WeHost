import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../features/user/userSlice';
import { userInfo } from '../../features/user/userInfoSlice';
import axios from 'axios';
import SignUp from './signUp';
const SignIn = ({ showSigninModal, setshowSigninModal, loginValue }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState([]);
  const { isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const url = 'http://localhost:8000/api/';
  const handleLoginClick = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email !== '' && password !== '') {
      if (email.match(validRegex)) {
        console.log('valid email');
        getData(email, password);
        // setshowSigninModal(!showSigninModal)
        console.log(password)
      } else {
        setErrorMessage('"Email is not Correct!"')
      }


      if (document.getElementById('CheckBox').checked) {
        console.log('checked')
      } else {
        console.log('not Checked')
      }

    } else {
      setErrorMessage("'Provide correct Email and Password!'");
    }
  }

  const apibody = {
    email: email,
    password: password
  }

  const getData = async (email, password) => {
    await axios.post(`${url}login`, { email: email, password: password }, { headers: { "Accept": "application/json" } })
      .then(res => {
        if(res.data.success){
          setData(res.data.data);
          const token = res.data.token.split("|");
          localStorage.setItem('dataKey', JSON.stringify(token[1]));
          dispatch(logIn());
          dispatch(userInfo({email: res.data.data.email, name: res.data.data.name, role: res.data.data.roles[0].name}));
          setErrorMessage('successful');
        }
        console.log(res.data);
      })
      .catch(err => {
        // setErrorMessage(err.response)
        console.log(err.response.data.message);
        if(err.response.data.error){
          setErrorMessage(err.response.data.message);
        }
      });
  }

  return (
    <>
      {/* <button type='button' onClick={()=> setShowModal(!showModal)}> laundh</button> */}
      {(showSigninModal) && (

        <div className="modal-background" style={{ zIndex: "1000" }}>
          <div className="modal-card">
            <section className="modal-body">
              <div className='w-100 text-end'>
                <button type="button" className="btn-close" onClick={() => setshowSigninModal(!showSigninModal)}></button>
              </div>
              <div className='text-center mb-4 sign-in-text-size'>
                <h1 className='mb-2'><span >S</span>ign in</h1>
                <h5>Welcome to {loginValue} account</h5>
                <p className='text-secondary'>Sign in and start managing your candidates!</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center signin-input-container'>
                <label className='text-danger mb-2 fw-semibold'>{errorMessage}</label>
                <form className='signin-input-width'>
                  <input
                    className='form-control border-0 shadow-none'
                    type="email"
                    name='email'
                    placeholder='Email'
                    required onChange={(e) => { setEmail(e.target.value) }}
                  />
                  <input className='form-control border-0 shadow-none'
                    type="password"
                    placeholder='Password'
                    required onChange={(e) => { setPassword(e.target.value) }}
                  />
                </form>
                <div className='d-flex justify-content-between align-items-center sign-in-checkbox'>
                  <div className="form-check">
                    <input className="form-check-input shadow-none" type="checkbox" value="" id="CheckBox" />
                    <label className="form-check-label fw-semibold">
                      Remember me
                    </label>
                  </div>
                  <p className='fw-semibold'>Forgot Password</p>
                </div>
                <div className='sign-in-checkbox mb-3'>
                  <button className='btn w-100 text-white fw-semibold fs-5' style={{ backgroundColor: '#0D7BC4' }} onClick={handleLoginClick}>
                    Login
                  </button>
                </div>
                {(loginValue === 'Guest')&&(
                  <div>
                    <a style={{cursor: 'pointer'}} onClick={() => { setShowSignupModal(!showSignupModal) }}>
                      <ins>Don't have account?</ins>
                    </a>
                  </div>
                )}
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