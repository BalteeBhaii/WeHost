import React from "react";
import Footer from "../components/Navigation/footer/footer";
import ManageAccountHeader from "../components/Accounts/manageAccountHeader";
import ManageAccount from "../components/Accounts/manageAccount";
import ProfileInfo from "../components/Accounts/profileInfo";

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