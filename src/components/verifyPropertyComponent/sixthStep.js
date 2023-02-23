import React from 'react';
import { useState } from 'react';
const SixthStep = () => {
    const [count, setCount] = useState(0);
    const [counttwo, setCounttwo] = useState(0);
    const [countthree, setCountthree] = useState(0);
    const [countforth, setCountforth] = useState(0);
    return (
        <>
             <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>Some more details about your property. </h3>
                <h4 className='verify-2nd-title mb-0 mt-2'>Can you tell us that: </h4>
                <div class="counter-header d-flex justify-content-between">
                                    <span className="counter-header-text d-block ">Guest</span>
                                   
                                <div className="counter-buttons">
                                    <button className="counter-button" onClick={() => setCount(count - 1)}>-</button>
                                    <span className="counter-header-count">{count}</span>
                                    <button className="counter-button" onClick={() => setCount(count + 1)}>+</button>

                                </div>                                
                                </div>
                                <span className="counter-text">(18+ years)</span>
                                <div class="counter-header d-flex justify-content-between mt-2">
                                    <span className="counter-header-text d-block">Bedrooms</span>
                                   
                                <div className="counter-buttons">
                                    <button className="counter-button" onClick={() => setCounttwo(counttwo - 1)}>-</button>
                                    <span className="counter-header-count">{counttwo}</span>
                                    <button className="counter-button" onClick={() => setCounttwo(counttwo + 1)}>+</button>
                                </div>
                                </div>
                                <div class="counter-header d-flex justify-content-between mt-2">
                                    <span className="counter-header-text d-block">Bathroom</span>
                                   
                                <div className="counter-buttons">
                                    <button className="counter-button" onClick={() => setCountthree(countthree - 1)}>-</button>
                                    <span className="counter-header-count">{countthree}</span>
                                    <button className="counter-button" onClick={() => setCountthree(countthree + 1)}>+</button>
                                </div>
                                </div>
                                <div class="counter-header d-flex justify-content-between mt-2">
                                    <span className="counter-header-text d-block">Beds</span>
                                   
                                <div className="counter-buttons">
                                    <button className="counter-button" onClick={() => setCountforth(countforth - 1)}>-</button>
                                    <span className="counter-header-count">{countforth}</span>
                                    <button className="counter-button" onClick={() => setCountforth(countforth + 1)}>+</button>
                                </div>
                                </div>
            </div>
        </>
    );
}

export default SixthStep;