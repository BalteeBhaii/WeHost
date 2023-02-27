import React from "react";
import Footer from "../components/Navigation/footer/footer";
import ManageAccountHeader from "../components/Accounts/manageAccountHeader";
import ManageAccount from "../components/Accounts/manageAccount";

const AccountDashboardPage = ()=>{
    return(
        <>
        <ManageAccountHeader/>
        <ManageAccount/>
        <Footer/>
        </>
    )
}

export default AccountDashboardPage;