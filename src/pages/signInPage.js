import React, { useState, useMemo } from 'react';
import Select from "react-select";
import countryList from "react-select-country-list";
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../features/user/userSlice';
import { userInfo } from '../features/user/userInfoSlice';
import axios from 'axios';
import SingIn from '../components/signIn/signin';
const SingInPage = () => {
    return (<>
        <SingIn />
    </>);
}

export default SingInPage;