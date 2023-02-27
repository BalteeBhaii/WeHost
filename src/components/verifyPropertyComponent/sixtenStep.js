import React from 'react';
const SixTenStep = () => {
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='mb-4'>
                        <h5>We are almost done</h5>
                        <p className='fs-6 text-muted'>Please provide us your details</p>
                    </div>
                    <div className='d-flex mb-2'>
                        <input className='form-control me-1 rounded-0' type='text' placeholder='First Name'/>
                        <input className='form-control rounded-0' type='text' placeholder='Last Name'/>
                    </div>
                        <input className='form-control mb-2 rounded-0' type='number' placeholder='Phone Number'/>
                        <input className='form-control mb-2 rounded-0' type='number' placeholder='Cnic Number'/>
                        <input type='text' className='form-control mb-2 rounded-0' placeholder='Region'/>
                        <div className="input-group mb-2">
                            <input type="Date" className="form-control rounded-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <span className='input-group-text bg-white rounded-0'>Date of birth</span>
                        </div>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control rounded-0" placeholder="Upload your photo here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary border px-3 rounded-0" type="button" id="button-addon2">Upload</button>
                        </div>
                        <div class="d-flex align-items-center" role="alert">
                            <i class="bi bi-exclamation-circle pe-2"></i>
                            <div>Please provide us clear photo of your face</div>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default SixTenStep;