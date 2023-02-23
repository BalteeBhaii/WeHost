import './App.css';
import HomePage from './pages/homePage';
import HotelsPage from './pages/hotelsPage';
import SpecificHotelPage from './pages/specificHotelPage';
import VerifyPropertyPage from './pages/verifyPropertyPage';
import WeHostPage from './pages/weHostPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route exact path = '/' element = {<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
