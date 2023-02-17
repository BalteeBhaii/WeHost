import React, {useState} from 'react';
import FinishUpLoging from './finishingUpLoging';
const CodeModal = ({showCodeModel, setShowCodeModal, setShowModal, showModal}) => {
    const [showLoginModel, setShowLoginModal] = useState(false);
    return ( <>
        {(showCodeModel)&&(
            <div className="modal-background" style={{  zIndex: "2000"}}>
                <div className="modal-card">
                    <section className="modal-body my-3">
                    <div className='w-100 text-end'>
                        <button type="button" className="btn-close" onClick={()=>setShowCodeModal(!showCodeModel)}></button>
                    </div>
                        <div className='text-center mb-4'>
                            <h1 className='mb-2'><span >C</span>onfirm your code</h1>
                            <hr className='mb-4'/>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <p>Enter the code we sent over SMS to +92 389081230</p>
                            <input className='form-control border-1 shadow-none signin-input-width mb-5' type="number" placeholder='eg: 6757'/>
                            <hr className=' w-100'/>
                            <button className='btn btn-outline-secondary border-1 fw-semibold' onClick={()=>setShowLoginModal(!showLoginModel)}>
                                Done
                            </button>
                        </div>
                    </section>
                </div>
                <FinishUpLoging 
                    showLoginModel={showLoginModel} 
                    setShowLoginModal={setShowLoginModal}
                    showModal={showModal} 
                    setShowModal={setShowModal}
                    showCodeModel={showCodeModel}
                    setShowCodeModal={setShowCodeModal}
                    />
            </div>
        )}
    </> );
}
 
export default CodeModal;