import React from 'react';
import Help from '../../components/Help/help';
import { useState, useEffect, timeout } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {userInfo} from '../../components/Utilities/user/userInfoSlice';
import { listingData } from '../../components/Utilities/listing/listingReducer';

const HelpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const [reservationNumber, setReservationNumber] = useState('');
    const [checinDate, setChecinDate] = useState('');
    const [submitError, setSubmitError] = useState('');

    const helpSubmitHandler = (event) => {
        if(!name || !email || !phone || !subject || !message || !type || !reservationNumber || !checinDate){
            return setSubmitError('All the fields are required!');
        }

        setSubmitError(0);
    }

    const dispatch = useDispatch();

    
    const action = (key, value) => {
        return { type: key, payload: value };
    }

    let name1 = useSelector((el)=> el);
    
    const handleClick = () => {
        dispatch(listingData({
            key: ['title', 'desc'],
            value: ['test title', 'test desc'],
        }));

        console.log(name1.listing);

    }

        

    return (
        <>
            <Help setName={setName} setEmail={setEmail} setPhone={setPhone} setSubject={setSubject} setMessage={setMessage} setType={setType} setReservationNumber={setReservationNumber} setChecinDate={setChecinDate} helpSubmitHandler={helpSubmitHandler} submitError={submitError} />
        </>
    );
}

export default HelpPage;
