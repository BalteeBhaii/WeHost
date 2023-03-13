import React from 'react';
import Header from '../components/Navigation/header/header';
import Footer from '../components/Navigation/footer/footer';
import SpecificHotel from '../components/hotelscomponents/specificHotel/specificHotel';
import '../globalcss/styles.css';
import { timeout } from 'react';

const SpecificHotelPage = () => {
    const loadedHandler = (event) => {
        setTimeout(() => {
          let notLoaded = event.target.parentNode;
    
          if(notLoaded.classList.contains("not-loaded")){
            notLoaded.classList.remove("not-loaded")
          }
        }, 500);
      }

    return ( 
        <>
            <Header/>
            <SpecificHotel loadedHandler={loadedHandler} />
            <Footer/>
        </>
     );
}
 
export default SpecificHotelPage;