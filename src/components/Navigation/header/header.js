import React from "react";
import {useEffect, useState } from "react";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggleClick = () => {
        setToggle(!toggle)
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
                            <span className="menu-item auth-item">Login/SignUp</span>
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
            </div>
        </>
    );
}

export default Header;