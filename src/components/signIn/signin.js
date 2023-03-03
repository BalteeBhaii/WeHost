import React, {useState, useMemo} from 'react';
import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../features/user/userSlice';
import { userInfo } from '../../features/user/userInfoSlice';
import axios from 'axios';
const SingIn = () => {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState([]);
    const { isLoggedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const url = 'http://localhost:8000/api/';
    const handleLoginClick = (event) => {
        event.preventDefault();
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email !== '' && password !== '') {
        if (email.match(validRegex)) {
          console.log('valid email');
          getData(email, password);
          navigate("/signup");
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
            setErrorMessage(err.response.data.message, "email or password dosen't match");
          }
        });
    }
  

  return (<>
    <section className="text-center text-lg-start">
      <div className="container py-5">
        <div className="row g-0 align-items-center justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4 mb-5 mb-lg-0">
            <div className="card cascading-right" style={{
              marginRight: '-50px', background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)'
            }}
            >
              <div className="card-body p-5 shadow-5 text-center">
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
                  <div className='d-flex justify-content-between '>
                  <div className="form-check">
                    <input className="form-check-input shadow-none" type="checkbox" value="" id="CheckBox" />
                    <label className="form-check-label">
                      Remember me
                    </label>
                  </div>
                  <p className=''>Forgot Password</p>
                </div>
                  <div>
                  <button className='btn w-100 text-white fw-semibold fs-5' style={{ backgroundColor: '#0D7BC4' }}>
                    Login
                  </button>
                  </div>
                  <hr/>
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

          <div className="col-md-6 col-lg-6 col-xl-5 mb-5 mb-lg-0">
            <img src="https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-100 rounded-4 shadow-4"
              alt="" />
          </div>
        </div>
      </div>
    </section>
  </>);
}

export default SingIn;