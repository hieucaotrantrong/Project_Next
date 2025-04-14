/*-----------------------------------------

 -------------------------------------------*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footers from './components/Footers';
import Carousel from './components/Carousel';
import CategoryGrid from './components/CategoryGrid';
import FlashSale from './components/FlashSale';
import MallSection from './components/MallSection';
import Login from './pages/Login';
import Singin from './pages/Signup';
/*-----------------------------------------

 -------------------------------------------*/
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
/*-----------------------------------------
Routes,Router
 -------------------------------------------*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singin" element={<Singin />} />
      </Routes>
    </Router>
  );
}

export default App;
