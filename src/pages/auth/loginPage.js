import React, { useState, useMemo, useEffect } from 'react';
import Select from "react-select";
import countryList from "react-select-country-list";
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../features/user/userSlice';
import { userInfo } from '../../features/user/userInfoSlice';
import axios from 'axios';
import Login from '../../components/Auth/Login/login';
const LogInPage = (props) => {

    return (<>
        <Login isLogin={props.isLogin} />
    </>);
}

export default LogInPage;