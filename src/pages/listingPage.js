import React from 'react';
import ManageAccountHeader from '../components/Host/Account/manageAccountHeader';
import ListingStep from '../components/Publish/listing';
import Footer from '../components/Partials/footer/footer';
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