import React from 'react';
import ManageAccountHeader from '../components/Accounts/manageAccountHeader';
import ListingStep from '../components/Publish/listing';
import Footer from '../components/Navigation/footer/footer';
const ListingPage = () => {
    return ( 
        <div>
            <ManageAccountHeader/>
            <ListingStep/>
            <Footer/>
        </div>
     );
}
 
export default ListingPage;