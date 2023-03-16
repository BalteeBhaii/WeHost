import React from 'react';
import ManageAccountHeader from './manageAccountHeader';
const LoginActivity = () => {
    return (
        <>
            <ManageAccountHeader />
            <div className='container mt-5'>
                <div className='my-3'>
                    <h3 className='fs-6 fw-semibold'>Login Activity</h3>
                    <h3 className='fs-6 fw-semibold mb-4'>Where you're logged in</h3>
                </div>
                <div className='my-3'>
                    <div className='mb-2'>
                        <i className="bi bi-geo-alt fw-semibold fs-6"></i><span className='fs-6'>Islamabad, Pakistan</span>
                        <h3 className='fs-6 fw-semibold ms-3' style={{color: '#09BB10'}}>Active Now</h3>
                    </div>
                </div>
                <h5 className='mb-4'>Session Information: </h5>
                <div className='loginInfoImg text-center'>
                    <img className='img-fluid' src='/images/login-activity.png' />
                    <a className='btn mt-2 fs-6 fw-semibold'>Logout</a>
                </div>
            </div>
        </>
    );
}

export default LoginActivity;