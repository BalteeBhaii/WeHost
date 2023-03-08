import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ThirdStep = ({ id, setId, categories, listingCompleteData, setListingCompleteData }) => {
    const [placeCatagoryId, setPlaceCatagoryId] = useState(null);
    const [placeTypes, setPlaceTypes] = useState([])
    const [placeCatagory, setPlaceCatagory] = useState([])

    const setCategory = (event, id) => {
        const parentEl = event.nativeEvent.target.closest('.type-box');
        if (!parentEl) return;

        const categoryEls = document.querySelectorAll('.type-box');
        categoryEls.forEach((el) => el.classList.remove('active-category'));
        parentEl.classList.add('active-category');


        let data = listingCompleteData;
        data.category_id = id;
        setListingCompleteData(data);
        localStorage.setItem('listing_data', JSON.stringify(data));
        setId(true);
    }

    useEffect(() => {
        setPlaceCatagoryId(localStorage.getItem('place_type_id'));

        // setPlaceCatagory(categories)
        for(const category of categories){
            if(category.id === JSON.parse(localStorage.listing_data).place_type_id){
                setPlaceTypes(() => category.place_types)
                break;
            }
        }
    }, [])
    console.log(placeTypes)

    return (
        <>
            <div className='container'>
                <h3 className='verify-2nd-title mb-0 mt-5'>What are you offering to guest ?</h3>
                <div className='verify-2nd-list-items row mt-4'>
                    <div className='verify-2nd-list-items-1st-column col-md-6 col-sm-12 row'>
                        {placeTypes.map((item) => {
                            return(

                                <div onClick={(event)=>setCategory(event, item.id)} className='col-12 col-lg-9 col-md-9 col-sm-9 col-9 verify-2nd-list-item-holder'>
                                    <div className='type-box verify-2nd-list-item border py-3 mb-3'>
                                        <div className="verify-2nd-list-item-main gap-4 d-flex">
                                            <img className="verify-3rd-list-item-main-icon" src='/images/mansion.png' />

                                            <div className='row'>
                                                <p className='mb-0'>{item.name}</p>
                                                <p className="entire-place-text">{item.description}</p>
                                                <input type={'radio'} name='type' className='d-none' value={'entire place'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className='col-12 col-lg-9 col-md-9 col-sm-9 col-9 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='type-box verify-2nd-list-item border py-3 mb-3'>
                                <div className="verify-2nd-list-item-main gap-4 d-flex">
                                    <img className="verify-3rd-list-item-main-icon" src='/images/privateroom.png' />

                                    <div className='row'>
                                        <p className='mb-0'>Private Room static</p>
                                        <p className="entire-place-text">Offer them single room of yours</p>
                                        <input type={'radio'} name='type' className='d-none' value={'private room'} />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className='col-12 col-lg-9 col-md-9 col-sm-9 col-9 verify-2nd-list-item-holder'>
                            <div onClick={setCategory} className='type-box verify-2nd-list-item border py-3 mb-3'>
                            <div className="verify-2nd-list-item-main gap-4 d-flex">
                                <img className="verify-3rd-list-item-main-icon"   src='/images/sharedroom.png' /> 
                                <div className='row'>
                                    <p className='mb-0'>Shared Room</p>
                                    <p className="entire-place-text">Offer them to share room</p>
                                    <input type={'radio'} name= 'type' className='d-none' value={'Shared room'}/>
                                    </div>                              
                                </div>
                            </div>
                        </div>                     */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThirdStep;