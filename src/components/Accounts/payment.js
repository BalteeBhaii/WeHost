import React from 'react';
const Payment = () => {
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-md-6 payment-button'>
                    <h1 className='fs-5 fw-bold'>Payment</h1>
                    <div className='my-4'>
                        <h5>Track Payment</h5>
                        <h4>Record each payment and refund you get.</h4>
                        <button className='btn border-0 rounded-0 fw-semibold text-white'>Manage Payment</button>
                    </div>
                    <div className='mb-4'>
                        <h5>Payment Method</h5>
                        <h4>Start planning your subsequent vacation after adding a payment method utilising our safe payment system.</h4>
                        <button className='btn border-0 rounded-0 fw-semibold text-white'>Payment Method</button>
                    </div>
                    <div className='mb-4'>
                        <h5>Gift by WeHost</h5>
                        <h4>Redeem your gift and checkout your account</h4>
                        <button className='btn border-0 rounded-0 fw-semibold text-white'>Redeem</button>
                    </div>
                    <div className='mb-4'>
                        <h5>Coupons</h5>
                        <h4>Save money on your next trip by adding a coupon.</h4>
                        <button className='btn border-0 rounded-0 fw-semibold text-white'>Coupons</button>
                    </div>
                    <h5>Payout</h5>
                    <h4>Specify at least one payout method so we can transfer your money to the correct location.</h4>
                    <button className='btn border-0 rounded-0 fw-semibold text-white'>Setup Payout</button>
                </div>
            </div>
        </div>
     );
}
 
export default Payment;