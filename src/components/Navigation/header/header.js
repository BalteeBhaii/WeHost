import React, { useEffect, useState } from "react";
import SignIn from "../../signIn/signin";
import SignUp from "../../signIn/signUp";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showSigninModal, setshowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [display, setDisplay] = useState('none');
  const [loginValue, setLoginValue] = useState('');

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

  const menuHandler = () => {
    let dorpdownMenu = document.getElementsByClassName("menu-collapse")[0];

    if (dorpdownMenu.classList.contains("menu-active")) {
      dorpdownMenu.classList.add("menu-inactive");
      dorpdownMenu.classList.remove("menu-active");
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    } else {
      dorpdownMenu.classList.remove("menu-inactive");
      dorpdownMenu.classList.add("menu-active");
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  }

  return (
    <>
      <div className="container-fluid bg-light header-main">
        <div className="header d-flex">
          <div className="logo-section">
            <a href="/">
              <img className="header-logo" src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="items-section d-flex align-items-center justify-content-end w-100">
            <ul className="header-main-menu mb-0 d-flex align-items-center h-100 mb-0">
              <a href="">
                <li className="mx-2 menu-item">Vocational Rental Management
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
            <div className="menu-profile">
              <img className="menu-profile-icon" src="/images/user.svg" alt="user" />
              <button style={{ border: 'none', background: 'none' }} onClick={() => handleDisplayClick()}>
                <span className="menu-item auth-item">Login/SignUp</span>
              </button>
              <div className="position-absolute shadow border rounded-2 mt-1 ps-3 pe-5 py-2 overflow-hidden bg-white " style={{ display: display }}>
                <p className="mb-0 bg-white">
                  <button className="btn p-1 fw-semibold" value='Guest' onClick={(e) => handleLoginClick(e)}>
                    Guest Login
                  </button>
                </p>
                <p className="mb-0 bg-white">
                  <button className="btn p-1 fw-semibold" value='Owner' onClick={(e) => handleLoginClick(e)}>
                    Owner Login
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="menu-dropdown">
            <i class="bi bi-list menu-toggle" onClick={menuHandler}></i>
          </div>
        </div>
        <div className="menu-collapse">
          <ul className="header-main-menu mb-0 d-flex flex-column h-100 mb-0 pb-3">
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Vocational Rental Management
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
            <div className="menu-profile">
              <img className="menu-profile-icon" src="/images/user.svg" alt="user" />
              <button className="border-0 bg-white mbl-auth-menu-main" onClick={() => handleMobiledisplayclick()}>
                <span className="menu-item auth-item">Login/SignUp</span>
              </button>
              {(toggle) && (<div className="position-relative border rounded-2 mt-1 ps-3 pe-5 py-2 overflow-hidden bg-white shadow" >
                <p className="mb-1"><button className="btn fw-semibold" onClick={() => setshowSigninModal(!showSigninModal)}>Guest Login</button></p>
                <p className="mb-0"><button className="btn fw-semibold" onClick={() => setShowSignupModal(!showSignupModal)}>Owner Login</button></p>
              </div>)}
            </div>
          </ul>
        </div>
        <SignIn showSigninModal={showSigninModal} setshowSigninModal={setshowSigninModal} />
        <SignUp showSignupModal={showSignupModal} setShowSignupModal={setShowSignupModal} />
      </div>
    </>
  );
}

export default Header;