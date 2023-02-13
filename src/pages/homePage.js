import React from 'react'
import Header from '../components/header/header';
import Destination from '../components/destination/destination';
import Explore from '../components/explore/explore';
import Services from '../components/services/services';
import BestPlace from '../components/bestPlace/bestPlace';
import RentalIncome from '../components/rentalIncome/rentalIncome';
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