import React from 'react';
import Hotel from '../components/hotelscomponents/hotel/hotel';
import Footer from '../components/Partials/footer/footer';
import Header from '../components/Partials/header/header';
import DesiredHotels from '../components/hotelscomponents/DesiredHotels/desiredHotels';
import '../globalcss/styles.css';
import { timeout } from 'react';
import More from '../components/MoreOption/More';

const MoreOption = () => {
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
            <More />
            <Footer />
        </> 
    );
}
 
export default MoreOption;