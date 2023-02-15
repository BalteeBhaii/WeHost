import React from 'react'
import Header from '../components/Navigation/header/header'
import Destination from '../components/homePageComponents/destination/destination';
import LocationModal from "../components/LocationModal/LocationModal";
import GuestModal from "../components/GuestModal/GuestModal";
import FilterModal from "../components/Filter/filter";
import Footer from "../components/footer/footer";
import Explore from '../components/homePageComponents/explore/explore';
import Services from '../components/homePageComponents/services/services';
import BestPlace from '../components/homePageComponents/bestPlace/bestPlace';
import RentalIncome from '../components/homePageComponents/rentalIncome/rentalIncome';
const HomePage = () => {
    return ( 
        <>
        <Header/>
        <LocationModal/>
        <Destination/>
      
        <Explore/>
    
        <Services/>
        <BestPlace/>
        
        <RentalIncome/>
        <Footer/>
        </>
     );
}
 
export default HomePage;
