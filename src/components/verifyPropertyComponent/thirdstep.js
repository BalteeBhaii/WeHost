import React from 'react';
        
const ThirdStep = ({id, setId}) => {
    const setCategory = (event) => {
        const parentEl = event.nativeEvent.target.closest('.type-box');
        if (!parentEl) return;
      
        const categoryEls = document.querySelectorAll('.type-box');
        categoryEls.forEach((el) => el.classList.remove('active-category'));
        parentEl.classList.add('active-category');
        setId(true);
    }
    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>What are you offering to guest ?</h3>
                <div className='verify-2nd-list-items row mt-4'>
                    <div className='verify-2nd-list-items-1st-column col-md-6 col-sm-12 row'>
                        <div className='col-12 col-lg-9 col-md-9 col-sm-9 col-9 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='type-box verify-2nd-list-item border py-3 mb-3'>
                                <div className="verify-2nd-list-item-main gap-4 d-flex">
                                <img className="verify-3rd-list-item-main-icon"   src='/images/mansion.png' /> 

                                <div className='row'>
                                    <p className='mb-0'>Entire place</p>
                                    <p className="entire-place-text">Offer them entire place of yours</p>
                                    <input type={'radio'} name= 'type' className='d-none' value={'entire place'}/>
                                    </div>                              
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-9 col-md-9 col-sm-9 col-9 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='type-box verify-2nd-list-item border py-3 mb-3'>
                            <div className="verify-2nd-list-item-main gap-4 d-flex">
                                <img className="verify-3rd-list-item-main-icon"   src='/images/privateroom.png' /> 

                                <div className='row'>
                                    <p className='mb-0'>Private Room</p>
                                    <p className="entire-place-text">Offer them single room of yours</p>
                                    <input type={'radio'} name= 'type' className='d-none' value={'private room'}/>
                                    </div>                              
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-9 col-md-9 col-sm-9 col-9 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='type-box verify-2nd-list-item border py-3 mb-3'>
                            <div className="verify-2nd-list-item-main gap-4 d-flex">
                                <img className="verify-3rd-list-item-main-icon"   src='/images/sharedroom.png' /> 
                                <div className='row'>
                                    <p className='mb-0'>Shared Room</p>
                                    <p className="entire-place-text">Offer them to share room</p>
                                    <input type={'radio'} name= 'type' className='d-none' value={'Shared room'}/>
                                    </div>                              
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThirdStep;