import React from 'react';
const Coupon = () => {
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-lg-8'>
                    <div className='mb-5'>
                        <h1 className='fs-5 fw-bold'>Coupons and credits</h1>
                        <h4>Coupons and credits are credited when your referral it to someone you will receive some gifts</h4>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='p-3 shadow rounded-3 coupon-card'>
                            <h2 className='fs-6 fw-semibold mb-3'>Track your referrals</h2>
                            <div className='d-flex justify-content-between'>
                                <h4>Completed Referrals</h4>
                                <h6 className='fw-semibold'>0</h6>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <h4>Sign ups</h4>
                                <h6 className='fw-semibold'>0</h6>
                            </div>
                            <button className='btn w-100 border border-secondary border-2'>Show more details</button>
                        </div>
                    </div>
                    <hr/>
                    <h2 className='fs-6 fw-semibold'>Most Frequently Asked Questions</h2>
                    <h4 className='mb-4'>Some of the mostly asked questions are:</h4>
                    <h2 className='fs-6 fw-semibold'>I referred a friend but didn't get travel credit!</h2>
                    <hr/>
                    <h4>If the referral is completed after deadline in result of that you will not be entertained and will not receive any credit for that</h4>
                </div>
            </div>
        </div>
    );
}
 
export default Coupon;