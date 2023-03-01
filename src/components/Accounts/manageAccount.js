import React from "react";
import { Link } from "react-router-dom";

const ManageAccount = () => {
    return (
        <div className="container">
            <h3 className='verify-2nd-title mb-0 mt-5'>Manage Account</h3>
            <h4 className=' mt-3'>Hello Ali , where want to apply changes?</h4>
            <div className='verify-2nd-list-items row mt-4'>
                <div className='verify-2nd-list-items-1st-column col-md-7 col-sm-12 row'>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 h-100 py-3 mb-3'>
                            <span className='verify-2nd-list-item-main'>
                                <i className="account-manage-icon bi bi-person-bounding-box"></i>

                            </span>
                            <div>
                                <Link className="text-black" to='/profile'>
                                    <p className="account-manage-title">Profile Info</p>
                                    <p className="account-manage-text m-0">See your profile upload your photo ,
                                        check your verification and see your
                                        rating and check badge </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 mb-3 h-100 '>
                            <span className='verify-2nd-list-item-main'>
                                <i className="account-manage-icon bi bi-person-vcard"></i>

                            </span>
                            <div>
                                <Link className="text-black" to='/pinfo'>
                                    <p className="account-manage-title">Personal Information</p>
                                    <p className="account-manage-text m-0">Show’s personal details about you and
                                        how can we reach you out here are all
                                        your personal details. </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 mb-3 h-100'>
                            <span className='verify-2nd-list-item-main'>
                                <img className='account-manage-icon' src='/images/login.png' alt="" />

                            </span>
                            <div>
                                <Link className="text-black" to='/loginfo'>
                                    <p className="account-manage-title">Login Acitivity </p>
                                    <p className="account-manage-text m-0">Check where your account is logged in
                                        and check your logins activities here. </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 mb-3 h-100'>
                            <span className='verify-2nd-list-item-main'>
                                <i className="account-manage-icon bi bi-shield-lock"></i>

                            </span>
                            <div>
                                <Link className="text-black" to='/security'>
                                    <p className="account-manage-title">Security </p>
                                    <p className="account-manage-text m-0">Update your password or change your
                                        password and make your account
                                        secure. </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 mb-3 h-100'>
                            <span className='verify-2nd-list-item-main'>
                                <img className='account-manage-icon' src='/images/privacy.png' alt="" />

                            </span>
                            <div>
                                <Link className="text-black" to='/privacy'>
                                    <p className="account-manage-title">Privacy </p>
                                    <p className="account-manage-text m-0">Checkout your  personal data, connected
                                        services and data sharing settings </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 mb-3 h-100'>
                            <span className='verify-2nd-list-item-main'>
                                <img className='account-manage-icon' src='/images/mobile-payment.png' alt="" />

                            </span>
                            <div>
                                <Link className="text-black" to='/pay'>
                                    <p className="account-manage-title">Payment </p>
                                    <p className="account-manage-text m-0">See your payment, payment method
                                        gifts,payload and coupons  </p>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 mb-3 h-100'>
                            <span className='verify-2nd-list-item-main'>
                                <img className='account-manage-icon' src='/images/bell.png' alt="" />

                            </span>
                            <div>
                                <Link className="text-black" to='/Notification'>
                                    <p className="account-manage-title">Notifications </p>
                                    <p className="account-manage-text m-0">Manage your notifications setting and
                                        choose how you want to be contacted</p>
                                </Link>

                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 mb-3 h-100'>
                            <span className='verify-2nd-list-item-main'>
                                <img className='account-manage-icon' src='/images/internet.png' alt="" />

                            </span>
                            <div>
                                <Link className="text-black" to='/worldwide'>
                                    <p className="account-manage-title">Worldwide interests </p>
                                    <p className="account-manage-text m-0">Setup your lanaguage currency and
                                        timezone</p>
                                </Link>

                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 mb-3 h-100'>
                            <span className='verify-2nd-list-item-main'>
                                <img className='account-manage-icon' src='/images/work.png' alt="" />

                            </span>
                            <div>
                                <Link className="text-black" to='/business'>
                                    <p className="account-manage-title">Business Trip </p>
                                    <p className="account-manage-text m-0">Want to gain advantage add your
                                        work email and recieve some benefits</p>
                                </Link>

                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 mb-3 h-100'>
                            <span className='verify-2nd-list-item-main'>
                                <img className='account-manage-icon' src='/images/tax.png' alt="" />

                            </span>
                            <div>
                                <Link className="text-black" to='/taxinfo'>
                                    <p className="account-manage-title">Taxes </p>
                                    <p className="account-manage-text m-0">Manage you tax documents and taxpayer
                                        information</p></Link>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 mb-3 col-md-6 col-sm-6 col-12 verify-2nd-list-item-holder'>
                        <div className='account-manage-list-item border px-3 py-3 h-100'>
                            <span className='verify-2nd-list-item-main'>
                                <img className='account-manage-icon' src='/images/gift-card.png' alt="" />

                            </span>
                            <div>
                                <Link className="text-black" to='/coup'>
                                    <p className="account-manage-title">Coupons and credits</p>
                                    <p className="account-manage-text m-0">No credit or coupons till yet</p>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div></div>
        </div>
    )
}

export default ManageAccount;