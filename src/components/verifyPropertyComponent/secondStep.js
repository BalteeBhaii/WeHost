import React from 'react';
const SecondStep = () => {
    const setCategory = (event) => {
        // console.log(event.nativeEvent)
        // console.log(document.querySelector('div'))

        // const parentEl= event.nativeEvent.target;
        // // parentEl.classList.add('active-category');
        // if (parentEl.classList.contains('category-box')){
        //     parentEl.classList.add('active-category');
        // }else{
        //     parentEl.closest('.category-box').classList.add('active-category');
        // }
        const parentEl = event.nativeEvent.target.closest('.category-box');
        if (!parentEl) return;
      
        const categoryEls = document.querySelectorAll('.category-box');
        categoryEls.forEach((el) => el.classList.remove('active-category'));
        parentEl.classList.add('active-category');
    }
    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>What Kind of Property Do You Own ?</h3>
                <div className='verify-2nd-list-items row  mt-4'>
                    <div className='verify-2nd-list-items-1st-column col-md-6 col-sm-12 col-12 row'>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div  onClick={setCategory}  className='category-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i className="verify-2nd-list-item-main-icon bi bi-house"></i> House
                                <input type={'radio'} name= 'category' className='d-none' value={'house'}/>
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i className="verify-2nd-list-item-main-icon bi bi-building"></i> Apartment
                                <input type={'radio'} name= 'category' className='d-none' value={'apartment'}/>
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <i className="verify-2nd-list-item-main-icon bi bi-buildings"></i> Hotel
                                <input type={'radio'} name= 'category' className='d-none' value={'hotel'}/>
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className="verify-2nd-list-item-main-icon"   src='/images/mansion.png' /> Guest House
                                <input type={'radio'} name= 'category' className='d-none' value={'guest house'}/>
                                </span>
                            </div>
                        </div>
                        <div onClick={setCategory} className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div  className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className="verify-2nd-list-item-main-icon"  src='/images/tinyhouse.png' />  Tiny House
                                <input type={'radio'} name= 'category' className='d-none' value={'tiny house'}/>
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                                <span className='verify-2nd-list-item-main'>
                                <img className="verify-2nd-list-item-main-icon"  src='/images/pool.png' /> Pool Home
                                <input type={'radio'} name= 'category' className='d-none' value={'pool home'}/>
                                </span>
                            </div>
                        </div>
                      
                        
                    </div>
                    <div className='col-12 col-md-5 col-lg-6'>
                        <img className='verify-2nd-image' src='/images/propertyhouse.png' alt="" />
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default SecondStep;