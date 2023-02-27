import React from 'react';

const ProfileInfo = () => {
    return ( 
        <>
          <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>Profile Information ?</h3>
                <h4 className='mt-2'>Welcome to your Profile</h4>
                <div className='verify-2nd-list-items row  mt-4'>
                    <div className='verify-2nd-list-items-1st-column col-md-6 col-sm-12 col-12 row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='px-2  py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className=""   src='/images/profile1.png' />
                                </span>   
                                <div className='col-lg-6 align-item-center'>
                            <p className='upload-photo mt-2 text-center'>Upload Photo</p>
                            </div>                             
                            </div>
                           <hr/>
                        </div>
                        
                        <div className='col-lg-7 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item py-3 mb-3'>
                                <h3>About</h3>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className="verify-2nd-list-item-main-icon"   src='/images/mansion.png' /> Guest House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className="verify-2nd-list-item-main-icon"  src='/images/tinyhouse.png' />  Tiny House
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div className='verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className="verify-2nd-list-item-main-icon"  src='/images/pool.png' /> Pool Home
                                </span>
                            </div>
                        </div>
                      
                        
                    </div>
                    <div className='col-6 col-md-5 border col-sm-12'>
                   
                    </div>
                </div>
            </div>
        </> 
    );
}
 
export default ProfileInfo;