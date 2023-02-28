import React from 'react';

const ProfileInfo = () => {
    return (
        <>
            <div className='container'>
                <h3 className='title-account-page mb-0 mt-5'>Profile Information ?</h3>
                <h4 className='mt-2'>Welcome to your Profile</h4>
                <div className=' row  mt-4'>

                    <div className='col-12 col-md-8 '>
                        <img src='/images/profile1.png' />
                        <h4 className='upload-photo mt-2'>Upload Photo</h4>
                    </div>
                    <div className='col-12 col-md-4 border information-card'>
                        <div className='mt-3' >
                            <span className='d-flex gap-2'><img src='/images/shield.png' />Idnentity Verification</span>
                        </div>
                        <p className='idnentity-verfication-text mt-2 '>Use the identity verification badge to
                            prove to others that you are who you
                            say you are.</p>
                            <div className='get-badge-button text-center  pt-3'>
                                <span className=' text-white d-flex gap-2 justify-content-center '><img src='/images/gem.png' />Get badge</span>
                            
                               
                            </div>
                            <hr/>
                            <div className='confirmation-section'>
                                <p className='confirmation-title'>Ali Confirmed</p>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <p className='confirmation-section'>Email Address</p>
                                <i class="confirmation-check bi bi-check-lg"></i>
                            </div>
                            <div className='d-flex justify-content-between '>
                                <p className='confirmation-section'>Phone Number</p>
                                <i class="confirmation-check bi bi-check-lg"></i>
                            </div>
                        
                    </div>
                    <div className='col-12 col-md-8 '>
                        <hr/>
                    <div className='d-flex justify-content-between'>
                        <p className='about-confirmation-text'>About</p>
                        <i class="profile-info-icon bi bi-pencil-square">Edit</i>
                    </div>
                    <div className='about-section-text'>
                        <p>Hello Ali , Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                        <div className='d-flex gap-2 align-items-center '>
                        <img src='/images/live.png' />
                        <p className='m-0 about-text-information' >Lives in Islamabad, Pakistan</p>
                        </div>
                        <div className='d-flex gap-2 align-items-center mt-4 '>
                        <img src='/images/confirmation-work.png' />
                        <p className='m-0 about-text-information' >Works in a Software Company</p>
                        </div>
                        <hr></hr>
                        <div className='d-flex gap-2 align-items-center mt-4 '>
                        <img src='/images/star-fill-review.png' /> 
                        <p className='m-0 Reviews'>1 Review</p>
                        </div>
                        <hr></hr>
                        <p className='join-text'>Joined weHost on 2023</p>
                    </div>

                    
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;