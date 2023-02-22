import React from 'react';
import Header from '../components/Navigation/header/header';
import Footer from '../components/Navigation/footer/footer';
import SpecificHotel from '../components/hotelscomponents/specificHotel/specificHotel';
import '../globalcss/styles.css';

const SpecificHotelPage = () => {
    return ( 
        <>
            <Header/>
            <SpecificHotel/>
            <Footer/>
        </>
     );
}
 
export default SpecificHotelPage;