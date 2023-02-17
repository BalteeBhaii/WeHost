import React from 'react';
import {useState, useEffect} from 'react';

const Worldwide = () => {
    const [tab, setTab] = useState('winter');
    const [currentTab, setCurrentTab] = useState(0);
    const [previousTab, setPreviousTab] = useState(0);
    
    useEffect(() => {
        let tabTitles = document.getElementsByClassName("worldwide-tab-title");
        let tabItems = document.getElementsByClassName("worldwide-tab-options");
        
        if(currentTab !== previousTab){
            tabTitles[previousTab].classList.remove("worldwide-tab-active");
            tabTitles[currentTab].classList.add("worldwide-tab-active");
            tabItems[previousTab].classList.remove("worldwide-tab-options-active");
            tabItems[currentTab].classList.add("worldwide-tab-options-active");
        }
    }, [tab, currentTab]);

    const tabHandler = (event) => {
        setTab(event.target.dataset.index.keyword);
        setPreviousTab(currentTab);
        setCurrentTab(event.target.dataset.index);
    }

    return ( 
        <>
            <div className='container worldwide-section overflow section'>
                <div className='worldwide-main py-5 px-3'>
                    <h1 className='worldwide-section-title section-titles'>Trending in Travel</h1>
                    <div className='worldwide-tabs row mt-4'>
                        <div className='col-3'>
                            <h5 className='worldwide-tab-title worldwide-tab-active' data-index={0} data-keyword='winter' onClick={tabHandler}>Winter Experiences</h5>
                        </div>
                        <div className='col-3'>
                            <h5 className='worldwide-tab-title' data-index={1} data-keyword='places' onClick={tabHandler}>Places to Go</h5>
                        </div>
                        <div className='col-3'>
                            <h5 className='worldwide-tab-title' data-index={2} data-keyword='things' onClick={tabHandler}>Things to Do</h5>
                        </div>
                        <div className='col-3'>
                            <h5 className='worldwide-tab-title' data-index={3} data-keyword='visit' onClick={tabHandler}>Places to Visit</h5>
                        </div>
                    </div>
                    <div className='worldwide-tab-options worldwide-tab-options-active row mt-5 d-flex justify-content-center'>
                        <div className='col-4 text-center'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Colorado Skiing</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>California</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>New York</h5>
                        </div>
                        <div className='col-4'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>South Island</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Paris</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Hawai</h5>
                        </div>
                        <div className='col-4'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Maui</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Bora Bora</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Tahiti</h5>
                        </div>
                    </div>
                    <div className='worldwide-tab-options row mt-5 d-flex justify-content-center'>
                        <div className='col-4 text-center'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>London</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Rome</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Peru</h5>
                        </div>
                        <div className='col-4'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Grand Canyon</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Rome, Italy</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Maui, Hawaii</h5>
                        </div>
                        <div className='col-4'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Istanbul</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>New Zealand</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Cambodia</h5>
                        </div>
                    </div>
                    <div className='worldwide-tab-options row mt-5 d-flex justify-content-center'>
                        <div className='col-4 text-center'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Colorado Skiing</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>California</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>New York</h5>
                        </div>
                        <div className='col-4'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>South Island</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Paris</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Hawai</h5>
                        </div>
                        <div className='col-4'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Maui</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Bora Bora</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Tahiti</h5>
                        </div>
                    </div>
                    <div className='worldwide-tab-options row mt-5 d-flex justify-content-center'>
                        <div className='col-4 text-center'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>London</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Rome</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Peru</h5>
                        </div>
                        <div className='col-4'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Grand Canyon</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Rome, Italy</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Maui, Hawaii</h5>
                        </div>
                        <div className='col-4'>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Istanbul</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>New Zealand</h5>
                            <h5 className='worldwide-tab-option-title mb-4 text-center'>Cambodia</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Worldwide;
