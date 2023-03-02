import React from 'react';
import ManageAccountHeader from '../components/Accounts/manageAccountHeader';
import PublishStep from '../components/Publish/published';
import Footer from '../components/Navigation/footer/footer';
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