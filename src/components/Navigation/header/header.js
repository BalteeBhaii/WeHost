import React, { useEffect, useState } from "react";
import SignIn from "../../signIn/signin";
import SignUp from "../../signIn/signUp";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [showSigninModal, setshowSigninModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [display, setDisplay] = useState('none');
    const handleToggleClick = () => {
        setToggle(!toggle)
    }

    const handleDisplayClick = () => {
        if(display =='none'){
            setDisplay('block');
        } else{
            setDisplay('none')
        }
    }
    const menuHandler = () => {
        let dorpdownMenu = document.getElementsByClassName("menu-collapse")[0];
        
        if(dorpdownMenu.classList.contains("menu-active")){
            dorpdownMenu.classList.add("menu-inactive");
            dorpdownMenu.classList.remove("menu-active");
        } else {
            dorpdownMenu.classList.remove("menu-inactive");
            dorpdownMenu.classList.add("menu-active");
        }
    }

    return (
        <>
            <div className="container-fluid bg-light">
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                    <a className="navbar-brand w-75 p-0 m-0" href="#"><img className="header-logo" src="/images/logo.svg" alt="logo"/></a>
                    <button className="navbar-toggler" type="button" onClick={handleToggleClick} data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded={toggle} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                {/* <div className="container-fluid"> */}
                {/* </div> */}
                {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav d-flex align-items-center justify-content-end w-100" >
                            <li className="pe-2 "><a className="fw-semibold" href="#">Stays</a></li>
                            <li className="pe-2 "><a className="fw-semibold" href="#">List your property</a></li>
                            <li className="pe-2 "><a className="fw-semibold" href="#">Services</a></li>
                            <li className="pe-2 "><a className="fw-semibold" href="#">Packages</a></li>
                            <li className="pe-2 "><a className="fw-semibold" href="#">Manage property</a></li>
                            <li className="pe-3 "><a className="fw-semibold" href="#">Review</a></li>
                            <li className="pe-3">
                                <img src="/images/user.svg" alt="user"/>
                                <a href="#" className="stretched-link">Login/SignUp</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}

                {/* <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img className="header-logo" src="/images/logo.svg" alt="logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav> */}

                <div className="header d-flex">
                    <div className="logo-section">
                    <a href="/">
                        <img className="header-logo" src="/images/logo.svg" alt="logo" />
                    </a>
                    </div>
                    <div className="items-section d-flex align-items-center justify-content-end w-100">
                        <ul className="header-main-menu mb-0 d-flex align-items-center h-100 mb-0">
                            <a href="">
                                <li className="mx-2 menu-item">Stays</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">List your property</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">Services</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">Packages</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">Manage property</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">Review</li>
                            </a>
                        </ul>
                        <div className="menu-profile">
                            <img className="menu-profile-icon" src="/images/user.svg" alt="user"/>
                            <button style={{border:'none', background: 'none'}} onClick={()=>handleDisplayClick()}>
                            <span className="menu-item auth-item">Login/SignUp</span>
                            </button>
                            <div className="position-absolute p-2  text-center" style={{display: display, width: '-webkit-fill-available'}}>
                                <p className="mb-1 w-75 bg-white shadow"><button className="btn fw-semibold" onClick={()=> setshowSigninModal(!showSigninModal)}>Log In</button></p>
                                <p className="mb-0 w-75 bg-white  shadow"><button className="btn fw-semibold" onClick={()=> setShowSignupModal(!showSignupModal)}>Sign Up</button></p>
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
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Stays</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">List your property</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Services</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Packages</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Manage property</li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Review</li>
                            </a>
                            <div className="menu-profile">
                                <img className="menu-profile-icon" src="/images/user.svg" alt="user"/>
                                <span className="menu-item auth-item">Login/SignUp</span>
                            </div>
                        </ul>
                </div>
                <SignIn showSigninModal={showSigninModal} setshowSigninModal={setshowSigninModal}/>
                <SignUp showSignupModal={showSignupModal} setShowSignupModal={setShowSignupModal}/>
            </div>
        </>
    );
}

export default Header;