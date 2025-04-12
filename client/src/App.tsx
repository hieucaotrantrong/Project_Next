import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Carousel from './components/Carousel';
import Header from './components/Header';
import Footers from './components/Footers';
import CategoryGrid from './components/CategoryGrid'
import FlashSale from './components/FlashSale'
function App() {
  return (
    <>
      <Header />
      <Carousel />
      <CategoryGrid />
      <FlashSale />
      <Footers />
    </>
  );
}

export default App;
