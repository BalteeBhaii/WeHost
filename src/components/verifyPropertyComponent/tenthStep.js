import React from 'react';
const TenthStep = () => {
    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>Add a title and a perfect description which explain your house</h3>
                <h4 className='mt-4'>Write your title here </h4>
                <div class="input-group-prepend property-title-field">
                <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                
                </div>
                <h4 className='mt-4'>Write your description here which tell us about your house </h4>
                <div class="input-group property-title-field">
                <textarea class="form-control" aria-label="With textarea" maxlength="100"></textarea>
                
                </div>
                <h4 className='mt-2'>0/100</h4>
            </div>
        </>
    );
}

export default TenthStep;