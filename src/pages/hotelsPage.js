import React from 'react';
import Hotel from '../components/hotelscomponents/hotel/hotel';
import Header from '../components/Navigation/header/header';
import DesiredHotels from '../components/hotelscomponents/DesiredHotels/desiredHotels';
import Footer from '../components/footer/footer'
import '../globalcss/styles.css';

const HotelsPage = () => {
    return ( 
        <>
            <Header/>
            <Hotel/>
            <DesiredHotels/>
            <Footer/>
        </> 
    );
}
 
export default HotelsPage;