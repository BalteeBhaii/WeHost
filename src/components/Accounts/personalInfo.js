import React from 'react';
import ManageAccountHeader from './manageAccountHeader';
import Footer from '../Navigation/footer/footer';
const PerosnalInfo = () => {
    return ( 
        <>
            <ManageAccountHeader/>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-6'>
                        <div className='mb-5'>
                            <h1>Personal Information</h1>
                            <h4>Here are your personal information </h4>
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className="bi bi-person"></i> <span>Profile Name: </span>
                                </div>
                                <div style={{color: '#0D7BC4'}}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>Ali Khan</h4>
                        </div>
                        <hr/>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <i className="bi pe-1 bi-envelope-fill"></i> <span>Email Address: </span>
                                </div>
                                <div style={{color: '#0D7BC4'}}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>Alikhanxyz@gmail.com</h4>
                        </div>
                        <hr/>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <i className="bi pe-1 bi-phone"></i><span>Phone Number: </span>
                                </div>
                                <div style={{color: '#0D7BC4'}}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>+92*********12</h4>
                        </div>
                        <hr/>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className="bi pe-1 bi-person-vcard"></i><span>Cnic Number(Gov. ID): </span>
                                </div>
                                <div style={{color: '#0D7BC4'}}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>37**********2</h4>
                        </div>
                        <hr/>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className="bi pe-1 bi-geo-alt"></i><span>Address: </span>
                                </div>
                                <div style={{color: '#0D7BC4'}}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>Not provided yet</h4>
                        </div>
                        <hr/>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className="bi pe-1 bi-balloon-fill"></i><span>Date of birth: </span>
                                </div>
                                <div style={{color: '#0D7BC4'}}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>04/05/1998</h4>
                        </div>
                        <hr/>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className="bi pe-1 bi-telephone"></i><span>Emergency Contact: </span>
                                </div>
                                <div style={{color: '#0D7BC4'}}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4>Ali Khan</h4>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default PerosnalInfo;