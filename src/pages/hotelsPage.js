import React from 'react';
import Hotel from '../components/hotelscomponents/hotel/hotel';
import Header from '../components/Navigation/header/header';
import DesiredHotels from '../components/hotelscomponents/DesiredHotels/desiredHotels';
import Footer from '../components/Navigation/footer/footer';
import '../globalcss/styles.css';
import { timeout } from 'react';

const HotelsPage = () => {
    const loadedHandler = (event) => {
        setTimeout(() => {
            let notLoaded1 = event.target.parentNode;
            let imgLoaded = event.target.parentNode;
        
            if(imgLoaded){
                imgLoaded.classList.remove("not-loaded");
            }
    
            if(notLoaded1 && notLoaded1.classList.contains("not-loaded")){
                notLoaded1.classList.remove("not-loaded")
            }
        }, 500);
      }

    const textLoadedHandler = (event) => {
        setTimeout(() => {
            let parent = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let textsLoaded = parent.querySelectorAll(".not-loaded");

            if(textsLoaded){
                for(let item of textsLoaded){
                item.classList.remove("not-loaded");
                }
            }
        }, 500);
    }

    return ( 
        <>
            <Header />
            <Hotel loadedHandler={loadedHandler} />
            <DesiredHotels textLoadedHandler={textLoadedHandler} />
            <Footer />
        </> 
    );
}
 
export default HotelsPage;