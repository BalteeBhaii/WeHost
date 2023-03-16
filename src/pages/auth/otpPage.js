import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CodeModel from '../../components/Auth/Register/codeModel';
const OtpPage = () => {
  const [showLoginModel, setShowLoginModal] = useState(false);
  const [code, setCode] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleCodeclick = (event) => {
    event.preventDefault();
    if (code) {
      navigate("/sign-complete");
    } else {
      setError('"code is required"')
    }
  }
  return (
    <>
      <CodeModel/>
    </>
  );
}

export default OtpPage;