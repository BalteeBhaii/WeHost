import React, { useState } from 'react';
const Languages = ({ loginModel, setLoginModel }) => {
    const [lang, setLang] = useState([
        'English',
        'Azərbaycan dili',
        'Bahasa Indonesia',
        'Bosanski',
        'Català',
        'Čeština',
        'Crnogorski',
        'Dansk',
        'Deutsch',
        'Deutsch',
        'Eesti',
        'Español',
        'Français',
        'Gaeilge',
        'Hrvatski',
        'isiXhosa',
        'isiZulu',
        'Latviešu',
        'Nederlands',
        'Română',
        'Shqip',
    ]);
    const [region, setRegion] = useState([
        'United States',
        'Azərbaycan',
        'Indonesia',
        'Bosna i Hercegovina',
        'Espanya',
        'Česká republika',
        'Crna Gora',
        'Danmark',
        'Deutschland',
        'Deutschland',
        'Eesti',
        'Chilie',
        'France',
        'Eire',
        'Hrvatski',
        'isiXhosa',
        'isiZulu',
        'Latviešu',
        'Nederlands',
        'Română',
        'Shqip',
    ])
    console.log("hello g", loginModel)
    return (
        <>
            {
                (loginModel) &&
                (<div className='modal-background text-black p-3' style={{ zIndex: 100, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <div class="modal-dialog modal-dialog-centered bg-white">
                        <div class="modal-content ">
                            <div class="modal-header">
                                <h5 class="modal-title">Language and region</h5>
                                <button type="button" class="btn-close" ></button>
                            </div>
                            <hr className='m-0' />
                            <div class="modal-body">
                                <div className='container' >
                                    <p>Choose a language and region</p>
                                    <div className='d-flex flex-wrap justify-content-start'>
                                        {lang.map((la, index) => {
                                            return(
                                                <div className='text-muted shadow-sm rounded-3 m-1 px-3 pt-2 fw-normal' style={{width: 220}}>
                                                    <h6 style={{fontSize: '14px'}}>{la}</h6>
                                                    <h6 style={{fontSize: '13px'}}>{region[index]}</h6>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </>
    );
}

export default Languages;