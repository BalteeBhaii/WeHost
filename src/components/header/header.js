import React, {useEffect} from "react";
import './header.css'

const Header = () => {
    useEffect(()=>{
        console.log('rendered!!!')
    },[])
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                <a className="navbar-brand p-0" href="#"><img src="/images/logo.svg" alt="logo"/></a>
                <button className="navbar-toggler me-5" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="container-fluid"> */}
                {/* </div> */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav d-flex align-items-center justify-content-end w-100" >
                        <li className="pe-3 "><a className="text-dark fw-semibold" href="#">Stays</a></li>
                        <li className="pe-3 "><a className="text-dark fw-semibold" href="#">List your property</a></li>
                        <li className="pe-3 "><a className="text-dark fw-semibold" href="#">Services</a></li>
                        <li className="pe-3 "><a className="text-dark fw-semibold" href="#">Packages</a></li>
                        <li className="pe-3 "><a className="text-dark fw-semibold" href="#">Manage property</a></li>
                        <li className="pe-5 "><a className="text-dark fw-semibold" href="#">Review</a></li>
                        <li className="pe-5">
                            <img src="/images/user.svg" alt="user"/>
                            <a href="#" className="stretched-link">Login/SignUp</a>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </>
     );
}

export default Header;