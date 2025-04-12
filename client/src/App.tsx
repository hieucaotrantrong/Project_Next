// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footers from './components/Footers';
import Carousel from './components/Carousel';
import CategoryGrid from './components/CategoryGrid';
import FlashSale from './components/FlashSale';
import MallSection from './components/MallSection';

// Import trang login
import Login from './pages/Login'; // Nếu bạn đặt ở src/pages/Login.jsx

function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <CategoryGrid />
      <FlashSale />
      <MallSection />
      <Footers />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
