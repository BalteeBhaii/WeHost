import React, { useState } from 'react';
import './style.css'
import { Form, FormCheck } from 'react-bootstrap';
const FilterModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <>
            <button className="modal-button" onClick={() => setShowModal(true)}>Filter</button>
            {showModal && (
                <div className="modal-background">
                    <div className="modal-card">
                        <header>
                            <p class="headerfilter">Refine Your Search</p>
                            <div className='refineline'>
                            </div>

                        </header>
                        <section className="modal-body">
                            <div class="ml-3">
                                <a href="#">
                                    <i class="bi bi-geo-alt-fill"></i>
                                    <span class="Filtertxt">Location</span>
                                </a></div>
                            <div class="ml-3">
                                <a href="#">
                                    <i class="bi bi-house-door-fill"></i>
                                    <span class="Filtertxt">Type of Place</span>
                                </a>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Entire place"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Private Room"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Shared Room"
                                                type={type}
                                                id={`inline-${type}-3`}
                                            />
                                        </div>
                                    ))}
                                </Form>

                            </div>
                            <div class="ml-3">
                                <a href="#">
                                    <i class="bi bi-cash-coin"></i>
                                    <span class="Filtertxt">Price Range</span> 
                                </a></div>
                                <div class="Ranger">
                                <Form.Range />
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

export default FilterModal;
