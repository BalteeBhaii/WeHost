import React from 'react';
const SixTenStep = ({id, setId}) => {
    const handleSubmit = () => {

    }
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-md-8 col-lg-5'>
                    <div className='mb-4'>
                        <h5>We are almost done</h5>
                        <p className='fs-6 text-muted'>Please provide us your details</p>
                    </div>
                    <form>
                        <div className='d-flex mb-2'>
                            <input className='form-control me-1 rounded-0 shadow-none' type='text' placeholder='First Name' required/>
                            <input className='form-control rounded-0 shadow-none' type='text' placeholder='Last Name' required/>
                        </div>
                        <input className='form-control mb-2 rounded-0 shadow-none' type='number' placeholder='Phone Number' required/>
                        <input className='form-control mb-2 rounded-0 shadow-none' type='number' placeholder='Cnic Number' required/>
                        <input type='text' className='form-control mb-2 rounded-0 shadow-none' placeholder='Region' required/>
                        <div className="input-group mb-2">
                            <input type="Date" className="form-control rounded-0 shadow-none" required/>
                            <span className='input-group-text bg-white rounded-0'>Date of birth</span>
                        </div>
                        <div className="input-group mb-2">
                            <input type="file" className="form-control rounded-0 shadow-none" placeholder="Upload your photo here" multiple required/>
                            <button className="btn btn-outline-secondary border px-3 rounded-0" type="button" id="button-addon2">Upload</button>
                        </div>
                       
                        <div className="d-flex align-items-center" role="alert">
                            <i className="bi bi-exclamation-circle pe-2"></i>
                            <div>Please provide us clear photo of your face</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default SixTenStep;