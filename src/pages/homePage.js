import React from 'react'
import Header from '../components/Partials/header/header'
import Destination from '../components/homePageComponents/destination/destination';
import LocationModal from "../components/LocationModal/LocationModal";
import Explore from '../components/homePageComponents/explore/explore';
import Services from '../components/homePageComponents/services/services';
import BestPlace from '../components/homePageComponents/bestPlace/bestPlace';
import RentalIncome from '../components/homePageComponents/rentalIncome/rentalIncome';
import ThingsToExplore from '../components/homePageComponents/thingsToExplore/thingsToExplore';
import WhatYouWant from '../components/homePageComponents/WhatYouWantTodo/whatYouWant';
import Footer from '../components/Partials/footer/footer';
import Worldwide from '../components/homePageComponents/worldWide/Worldwide';
import Reviews from '../components/homePageComponents/reviews/Reviews';
import '../globalcss/styles.css';
import { timeout } from 'react';

const HomePage = () => {
    const loadedHandler = (event) => {
        setTimeout(() => {
          let notLoaded1 = event.target.parentNode.parentNode.parentNode;
          let notLoaded2 = event.target.parentNode;
    
          if(notLoaded1 && notLoaded1.classList.contains("not-loaded")){
            notLoaded1.classList.remove("not-loaded")
          }
    
          if(notLoaded2 && notLoaded2.classList.contains("not-loaded")){
            notLoaded2.classList.remove("not-loaded")
          }
        }, 500);
    }

    const postLoadedHandler = (event) => {
        setTimeout(() => {
          let parent = event.target.parentNode.parentNode;
          let notLoaded = parent.querySelectorAll(".not-loaded");

          if(notLoaded){
            for(const item of notLoaded){
              if(item.classList.contains("not-loaded")){
                item.classList.remove("not-loaded")
              }
            }
          }
        }, 500);
    }

    return ( 
        <>
        <Header />
        <LocationModal />
        <Destination loadedHandler={loadedHandler} />      
        <Explore loadedHandler={loadedHandler} />    
        <Services />
        <BestPlace />
        <Worldwide />
   
        
        {/* <LocationModal /> */}
        {/* <GuestModal /> */}
        {/* <FilterModal /> */}
        <RentalIncome />
        <ThingsToExplore />
        <WhatYouWant postLoadedHandler={postLoadedHandler} />
        <Reviews />
        <Footer />
        </>
     );
}
 
export default HomePage;
