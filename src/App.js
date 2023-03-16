import './App.css';
import HomePage from './pages/home/homePage';
import HotelsPage from './pages/listing/hotelsPage';
import SpecificHotelPage from './pages/specificHotelPage';
import CreateListing from './pages/host/listing/createListing';
import WeHostPage from './pages/weHostPage';
import PersonalInfoPage from './pages/host/account/personalInfo/personalInfoPage';
import LoginActivityPage from './pages/host/account/loginActivity/loginActivityPage';
import SecurityPage from './pages/host/account/security/securityPage';
import PrivacyPage from './pages/host/account/privacy/PrivacyPage';
import PaymentPage from './pages/host/account/payment/paymentPage';
import ProfilePage from './pages/host/account/profile/profilepage';
import CouponPage from './pages/host/account/coupon/couponPage';
import Account from './pages/host/account/account';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldWide from './pages/host/account/worldwideInterest/worldWide';
import BusinessPage from './pages/host/account/bussiness/businesstripPage';
import TaxPage from './pages/host/account/tax/taxPage';
import NotificationPage from './pages/host/account/notification/notificationPage';
import LoginPage from './pages/auth/loginPage';
import RegisterPage from './pages/auth/registerPage';
import OtpPage from './pages/auth/otpPage';
import SignupCompletePage from './pages/signupCompletePage';
import CodeModel from './components/Auth/Register/codeModel';
import FinishUpLoging from './components/Auth/Register/finishingUpLoging';
import ViewListings from './pages/host/listing/viewListings';
import Page404 from './pages/page404';
import { useEffect, useState } from 'react';
import WorkTogether from './pages/FooterPages/workTogether';
import NewVacation from './pages/FooterPages/newVaction';
import RealStateService from './pages/FooterPages/realstateService';
import RestEasy from './pages/FooterPages/restEasy';
import MoreOption from './pages/listing/moreOption';
import AdditionalStepsPage from './pages/host/listing/additionalStepsPage';
import VacationalRentalPage from './pages/vacationalRental/vacationalRentalPage';
import HelpPage from './pages/help/helpPage';

function App() {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
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
          <Route exact path="/wehost" element={<WeHostPage />} />
          <Route exact path="/property-management" element={<WeHostPage />} />
          <Route exact path="/vacational-rental" element={<VacationalRentalPage />} />
          <Route exact path="/help" element={<HelpPage />} />

          <Route path='/listing'>
            <Route path="hotels" element={<HotelsPage />} />
            <Route exact path='all' element={<MoreOption />} />
            <Route path="detail/:id" element={<SpecificHotelPage />} />
          </Route>

          {/* ----- Authentication Routes ---- */}
          <Route exact path="/login" element={<LoginPage isLogin={isLogin} />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/sign-complete" element={<SignupCompletePage />} />
          <Route exact path="/register/email-confirmation/:id" element={<CodeModel />} />
          <Route exact path="/register/complete/:id" element={<FinishUpLoging />} />
          <Route exact path="/otp" element={<OtpPage />} />
          {/* ------------------ */}


          {/* ----- Authenticated Routes ---- */}

          {/* Host Routes */}
          <Route path='/host'>

            {authToken !== null ?

              <>

                <Route exact index element={<ViewListings />} />
                <Route exact path='create-listing' element={<CreateListing />} />
                <Route exact path='listings' element={<ViewListings />} />
                <Route path='additional-steps/:id' element={<AdditionalStepsPage />} />

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

          {/* ------------------ */}

          <Route exact path="*" element={<Page404 />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

// AIzaSyAQrxRuqHO7pOjalVnHR7Q27iiPr8tQHoI