import React from 'react';
const Security = () => {
    return ( 
        <div className='container my-5 security-hr'>
            <h6 className='fw-semibold'>Security</h6>
            <h6 className='mb-4'>Ali here is your security for your account</h6>
            <h6 className='mb-4'>Login: </h6>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-semibold'>Password</h6>
                <div className='text-start security-width'>Change Password</div>
            </div>
            <hr/>
            <div className='d-flex justify-content-between mb-3'>
                <h6 className='fw-semibold'>Social Accounts</h6>
                <div className='text-start security-width'>Link Account</div>
            </div>
            <div className='d-flex justify-content-between mb-2 '>
                <h6>Facebook</h6>
                <div className='text-start security-width'>Connected</div>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Gmail</h6>
                <div className='text-start security-width'>Not Connected</div>
            </div>
            <hr/>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-semibold'>Account</h6>
                <div className='text-start security-width text-danger fw-semibold'> <a>Deactivate Account</a></div>
            </div>
        </div>
     );
}
 
export default Security;