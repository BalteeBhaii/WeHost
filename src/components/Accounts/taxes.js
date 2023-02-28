import React from 'react';
import ManageAccountHeader from './manageAccountHeader';
import Footer from '../Navigation/footer/footer';
const Taxes = () => {
    return (
        <>
            <ManageAccountHeader />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-6'>
                        <div className='mb-5'>
                            <h1 className='title-account-page' >Taxes</h1>
                            <h3 className='mt-2 tax-information-title'>Tax Information</h3>
                            <p>Most nations demand tax information if the taxpayer is a resident, Host or Co-Host, or both</p>
                            <button type="submit" class="btn add-mail-btn text-white rounded-0">Add tax Info</button>
                        </div>
                        <div>
                            <div>
                                <h3 className='mt-2 tax-information-title'>Value Added Tax (VAT)</h3>
                                <p>You may not be charged VAT on weHost service fees if you are VAT registered if your stay is
                                    for business. VAT is not applicable to US hosts. Discover the VAT regulations for each nation
                                    or area.</p>
                                <button type="submit" class="btn add-mail-btn text-white rounded-0">Add VAT ID Number</button>
                            </div>
                            <div>
                                <h3 className='mt-4 tax-information-title '>Want Some Help?</h3>
                                <p>If you need any help feel free to <span className='tax-info-contact-us'>contact us</span>  !</p>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Taxes;