import './App.css';
import HomePage from './pages/homePage';
import HotelsPage from './pages/hotelsPage';
import SpecificHotelPage from './pages/specificHotelPage';
import HostProperty from './pages/hostProperty';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/hotel" element={<HotelsPage />} />
        <Route path="/hotel/:id" element={<SpecificHotelPage/>} />
        <Route exact path = '/' element = {<HomePage/>}/>
        <Route  path = '/host/property' element = {<HostProperty/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
