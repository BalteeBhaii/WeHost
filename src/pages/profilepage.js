import React from "react";
import Footer from "../components/Partials/footer/footer";
import ManageAccountHeader from '../components/Host/Account/manageAccountHeader';
import ManageAccount from "../components/Host/Account/manageAccount";
import ProfileInfo from "../components/Host/Account/profileInfo";

const ProfilePage = ()=>{
    return(
        <>
        <ManageAccountHeader/>
       <ProfileInfo/>
        <Footer/>
        </>
    )
}

export default ProfilePage;