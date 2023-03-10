import React, { useEffect, useState } from "react";
import SignIn from "../../signIn/signin";
import SignUp from "../../signIn/signUp";
import SignInModel from "../../signIn/signInModel";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showSigninModal, setshowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [display, setDisplay] = useState('none');
  const [loginValue, setLoginValue] = useState('');
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const handleToggleClick = () => {
    setToggle(!toggle)
  }

  const handleLoginClick = (event) => {
    setshowSigninModal(!showSigninModal);
    setLoginValue(event.target.value)
    console.log(event.target.value);
  }
  const handleDisplayClick = () => {
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none')
    }
  }
  const handleMobiledisplayclick = () => {
    setToggle(!toggle);
    if (display === 'none') {
      setDisplay('block');

    } else {
      setDisplay('none')
    }
  }

  const menuHandler = (event) => {
    let dorpdownMenu = document.getElementsByClassName("menu-collapse")[0];
    let hamburger = document.getElementsByClassName("hamburger")[0];

    if (dorpdownMenu.classList.contains("menu-active")) {
      dorpdownMenu.classList.add("menu-inactive");
      dorpdownMenu.classList.remove("menu-active");
      document.getElementsByTagName("body")[0].style.overflow = "visible";

      if (hamburger.classList.contains("ham-burger-active")) {
        hamburger.classList.remove("ham-burger-active");
      }
    } else {
      dorpdownMenu.classList.remove("menu-inactive");
      dorpdownMenu.classList.add("menu-active");
      document.getElementsByTagName("body")[0].style.overflow = "hidden";

      if (!hamburger.classList.contains("ham-burger-active")) {
        hamburger.classList.add("ham-burger-active");
      }
    }
  }
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')));
    console.log(user)
  }, []);
  return (
    <>
      <div className="container-fluid bg-light header-main">
        <div className="header d-flex justify-content-between">
          <div className="logo-section">
            <a href="/">
              <img className="header-logo" src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="items-section d-flex align-items-center justify-content-end w-100">
            <ul className="header-main-menu mb-0 d-flex align-items-center h-100 mb-0">
              <a href="">
                <li className="mx-2 menu-item">Vacational Rental Management
                  <span></span>
                </li>
              </a>
              <a href="">
                <li className="mx-2 menu-item">White Glove Concierge
                  <span></span>
                </li>
              </a>
              <a href="">
                <li className="mx-2 menu-item">Language
                  <span></span>
                </li>
              </a>
              <a href="">
                <li className="mx-2 menu-item">Currency
                  <span></span>
                </li>
              </a>
              <a href="">
                <li className="mx-2 menu-item">Help
                  <span></span>
                </li>
              </a>
            </ul>
            <div className="btn border border-dark-subtle rounded-5 menu-profile d-flex">
              <div className="dropdown">
              <div className="" data-bs-toggle="dropdown" aria-expanded="false">
                <button className="btn border-0 " href="#" role="button" >
                  {(user)? user.name: 'Login/SignUp' }
                </button>
                <img className="menu-profile-icon" src="/images/user_pic-50x50.png" alt="user" width={'28px'} height={'28px'}/>
              </div>
                {(user)?
                  <ul className="dropdown-menu sign-in-dropdown" style={{transform: 'translate(-20px, 38px) !important', width: 225, fontSize: '14px', letterSpacing: 1}}>
                  <li><Link className="dropdown-item fw-semibold text-muted mb-1 " to="">Messages</Link></li>
                  <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="">Trips</Link></li>
                  <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="">Wish Lists</Link></li>
                  <li><hr className="my-2"/></li>
                  <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="">Manage listings</Link></li>
                  <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="">Manage experiences</Link></li>
                  <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="">Refer a Host</Link></li>
                  <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="">Account</Link></li>
                  <li><hr className="my-2"/></li>
                  <li><Link className="dropdown-item  mb-1" to="">Help</Link></li>
                  <li><Link className="dropdown-item  mb-1" to="">Log out</Link></li>
                </ul>
                :
                <ul className="dropdown-menu sign-in-dropdown" style={{transform: 'translate(-20px, 38px) !important', width: 225}}>
                  <li><Link className="dropdown-item" to="/signin">Guest Login</Link></li>
                  <li><Link className="dropdown-item" to="/signin">Owner Login</Link></li>
                </ul>
                }
              </div>
            </div>
          </div>
          <div className="menu-dropdown">
            <div className="hamburger" onClick={menuHandler}>
              <span>

              </span>
              <span>

              </span>
              <span>

              </span>
            </div>
          </div>
        </div>
        <div className="menu-collapse">
          <ul className="header-main-menu mb-0 d-flex flex-column h-100 mb-0 pb-3">
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Vacational Rental Management
                <span></span>
              </li>
            </a>
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">White Glove Concierge
                <span></span>
              </li>
            </a>
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Language
                <span></span>
              </li>
            </a>
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Currency
                <span></span>
              </li>
            </a>
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Help
                <span></span>
              </li>
            </a>
            <div className="menu-profile d-flex">
              <img className="menu-profile-icon" src="/images/user.svg" alt="user" />
              <div className="dropdown">
                <button className="btn border-0 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login/SignUp
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/signin">Guest Login</Link></li>
                  <li><Link className="dropdown-item" to="/signin">Owner Login</Link></li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;