import React from 'react';
import ManageAccountHeader from './manageAccountHeader';
import Footer from '../Navigation/footer/footer';
const WorldwideInterest = () => {
    return (
        <>
            <ManageAccountHeader />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-6'>
                        <div className='mb-5'>
                            <h1 className='title-account-page' >WorldWide Interests</h1>
                            <h4 className='mt-2'>When you change your currency, the way you perceive
                                pricing changes. With your payments and payouts
                                choices, you may alter how you receive funds. </h4>
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span>Preferred Language  </span>
                                </div>
                                <div style={{ color: '#0D7BC4' }}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>English</h4>
                        </div>
                        <hr />
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span>Preferred Currency  </span>
                                </div>
                                <div style={{ color: '#0D7BC4' }}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>U.S Dollar ($)</h4>
                        </div>
                        <hr />
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span>Preferred TimeZone  </span>
                                </div>
                                <div style={{ color: '#0D7BC4' }}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>(GMT+06:00) Dhaka</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default WorldwideInterest;