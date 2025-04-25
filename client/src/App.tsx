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
import AdminPage from './pages/AdminPage';
import PrivateRoute from './service/PrivateRoute';
import CartPage from "./components/CartPage";
import ProductDetail from "./components/ProductDetail";
import ChatBotIcon from "./components/ChatBotIcon";
import CartPayPage from "./components/CartPayPage";
import SupportPage from "./components/SupportPage";
/*----------------------------------
Home Create
-----------------------------------*/
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
/*----------------------------------
HomePage
-----------------------------------*/
function HomeLoggedInPage() {
  return (
    <>
      <Home />
      <Carousel />
      <CartPage />
      <ChatBotIcon />
      <Footers />
    </>
  );
}
/*----------------------------------
Router
-----------------------------------*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={
            <PrivateRoute adminRequired={true}>
                <AdminPage />
            </PrivateRoute>
        } />
        <Route path="/" element={<CartPage />} />
        <Route path="/cartpay" element={<CartPayPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/support" element={<SupportPage />} />
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

