import React from 'react';
import ManageAccountHeader from './manageAccountHeader';
import Footer from '../Navigation/footer/footer';
const BusinessTrip = () => {
    return (
        <>
            <ManageAccountHeader />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-6'>
                        <div className='mb-5'>
                            <h1 className='title-account-page' >Business Trip</h1>
                            <h4 className='mt-2'>We'll email work travel receipts to you for convenient expense tracking.
                                To work travels, provide an expenditure code and a purpose for business.
                                Only trips marked for work at checkout are accessible to your employer.</h4>
                        </div>
                        <div>

                            <div>
                                <p className='business-mail-title'>Business Mail  </p>
                                <p className='business-mail-text'>Enter your work email to receive seamless expense reporting and unique
                                    deals on business travels.</p>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1" className='business-mail-title'>Work Mail </label>
                                    <input type="email" className="form-control w-50 mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <button type="submit" className="btn add-mail-btn mt-3 text-white rounded-0">Add Mail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BusinessTrip;