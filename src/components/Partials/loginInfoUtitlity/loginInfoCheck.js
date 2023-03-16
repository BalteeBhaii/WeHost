import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const LoginInfoCheck = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('dataKey')));
    }, []);
    return (
        <>
            <div className="dropdown">
                <div className='btn border border-dark-subtle rounded-5 header-menu-hamburger-icon' data-bs-toggle="dropdown" aria-expanded="false">
                    <div className='d-flex align-items-center'>
                        <img className="menu-profile-icon" src="/images/user_pic-50x50.png" alt="user" width={'28px'} height={'28px'} />
                        <i class="bi bi-list menu-profile-icon-hamburger"></i>
                    </div>
                </div>
                {(user) ?
                    <ul className="dropdown-menu sign-in-dropdown" style={{ transform: 'translate(-20px, 38px) !important', width: 225, fontSize: '14px', letterSpacing: 1 }}>
                        <li><Link className="dropdown-item fw-semibold text-muted mb-1 " to="">Messages</Link></li>
                        <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="">Trips</Link></li>
                        <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="/wishlists">Wish Lists</Link></li>
                        <li><hr className="my-2" /></li>
                        <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="/host/listings">Manage listings</Link></li>
                        <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="">Manage experiences</Link></li>
                        <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="">Refer a Host</Link></li>
                        <li><Link className="dropdown-item fw-semibold text-muted mb-1" to="/host/account">Account</Link></li>
                        <li><hr className="my-2" /></li>
                        <li><Link className="dropdown-item  mb-1" to="">Help</Link></li>
                        <li><Link className="dropdown-item  mb-1" to="">Log out</Link></li>
                    </ul>
                    :
                    <ul className="dropdown-menu sign-in-dropdown" style={{ transform: 'translate(-20px, 38px) !important', width: 225 }}>
                        <li><Link className="dropdown-item" to="/login">Login</Link></li>
                        <li><Link className="dropdown-item" to="/register">Register</Link></li>
                    </ul>
                }
            </div>
        </>
    );
}

export default LoginInfoCheck;