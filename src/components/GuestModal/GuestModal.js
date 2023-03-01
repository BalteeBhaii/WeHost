import React, { useState } from 'react';
// import '../../globalcss/styles.css';
// import './style.css'

const GuestModal = ({show, setShowModal}) => {
    // const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  const [counttwo, setCounttwo] = useState(0);
  const [countthree, setCountthree] = useState(0);

    return (
        <>
            {(show) && (
                <div className="modal-background " style=
                {{  zIndex: "2000"}}>
                    <div className="modal-card">
                        <section className="modal-body">
                            <div className="counter">
                                <div className="counter-header d-flex justify-content-between">
                                    <span className="counter-header-text d-block">Adult</span>
                                   
                                <div className="counter-buttons">
                                    <button className="counter-button" onClick={() => setCount(count - 1)}>-</button>
                                    <span className="counter-header-count">{count}</span>
                                    <button className="counter-button" onClick={() => setCount(count + 1)}>+</button>
                                </div>
                                </div>
                                <span className="counter-text">(18+ years)</span>
                            </div>
                            <div className="counter">
                                <div className="counter-header d-flex justify-content-between">
                                    <span className="counter-header-text d-block">Children</span>
                                   
                                <div className="counter-buttons">
                                    <button className="counter-button" onClick={() => setCounttwo(counttwo - 1)}>-</button>
                                    <span className="counter-header-count">{counttwo}</span>
                                    <button className="counter-button" onClick={() => setCounttwo(counttwo + 1)}>+</button>
                                </div>
                                </div>
                                <span className="counter-text">(0-17 years)</span>
                            </div>
                            <div className="counter">
                                <div className="counter-header d-flex justify-content-between">
                                    <span className="counter-header-text d-block">Pets</span>
                                   
                                <div className="counter-buttons">
                                    <button className="counter-button" onClick={() => setCountthree(countthree - 1)}>-</button>
                                    <span className="counter-header-count">{countthree}</span>
                                    <button className="counter-button" onClick={() => setCountthree(countthree + 1)}>+</button>
                                </div>
                                </div>
                               
                            </div>
                        </section>
                        <footer className="modal-footer">
                            <button className="modal-footer-button" onClick={() => setShowModal(!show)}>
                                Apply
                            </button>
                        </footer>
                    </div>
                </div>
            )}
        </>
    );
};

export default GuestModal;
