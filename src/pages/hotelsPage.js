import React from 'react';
import Hotel from '../components/hotelscomponents/hotel/hotel';
import Header from '../components/Navigation/header/header';
import DesiredHotels from '../components/hotelscomponents/DesiredHotels/desiredHotels';
import SpecificHotel from '../components/hotelscomponents/specificHotel/specificHotel';
import Footer from '../components/Navigation/footer/footer';
const HotelsPage = () => {
    return ( 
        <>
            <Header/>
            <Hotel/>
            <DesiredHotels/>
            <SpecificHotel/>
            <Footer/>
        </> 
    );
}
 
export default HotelsPage;