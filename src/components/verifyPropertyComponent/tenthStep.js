import { event } from 'jquery';
import React, { useState } from 'react';
const TenthStep = ({id, setId}) => {
    const [title, setTitle] = useState('');
    const [description, setDiscription] = useState('')
    const handleInputChange = (event) => {
        setTitle(event.target.value);
        setId(true);
        console.log(title)
    }
    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>Add a title and a perfect description which explain your house</h3>
                <h4 className='mt-4'>Write your title here </h4>
                <div className="input-group-prepend property-title-field">
                <input type="text" className="form-control shadow-none" onChange={(event)=> {setTitle(event.target.value); setId(true)}} value={title} aria-label="Username" aria-describedby="basic-addon1"/>
                
                </div>
                <h4 className='mt-4'>Write your description here which tell us about your house </h4>
                <div className="input-group property-title-field">
                    <textarea className="form-control shadow-none" onChange={(e) => {setDiscription(e.target.value); setId(true)}} aria-label="With textarea" maxlength="100"></textarea>
                
                </div>
                <h4 className='mt-2'>0/100</h4>
                <h3 className='verify-2nd-title my-3'>Which type of guest can book property?</h3>
                <div class="dropdown">
                    <button class="btn border border-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Guest Type
                    </button>
                    <ul class="dropdown-menu">
                        <li>all-guests</li>
                        <li>experienced-guests</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TenthStep;