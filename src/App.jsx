import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Context from './context'
import Checkout from './pages/checkout/Checkout';
import Shop from './pages/shop/Shop';
import { GlobalStyles } from './pages/StyledComponents/GlobalStyles';
import Navbar from './pages/StyledComponents/Navbar';
import {Header} from './pages/StyledComponents/Header';
import Footer from './pages/StyledComponents/Footer';
import ShopProvider from './context/ShopContext';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ShopProvider>
      <Router>
        <Header>Shopply</Header>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/Checkout' element={<Checkout />}/>
          <Route path="*" element={<h1>404 Error</h1>}></Route>
        </Routes>
        <Footer />
      </Router>
      </ShopProvider>
    </div>
  )
}

export default App
