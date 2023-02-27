import './App.css';
import HomePage from './pages/homePage';
import HotelsPage from './pages/hotelsPage';
import SpecificHotelPage from './pages/specificHotelPage';
import VerifyPropertyPage from './pages/verifyPropertyPage';
import WeHostPage from './pages/weHostPage';
import PersonalInfoPage from './pages/personalInfoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDashboardPage from './pages/accountDashboardPage';
import ProfilePage from './pages/profilepage';

function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/hotel" element={<HotelsPage />} />
        <Route exact path="/host" element={<WeHostPage />} />
        <Route exact path="/hotel/:id" element={<SpecificHotelPage/>} />
        <Route exact path="/property" element={<VerifyPropertyPage/>} />
        <Route exact path="/account" element={<AccountDashboardPage/>} />
        <Route exact path="/profile" element={<ProfilePage/>} />
        <Route exact path="/pinfo" element={<PersonalInfoPage/>} />
        <Route exact path = '/' element = {<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
