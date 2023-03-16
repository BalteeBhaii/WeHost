import React from 'react';
import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const AdditionalSteps = () => {
    return (
        <>
            <div className='container'>
                <h2 className='welcome-title mt-3'>Welcome Ali</h2>
                <p className='welcome-text'>Your place can be viewed by guests after this post have been published for 24 hours.</p>
                <div className='row'>
                    <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
                        <div className="card hotel-card-style border-0" >
                            <div className='image-div'>
                                <img className='imgSizeStyle' src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                            </div>
                            <div className='container'>
                                <div className="card-body p-1">
                                    <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                                        <p className='mb-1'>2-September</p>
                                        <p className='mb-1'>$800/Person</p>
                                    </div>
                                    <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                                        <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                                    </div>
                                    <div className='d-flex justify-content-between w-100' style={{ fontSize: '0.8rem' }}>
                                        <p className='fw-semibold'><img className='me-1 fw-semibold' src='/images/successfull.png' alt="" />Published Successfully</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='welcome-title mt-4 mb-5'>Additional Steps :</h2>
            </div>

            <div className='container-fluid p-0'>

                <div className='additonal-step-section overflow-hidden d-flex justify-content-center gap-2 flex-wrap'>
                    <div className="card  additional-step-card ">
                        <div className="card-body">
                            <h5 className="card-title">Instant Book</h5>
                            <p className="card-text">This will boost up your post and
                                choose how will your guest book</p>
                        </div>
                    </div>
                    <div className="card additional-step-card " >
                        <div className="card-body">
                            <h5 className="card-title">Reservation Dates</h5>
                            <p className="card-text">Setup dates  on Calendar on bases of
                                availability of your house  </p>
                        </div>
                    </div>
                    <div className="card  additional-step-card">
                        <div className="card-body">
                            <h5 className="card-title">Policies</h5>
                            <p className="card-text">Setup your cancellation policies</p>
                        </div>
                    </div>
                    <div className="card additional-step-card " >
                        <div className="card-body">
                            <h5 className="card-title">Rules and Promotion </h5>
                            <p className="card-text">Setup your house rule and setup offers
                                to attract guests</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container'>
                <h2 className='welcome-title mt-4 mb-5'>Your Reservation:</h2>
                <div className='mt-3 d-flex gap-4 flex-wrap'>
                    <div className='d-flex gap-4 flex-wrap'>
                        <div className="dropdown">
                            <button className="btn btn-search-listing  w-auto add-listing" type="button" aria-haspopup="true" aria-expanded="false">
                                Checking Out
                            </button>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-search-listing  w-auto add-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Current Hosting
                            </button>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-search-listing  w-auto add-listing" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                Arriving Soon
                            </button>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-search-listing  w-auto add-listing" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                Upcoming
                            </button>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-search-listing  w-auto add-listing" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                Pending Review
                            </button>
                        </div>
                    </div>



                </div>
                <div className='container-fluid p-5'>
                    <div className='table-responsive'>
                        <table className="table table-hover">
                            <thead>
                                <tr>

                                    <th scope="col">Status</th>
                                    <th scope="col">Guests</th>
                                    <th scope="col">Dates</th>
                                    <th scope="col">Booked</th>
                                    <th scope="col">Earning</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='d-flex gap-2 '>
                                            <div>
                                                <h3 className='listing-property-text mt-3'>Confirmed</h3>




                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        <div className='d-flex gap-1 flex-column'>
                                            <p className='mb-0 publish-guest-name'>Ali khan</p>
                                            <p className='publish-guest-number'>2 Adults <br /> 1 child</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex gap-1 instant-book-table'>
                                            <p>2 -5 nov,2023</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex gap-1'>
                                            <p> 23 Oct,2023</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='instant-book-table'>
                                            <p>$ 300</p>
                                        </div>


                                    </td>
                                    <td>
                                        <div className='d-flex gap-1 '>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                                   Details
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Call</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Send message</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Email</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Send or request money</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Canel</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>


                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <div className='container'>
                <div>
                    <h2 className='welcome-title mt-4 mb-5'>Tips:</h2>
                </div>
                <div className='d-flex gap-3 flex-column flex-md-row  justify-content-start align-items-center'>

                    <div className="card card-width " >
                        <img className="card-img-top img-fluid tip-card" src="/images/pricing.jpg" />
                        <h5 className="card-title text-center">How to get paid?</h5>


                    </div>
                    <div className="card card-width" >
                        <img className="card-img-top img-fluid tip-card" src="/images/setprice.jpg" />
                        <h5 className="card-title text-center">How to setup pricing strategy</h5>


                    </div>
                    <div className="card card-width" >
                        <img className="card-img-top img-fluid tip-card" src="/images/housing.jpg" />
                        <h5 className="card-title text-center">How to Prepare House?</h5>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AdditionalSteps;