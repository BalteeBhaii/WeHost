import React from 'react';


const VactionalRental = () => {

    return (
        <div>

            <div className='p-0 '>
                <div className='launch-property'>
                    <h3 className='launch-property-title text-center '>Launch Your property Now</h3>
                </div>

            </div>
            <div className='container launch-property-img'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className=''>

                        <img className='w-100 h-100' src='/images/launch-property.png' alt="" />
                    </div>
                    <p>WeHost will help you host your property and will help you out in reaching guest and
                        we are here to protect your property list your property now. </p>
                    <button type="button" class="btn btn-primary">List Property Now</button>
                </div>

            </div>
            <div className='vacation-rent-div'>
                <div className='wehost-bg-img'>
                    <div className='text-center wehost-bg-img-text'>
                    </div>
                    <div className='container'>
                        <div className='row ' style={{ marginTop: '-10px' }}>
                            <div className='col-12 col-md-6 col-lg-4 mb-3'>
                                <div className="card d-flex flex-column jsutify-content-center align-items-center">
                                    <div className='w-25 h-25 py-3'>
                                        <img src="/images/VR-icons-grow-business1.png" className="card-img-top" alt="wehost" />
                                    </div>
                                    <div className="card-body ">
                                        <h5 className="card-title text-center">Grow Business</h5>
                                        <p className="card-text">
                                            Be more competitive, make decisions based on current information, and assistance in boosting visibility and bookings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 mb-3'>
                                <div className="card d-flex flex-column jsutify-content-center align-items-center">
                                    <div className='w-25 h-25 py-3'>
                                        <img src="/images/VR-icons-grow-business2.png" className="card-img-top" alt="wehost" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Ideal Customer</h5>
                                        <p className="card-text">
                                            Make reservations for the kind of visitors who will enjoy what you have to offer and keep coming back.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className="card d-flex flex-column jsutify-content-center align-items-center">
                                    <div className='w-25 h-25 py-3'>
                                        <img src="/images/VR-icons-grow-business3.png" className="card-img-top" alt="wehost" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Low Fairs</h5>
                                        <p className="card-text">
                                            Our innovative strategy allows us to keep fees lower than anybody else, and our Risk-Free Guarantee backs up our 10% management fee.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6 d-flex justify-content-center flex-column'>
                            <h2 className='work-together-title'>How can I Earn?  </h2>
                            <p className='mx-2'>We've applied our knowledge to create an
                                income plan that increases new listings
                                and allows you to book more nights.</p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <img className='work-together-img' src='/images/Earning.png' alt="" />

                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
}

export default VactionalRental;