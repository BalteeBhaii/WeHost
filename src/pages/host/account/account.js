import React from "react";
import Footer from "../../../components/Partials/footer/footer";
import ManageAccountHeader from "../../../components/Host/Account/manageAccountHeader";
import ManageAccount from "../../../components/Host/Account/manageAccount";

const  Account = ()=>{
    return(
        <>
            <ManageAccountHeader/>
            <ManageAccount/>
            <Footer/>
        </>
    )
}

export default Account;