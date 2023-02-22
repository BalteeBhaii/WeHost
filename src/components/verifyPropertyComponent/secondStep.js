import React from 'react';
import mansion from '../../Assets/mansion.png'
const SecondStep = () => {
    return (
        <div className='row align-items-end mt-5'>
            <div className='col-12 col-md-6'>
                <div className='firstStep-text mb-5'>
                    <h1>What kind of property do you own?</h1>

                </div>

                <div>
                    <ul className=" d-flex justify-content-center align-items-center flex-wrap list-group list-group-horizontal property-type-list">

                        <li className="list-group-item">
                            <button className="p-2 gap-1">
                                <i className="bi bi-house-door"></i>
                                <p className="mb-0 ">Houses</p>
                            </button>

                        </li>
                        <li className="list-group-item">
                            <button className="p-2 gap-1"><i className="bi bi-buildings-fill"></i>
                                <p className="mb-0 ">Apartment</p></button>

                        </li>
                        <li className="list-group-item">
                            <button className="p-2 gap-1"><i className="bi bi-building-fill"></i>
                                <p className="mb-0 " >Hotel</p></button>

                        </li>
                        <li className="list-group-item guesthouse">
                            <button className="gap-1">
                                <img className="guestimg"  style={{ height: '16px'}} src={mansion} />
                                <p className="mb-0 ">Guest House</p>
                            </button>

                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-md-end justify-content-sm-start'>

            </div>

        </div>
    );
}

export default SecondStep;