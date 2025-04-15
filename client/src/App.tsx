import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footers from './components/Footers';
import Carousel from './components/Carousel';
import CategoryGrid from './components/CategoryGrid';
import FlashSale from './components/FlashSale';
import MallSection from './components/MallSection';
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './service/PrivateRoute';

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

function HomeLoggedInPage() {
  return (
    <>
      <Home />
      <Carousel />
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
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomeLoggedInPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
