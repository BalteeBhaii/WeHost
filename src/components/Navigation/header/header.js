import React, { useEffect, useState } from "react";
import SignIn from "../../signIn/signin";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
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
                            <div className="position-absolute p-2 text-center" style={{display: display, backgroundColor: 'white', width: '-webkit-fill-available'}}>
                                <p className="mb-0 fw-semibold border-bottom border-top"><button className="btn" onClick={()=> setShowModal(!showModal)}>Log In</button></p>
                                <p className="mb-0 fw-semibold border-bottom"><button className="btn">Sign Up</button></p>
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
                                <span className="menu-item auth-item">Login/SignUp</span>
                            </div>
                        </ul>
                </div>
                <SignIn showModal={showModal} setShowModal={setShowModal}/>
            </div>
        </>
    );
}

export default Header;