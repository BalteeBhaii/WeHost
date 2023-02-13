import React from "react";
import Header from "../components/header/header";
import Destination from "../components/destination/destination";
import LocationModal from "../components/LocationModal/LocationModal";
import GuestModal from "../components/GuestModal/GuestModal";
import FilterModal from "../components/Filter/filter";
import Footer from "../components/footer/footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Destination />
      <LocationModal />
      <GuestModal />
      <FilterModal />
      <Footer />
    </>
  );
};

export default HomePage;
