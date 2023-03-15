import './App.css';
import HomePage from './pages/homePage';
import HotelsPage from './pages/hotelsPage';
import SpecificHotelPage from './pages/specificHotelPage';
import VerifyPropertyPage from './pages/verifyPropertyPage';
import WeHostPage from './pages/weHostPage';
import PersonalInfoPage from './pages/personalInfoPage';
import LoginActivityPage from './pages/loginActivityPage';
import SecurityPage from './pages/securityPage';
import PrivacyPage from './pages/PrivacyPage';
import PaymentPage from './pages/paymentPage';
import ProfilePage from './pages/profilepage';
import CouponPage from './pages/couponPage';
import AccountDashboardPage from './pages/accountDashboardPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldWide from './pages/worldWide';
import BusinessPage from './pages/businesstripPage';
import TaxPage from './pages/taxPage';
import NotificationPage from './pages/notificationPage';
import PublishPage from './pages/publishPage';
import ListingPage from './pages/listingPage';
import SignInPage from './pages/signInPage';
import SingUpPage from './pages/signUpPage';
import OtpPage from './pages/otpPage';
import SignupCompletePage from './pages/signupCompletePage';
import CodeModel from './components/signIn/codeModel';
import FinishUpLoging from './components/signIn/finishingUpLoging';
import UserListings from './pages/Hosting/Listings';
import Page404 from './pages/page404';
import { useEffect, useState } from 'react';
import WorkTogether from './pages/FooterPages/workTogether';
import NewVacation from './pages/FooterPages/newVaction';
import RealStateService from './pages/FooterPages/realstateService';
import RestEasy from './pages/FooterPages/restEasy';
import MoreOption from './pages/moreOption';
function App() {
  const [userAuth, setUserAuth] = useState(null);
  useEffect(()=>{
    setUserAuth(JSON.parse(localStorage.getItem('dataKey')))
  }, [])
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotel" element={<HotelsPage />} />
          <Route path="/host" element={<WeHostPage />} />
          <Route path="/hotel/:id" element={<SpecificHotelPage />} />
          <Route path="/property" element={<VerifyPropertyPage />} />
          <Route path="/account" element={<AccountDashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/pinfo" element={<PersonalInfoPage />} />
          <Route path="/loginfo" element={<LoginActivityPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/coup" element={<CouponPage />} />
          <Route path="/worldwide" element={<WorldWide />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/taxinfo" element={<TaxPage />} />
          <Route path="/Notification" element={<NotificationPage />} />
          <Route path="/Publish" element={<PublishPage />} />
          <Route path="/Listing" element={<ListingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SingUpPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/sign-complete" element={<SignupCompletePage />} />
          <Route path="/register/email-confirmation/:id" element={<CodeModel />} />
          <Route path="/register/complete/:id" element={<FinishUpLoging />} />
          <Route path="/hosting/listings" element={<UserListings />} />
          <Route exact path="*" element={<Page404 />} />
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/worktogether' element={<WorkTogether />} />
          <Route exact path='/newvacation' element={<NewVacation />} />
          <Route exact path='/realstateservice' element={<RealStateService />} />
          <Route exact path='/resteasypromise' element={<RestEasy />} />
          <Route exact path='/More' element={<MoreOption />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
