import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footers';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminPage from './pages/AdminPage';
import PrivateRoute from './service/PrivateRoute';
import CartPage from "./components/CartPage";
import ProductDetail from "./components/ProductDetail";
import ChatBotIcon from "./components/ChatBotIcon";
import CartPayPage from "./components/CartPayPage";
import SupportPage from "./components/SupportPage";

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
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cartpay" element={<CartPayPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/support" element={<SupportPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;



