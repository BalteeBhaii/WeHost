import './App.css';
import HomePage from './pages/homePage';
import HotelsPage from './pages/hotelsPage';
import SpecificHotelPage from './pages/specificHotelPage';
import CreateListing from './pages/host/listing/createListing';
import WeHostPage from './pages/weHostPage';
import PersonalInfoPage from './pages/personalInfoPage';
import LoginActivityPage from './pages/loginActivityPage';
import SecurityPage from './pages/securityPage';
import PrivacyPage from './pages/PrivacyPage';
import PaymentPage from './pages/paymentPage';
import ProfilePage from './pages/profilepage';
import CouponPage from './pages/couponPage';
import Account from './pages/host/account/account';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldWide from './pages/worldWide';
import BusinessPage from './pages/businesstripPage';
import TaxPage from './pages/taxPage';
import NotificationPage from './pages/notificationPage';
import PublishPage from './pages/publishPage';
import ListingPage from './pages/listingPage';
import LoginPage from './pages/auth/loginPage';
import RegisterPage from './pages/auth/registerPage';
import OtpPage from './pages/otpPage';
import SignupCompletePage from './pages/signupCompletePage';
import CodeModel from './components/Auth/Register/codeModel';
import FinishUpLoging from './components/Auth/Register/finishingUpLoging';
import UserListings from './pages/host/listing/viewListings';
import { useEffect, useState } from 'react';

function App() {
  const [authToken, setAuthToken] = useState(null);

  useEffect(()=>{
    setAuthToken(JSON.parse(localStorage.getItem('dataKey')));
  }, [])


  const isLogin = () => {
    setAuthToken(JSON.parse(localStorage.getItem('dataKey')));
  }

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path="/hotel" element={<HotelsPage />} />
          <Route exact path="/wehost" element={<WeHostPage />} />
          <Route path="/hotel/:id" element={<SpecificHotelPage />} />
          <Route exact path="/Publish" element={<PublishPage />} />
          <Route exact path="/Listing" element={<ListingPage />} />
          <Route exact path="/login" element={<LoginPage isLogin={isLogin} />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/otp" element={<OtpPage />} />
          <Route exact path="/sign-complete" element={<SignupCompletePage />} />
          <Route exact path="/register/email-confirmation/:id" element={<CodeModel />} />
          <Route exact path="/register/complete/:id" element={<FinishUpLoging />} />

          {/* Host Routes */}
          <Route path='/host'>

            {authToken !== null ?

            <>

              <Route exact index element={<UserListings />} />
              <Route exact path='create/listing' element={<CreateListing />} />
              <Route exact path='listings' element={<UserListings />} />

              {/* Host Account Routes */}
              <Route path='account'>
                <Route exact index element={<Account />} />
                <Route exact path="profile" element={<ProfilePage />} />
                <Route exact path="personal-info" element={<PersonalInfoPage />} />
                <Route exact path="login-activity" element={<LoginActivityPage />} />
                <Route exact path="security" element={<SecurityPage />} />
                <Route exact path="privacy" element={<PrivacyPage />} />
                <Route exact path="payment" element={<PaymentPage />} />
                <Route exact path="notifications" element={<NotificationPage />} />
                <Route exact path="worldwide-interest" element={<WorldWide />} />
                <Route exact path="business" element={<BusinessPage />} />
                <Route exact path="tax" element={<TaxPage />} />
                <Route exact path="coupon" element={<CouponPage />} />
              </Route>
              {/* -------- */}

            </>

            :
            
            <>
              <Route index path='*' element={<LoginPage isLogin={isLogin} />} />
            </>

          }

          </Route>
          {/* -------- */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
