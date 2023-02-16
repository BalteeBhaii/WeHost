import React, { useState } from 'react';
import './style.css'

const GuestModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <>
            <button className="modal-button" onClick={() => setShowModal(true)}>Guest Modal</button>
            {showModal && (
                <div className="modal-background">
                    <div className="modal-card">
                        <section className="modal-body">
                            <div className="counter">
                                <div class="counter-header d-flex justify-content-between">
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
                                <div class="counter-header d-flex justify-content-between">
                                    <span className="counter-header-text d-block">Children</span>
                                   
                                <div className="counter-buttons">
                                    <button className="counter-button" onClick={() => setCount(count - 1)}>-</button>
                                    <span className="counter-header-count">{count}</span>
                                    <button className="counter-button" onClick={() => setCount(count + 1)}>+</button>
                                </div>
                                </div>
                                <span className="counter-text">(0-17 years)</span>
                            </div>
                            <div className="counter">
                                <div class="counter-header d-flex justify-content-between">
                                    <span className="counter-header-text d-block">Pets</span>
                                   
                                <div className="counter-buttons">
                                    <button className="counter-button" onClick={() => setCount(count - 1)}>-</button>
                                    <span className="counter-header-count">{count}</span>
                                    <button className="counter-button" onClick={() => setCount(count + 1)}>+</button>
                                </div>
                                </div>
                               
                            </div>
                        </section>
                        <footer className="modal-footer">
                            <button className="modal-footer-button" onClick={() => setShowModal(false)}>
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
