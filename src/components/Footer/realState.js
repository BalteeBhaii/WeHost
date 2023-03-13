import React from 'react';


const RealState = () => {

    return (
        <div>

            <div className='p-0 '>
                <div className='launch-property'>
                    <h3 className='launch-property-title text-center '>Wehost buy and sell</h3>
                </div>

            </div>
            <div className='container launch-property-img'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='real-state-host'>

                        <img className='w-100 h-100' src='/images/realstate.png' alt="" />
                    </div>
                    <p className='realstate-text'>WeHost will help you host your property and will help you out in reaching guest and
                        we are here to protect your property list your property now.  </p>
                    <button type="button" class="btn btn-check-home">List Property Now</button>
                </div>

            </div>
            <div >
                <div className='bg-realstate'>
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
                            <h2 className='work-together-title'>Sell Your Property Now  </h2>
                            <p className='mx-2'>When you're ready to sell, make it simple for potential buyers. Let Evolve to give everything you need
                                to establish your rental's success while keeping it booked throughout the sale process.</p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <img className='work-together-img' src='/images/Earning.png' alt="" />

                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <img className='' src='/images/salehouse.png' alt="" />

                        </div>
                        <div className='col-12 col-md-6 d-flex justify-content-center flex-column'>
                            <h2 className='work-together-title mt-2'>WeHost For Sale Property  </h2>
                            <p className='mx-2'>Checkout our listed weHost Listed property
                                Buy and WeHost property Now..</p>
                            <button type="button " class="btn btn-check-home d-flex inline-block">Checkout Home</button>
                        </div>

                    </div>



                </div>
            </div>



        </div>

    );
}

export default RealState;