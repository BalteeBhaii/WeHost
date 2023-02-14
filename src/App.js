import './App.css';

import HomePage from './pages/homePage';
import HotelsPage from './pages/hotelsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="hotel" element={<HotelsPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
