import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Context from './context'
import Checkout from './pages/checkout/Checkout';
import Shop from './pages/shop/Shop';
import { GlobalStyles } from './pages/StyledComponents/GlobalStyles';
import Navbar from './pages/StyledComponents/Navbar';
import {Header} from './pages/StyledComponents/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Header>Shopply</Header>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/Checkout' element={<Checkout />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
