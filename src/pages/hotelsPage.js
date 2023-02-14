import React from 'react';
import Hotel from '../components/hotelscomponents/hotel/hotel';
import Header from '../components/Navigation/header/header';
import DesiredHotels from '../components/hotelscomponents/DesiredHotels/desiredHotels';
import SpecificHotel from '../components/hotelscomponents/specificHotel/specificHotel';
const HotelsPage = () => {
    return ( 
        <>
            <Header/>
            <Hotel/>
            <DesiredHotels/>
            <SpecificHotel/>
        </> 
    );
}
 
export default HotelsPage;