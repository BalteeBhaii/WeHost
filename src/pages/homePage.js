import React from 'react'
import Header from '../components/Navigation/header/header'
import Destination from '../components/homePageComponents/destination/destination';
import Explore from '../components/homePageComponents/explore/explore';
import Services from '../components/homePageComponents/services/services';
import BestPlace from '../components/homePageComponents/bestPlace/bestPlace';
import RentalIncome from '../components/homePageComponents/rentalIncome/rentalIncome';
const HomePage = () => {
    return ( 
        <>
        <Header/>
        <Destination/>
        <Explore/>
        <Services/>
        <BestPlace/>
        <RentalIncome/>
        </>
     );
}
 
export default HomePage;