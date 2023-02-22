import React from 'react';
import mansion from '../../Assets/mansion.png'
const SecondStep = () => {
    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>What Kind of Property Do You Own ?</h3>
                <div className='verify-2nd-list-items row mt-4'>
                    <div className='verify-2nd-list-items-1st-column col-md-7 col-sm-12 row'>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i class="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i class="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i class="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i class="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i class="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i class="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i class="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i class="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 col-sm-12'>
                        <img className='verify-2nd-image' src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                </div>
            </div>
            {/*<div className='row align-items-end mt-5'>
            <div className='col-12 col-md-6'>
                <div className='firstStep-text mb-5'>
                    <h1>What kind of property do you own?</h1>

                </div>

                <div>
                    <ul className=" d-flex justify-content-center align-items-center flex-wrap list-group list-group-horizontal property-type-list">

                        <li className="list-group-item">
                            <button className="p-2 gap-1">
                                <i className="bi bi-house-door"></i>
                                <p className="mb-0 ">Houses</p>
                            </button>

                        </li>
                        <li className="list-group-item">
                            <button className="p-2 gap-1"><i className="bi bi-buildings-fill"></i>
                                <p className="mb-0 ">Apartment</p></button>

                        </li>
                        <li className="list-group-item">
                            <button className="p-2 gap-1"><i className="bi bi-building-fill"></i>
                                <p className="mb-0 " >Hotel</p></button>

                        </li>
                        <li className="list-group-item guesthouse">
                            <button className="gap-1">
                                <img className="guestimg"  style={{ height: '16px'}} src={mansion} />
                                <p className="mb-0 ">Guest House</p>
                            </button>

                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-md-end justify-content-sm-start'>

            </div>

    </div>*/}
        </>
    );
}

export default SecondStep;