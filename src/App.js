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
import WorkTogether from './pages/FooterPages/workTogether';

function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/hotel" element={<HotelsPage />} />
        <Route exact path="/host" element={<WeHostPage />} />
        <Route path="/hotel/:id" element={<SpecificHotelPage/>} />
        <Route exact path="/property" element={<VerifyPropertyPage/>} />
        <Route exact path="/account" element={<AccountDashboardPage/>} />
        <Route exact path="/profile" element={<ProfilePage/>} />
        <Route exact path="/pinfo" element={<PersonalInfoPage/>} />
        <Route exact path="/loginfo" element={<LoginActivityPage/>} />
        <Route exact path="/security" element={<SecurityPage/>} />
        <Route exact path="/privacy" element={<PrivacyPage/>} />
        <Route exact path="/pay" element={<PaymentPage/>} />
        <Route exact path="/coup" element={<CouponPage/>} />
        <Route exact path="/worldwide" element={<WorldWide/>} />
        <Route exact path="/business" element={<BusinessPage/>} />
        <Route exact path="/taxinfo" element={<TaxPage/>} />
        <Route exact path="/Notification" element={<NotificationPage/>} />
        <Route exact path="/Publish" element={<PublishPage/>} />
        <Route exact path="/Listing" element={<ListingPage/>} />
        <Route exact path="/signin" element={<SignInPage/>} />
        <Route exact path="/signup" element={<SingUpPage/>} />
        <Route exact path="/otp" element={<OtpPage/>} />
        <Route exact path="/sign-complete" element={<SignupCompletePage/>} />
        <Route exact path="/register/email-confirmation/:id" element={<CodeModel/>} />
        <Route exact path="/register/complete/:id" element={<FinishUpLoging/>} />
        <Route exact path="/hosting/listings" element={<UserListings />} />
        <Route exact path="/WorkTogether" element={<WorkTogether />} />
        
        <Route exact path = '/' element = {<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
