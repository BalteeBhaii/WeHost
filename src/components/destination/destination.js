import React from 'react';
import './destination.css'

const Destination = () => {
    return ( 
    <>
    <div>
    <div className='contaner bg-overlay'>
        
        <div className='center'>
            <h1 className='fw-bold text' style={{fontSize:'82px' }}><span >Let's Find Your Desired Place Together</span></h1>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><img src='/images/whereto.svg' alt='location' /></span>
                            </div>
                            <input type="text" className='form-control rounded-right mb-3 fs-3' placeholder='Where to?' style={{height: 56}} aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mb-3'>
                    <div className='row '>
                        <div className='col search-col'>

                            <input className='form-control-lg' />
                        </div>
                        <div className='col search-col'>

                            <input className='form-control-lg' />
                        </div>
                        <div className='col search-col'>

                            <input className='form-control-lg' />
                        </div>
                    </div>
                    </div>
                    <div className='row'>
                        <div className='col'>

                        <input className='w-100 rounded' style={{height: 60}}/>
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
 
export default Destination;