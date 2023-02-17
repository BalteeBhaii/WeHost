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
console.log(toggle)
    const handleDisplayClick = () => {
        if(display =='none'){
            setDisplay('block');
        } else{
            setDisplay('none')
        }
    }

    const handleMobiledisplayclick = () => {
        setToggle(!toggle);
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
            document.getElementsByTagName("body")[0].style.overflow = "visible";
        } else {
            dorpdownMenu.classList.remove("menu-inactive");
            dorpdownMenu.classList.add("menu-active");
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }
    }

    return (
        <>
            <div className="container-fluid bg-light">
                <div className="header d-flex">
                    <div className="logo-section">
                    <a href="/">
                        <img className="header-logo" src="/images/logo.svg" alt="logo" />
                    </a>
                    </div>
                    <div className="items-section d-flex align-items-center justify-content-end w-100">
                        <ul className="header-main-menu mb-0 d-flex align-items-center h-100 mb-0">
                            <a href="">
                                <li className="mx-2 menu-item">Stays
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">List your property
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">Services
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">Packages
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">Manage property
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item">Review
                                    <span></span>
                                </li>
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
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Stays
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">List your property
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Services
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Packages
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Manage property
                                    <span></span>
                                </li>
                            </a>
                            <a href="">
                                <li className="mx-2 menu-item menu-mbl-item mb-3">Review
                                    <span></span>
                                </li>
                            </a>
                            <div className="menu-profile">
                                <img className="menu-profile-icon" src="/images/user.svg" alt="user"/>
                                <button className="border-0 bg-white" onClick={()=>handleMobiledisplayclick()}>
                                    <span className="menu-item auth-item">Login/SignUp</span>
                                </button>
                                {(toggle)&&(<div className="position-relative p-2 text-center" style={{width: 150}}>
                                    <p className="mb-1 border rounded bg-white shadow"><button className="btn fw-semibold" onClick={()=> setshowSigninModal(!showSigninModal)}>Log In</button></p>
                                    <p className="mb-0 border rounded bg-white  shadow"><button className="btn fw-semibold" onClick={()=> setShowSignupModal(!showSignupModal)}>Sign Up</button></p>
                                </div>)}
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