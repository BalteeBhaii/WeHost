import React, {useState} from 'react';
import FinishUpLoging from './finishingUpLoging';
const CodeModal = ({showCodeModel, setShowCodeModal, showSignupModal, setShowSignupModal, email}) => {
    const [showLoginModel, setShowLoginModal] = useState(false);
    const [code, setCode] = useState(null);
    const [error, setError] = useState('');

    const handleCodeclick = () => {
        if(code){
            setShowLoginModal(!showLoginModel)
        } else{
            setError('"code is required"')
        }
    }
    return ( <>
        {(showCodeModel)&&(
            <div className="modal-background" style={{  zIndex: "2000"}}>
                <div className="modal-card d-flex justify-content-center align-items-center" style={{height: 497}}>
                    <section className="modal-body my-3">
                    <div className='w-100 text-end'>
                        <button type="button" className="btn-close" onClick={()=>setShowCodeModal(!showCodeModel)}></button>
                    </div>
                        <div className='text-center mb-4 sign-in-text-size'>
                            <h1 className='mb-2'>Confirm your code</h1>
                            <hr className='mb-4'/>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <p>Enter the code we sent over SMS to {email}</p>
                            <label className='text-danger'>{error}</label>
                            <input className='form-control border-1 shadow-none signin-input-width mb-5' type="number" onChange={(e)=>setCode(e.target.value)} placeholder='6757'/>
                            <hr className=' w-100'/>
                            <button className='btn btn-outline-secondary border-1 fw-semibold' onClick={handleCodeclick}>
                                Done
                            </button>
                        </div>
                    </section>
                </div>
                <FinishUpLoging 
                    showLoginModel={showLoginModel} 
                    setShowLoginModal={setShowLoginModal}
                    showSignupModal={showSignupModal} 
                    setShowSignupModal={setShowSignupModal}
                    showCodeModel={showCodeModel}
                    setShowCodeModal={setShowCodeModal}
                    email={email}
                    />
            </div>
        )}
    </> );
}
 
export default CodeModal;