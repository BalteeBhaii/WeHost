import React, {useEffect, useState} from "react";
import './header.css'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggleClick = () => {
        setToggle(!toggle)
    }
    return ( 
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                    <div className="logoWidth">
                        <a className="navbar-brand p-0 m-1" href="#"><img className="w-100" src="/images/logo.svg" alt="logo"/></a>
                    </div>
                    <button className="navbar-toggler p-1" type="button" onClick={handleToggleClick} data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded={toggle} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="container-fluid"> */}
                    {/* </div> */}
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
                </nav>
            </div>
        </>
     );
}

export default Header;