import React from 'react';
const SixTenStep = ({ url, id, setId, listingCompleteData }) => {

    console.log(listingCompleteData)
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-md-8 col-lg-6'>
                    <div className='mb-4'>
                        <h5>We are almost done, this is time to publish property</h5>
                        {/* <p className='fs-6 text-muted'>Please provide us your details</p> */}
                    </div>
                    <div className='my-5'>
                        <h6>Your property Infromation</h6>
                        <div className="card shadow overflow-hidden rounded-3" style={{ width: 'fit-content' }}>
                            <div className='' style={{ width: 340, height: 300 }}>
                                <img src={url + '../storage/' + listingCompleteData.cover_image} className="w-100 h-100" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">{listingCompleteData.title}</h5>
                                    <span>New</span>
                                </div>
                                <p className="card-text">{listingCompleteData.description}</p>
                                <p>${listingCompleteData.price} night</p>
                            </div>
                        </div>
                    </div>
                    {/* <form>
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
                    </form> */}
                </div>
            </div>
        </div>
    );
}

export default SixTenStep;