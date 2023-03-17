import React from 'react';
import Header from '../Partials/header/header';
import Footers from '../Partials/footer/footer';

const Help = () => {
    return (
        <>
            <Header />

            <div className='container help-main mt-5'>
                <div className='help-content'>
                    <div className='help-content-text'>
                        <h1 className='help-title mb-0'>We're Here to Help</h1>
                        <span className='help-subtitle'>Let us know how to get in touch.</span>
                    </div>
                    <div className='help-hr px-2'>
                        <hr />
                    </div>
                    <div className='help-content-form'>
                        <form className='help-form'>
                            <div className='row'>
                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="text" className="form-control shadow-none help-form-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control shadow-none help-form-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                        <input type="number" className="form-control shadow-none help-form-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Subject</label>
                                        <input type="text" className="form-control shadow-none help-form-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                        <textarea className="form-control help-form-message shadow-none help-form-input" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">What are looking to do ?</label>
                                        <select className="form-select shadow-none help-form-input" aria-label="Default select example">
                                            <option selected>Choose One</option>
                                            <option value="1">Change Date(s)</option>
                                            <option value="2">Add Guest(s)</option>
                                            <option value="3">Cancel Booking</option>
                                            <option value="3">Add Aditional Amenity</option>
                                            <option value="3">Travel Insurance</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Reservation Number</label>
                                        <input type="number" className="form-control shadow-none help-form-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Check In Date</label>
                                        <input type="date" className="form-control shadow-none help-form-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <span className='help-form-description mt-4'>If you originally made your reservation via Airbnb, please visit their website to submit a request. Thank you!</span>

                                <div className='d-flex justify-content-center'>
                                    <button className='help-form-submit-btn mt-4' type='submit'>Submit</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footers />
        </>
    );
}

export default Help;
