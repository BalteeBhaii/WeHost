import React from 'react';

const Notifications = () => {
    return (
        <>
            <div className='container'>
                <h3 className='title-account-page mb-0 mt-5'>Notification</h3>
                <div className=' row  mt-4'>
                    <div className='col-12 col-md-8 '>
                        <p>Check your booking and account activity, as well as learn about key weHost regulations.</p>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span>Account activity </span>
                                </div>
                                <div style={{ color: '#0D7BC4' }}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4 className='mx-1'>Email and sms</h4>
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span>Listing activity </span>
                                </div>
                                <div style={{ color: '#0D7BC4' }}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4 className='mx-1'>Email and sms</h4>
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span>Guest Policies </span>
                                </div>
                                <div style={{ color: '#0D7BC4' }}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4 className='mx-1'>Email and sms</h4>
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span>Host Policies </span>
                                </div>
                                <div style={{ color: '#0D7BC4' }}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4 className='mx-1'>Email and sms</h4>
                            <hr></hr>
                        </div>

                    </div>
                    <div className='col-12 col-md-4 border information-card'>
                        <div className='mt-3' >
                            <p className='recieve-title'>Where do you want to
                                receive text messages?</p>
                        </div>
                        <p className=' mt-2 '>You accept to receive autodialed promotional
                            messages from weHost and weHost partners
                            by checking an SMS box.</p>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone Number" />
                        <p className='mt-2'>For more Information contact us at number send Text to 1234 and if you want to stop
                            notification just text us STOP to 1234 and you will no longer receive notification </p>

                    </div>

                    <div className='col-12 col-md-8 m-0'>
                        <div>
                            <h3 className='title-account-page '>Reminder</h3>
                            <p className='mt-2'>Get notifications about your reservations, listings, and account activities.</p>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span>Reminder </span>
                                </div>
                                <div style={{ color: '#0D7BC4' }}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4 className='mx-1'>Email and sms</h4>
                            <hr></hr>
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span>Guests and Host Messages</span>
                                </div>
                                <div style={{ color: '#0D7BC4' }}>
                                    <i className="bi bi-pencil-square pe-1"></i><span>Edit</span>
                                </div>
                            </div>
                            <h4 className='mx-1'>Email and sms</h4>
                            <hr></hr>
                        </div>





                    </div>


                </div>
            </div>
        </>
    );
}

export default Notifications;