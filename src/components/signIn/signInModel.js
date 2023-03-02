import React from 'react';
const SignInModel = ({ signInModel, setSigninModel, loginValue }) => {
  return (
    <>
    {(signInModel)&&(
      <div className="modal-background" style={{ zIndex: "1000" }}>
        <div className="modal-card">
          <section className="modal-body my-4">
            <div className='w-100 text-end'>
              <button type="button" className="btn-close"></button>
            </div>
          </section>
        </div>
      </div>
    )}
    </>
  );
}

export default SignInModel;