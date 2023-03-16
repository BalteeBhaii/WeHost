import React from 'react';
import ManageAccountHeader from '../components/Host/Account/manageAccountHeader';
import PublishStep from '../components/Publish/published';
import Footer from '../components/Partials/footer/footer';
const PublishPage = () => {
    return ( 
        <div>
            <ManageAccountHeader/>
            <PublishStep/>
            <Footer/>
        </div>
     );
}
 
export default PublishPage;