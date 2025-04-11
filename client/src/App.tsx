import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Carousel from './components/Carousel';
import Header from './components/Header';
import Footers from './components/Footers';
function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Footers />
    </>
  );
}

export default App;
