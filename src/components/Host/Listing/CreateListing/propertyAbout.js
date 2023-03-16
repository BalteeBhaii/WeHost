import React, { useEffect } from 'react';
const PropertyAbout = ({setId}) => {
    useEffect(()=>{
        setId(true);
    })
    return ( 
        <div className='container'>
            <div className='row align-items-end mt-5'>
                <div className='col-12 col-md-6'>
                    <div className='firstStep-text mb-5'>
                        <h6>First Step: </h6>
                        <h1>Tell us about your place</h1>
                        <h4>
                            We will ask you whatever kind of property 
                            you have in this phase and whether visitors will 
                            book the complete property or simply a room. then 
                            tell us where it is and how many guests can stay there.
                        </h4>
                    </div>
                </div>
                <div className='col-12 col-md-6 d-flex justify-content-md-end justify-content-sm-start'>
                    <div className='firstStep-img'>
                        <img src='/images/eco_house_03.png'/>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default PropertyAbout;