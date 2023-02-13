import React from 'react'
import Header from '../components/header/header';
import Destination from '../components/destination/destination';
import LocationModal from '../components/LocationModal/LocationModal';
import GuestModal from '../components/GuestModal/GuestModal';
import FilterModal from '../components/Filter/filter';

const HomePage = () => {
    return ( 
        <>
        <Header/>
        <Destination/>
        <LocationModal/>
        <GuestModal/>
        <FilterModal/>
        </>
     );
}
 
export default HomePage;