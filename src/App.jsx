import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Context from './context'
import Checkout from './pages/checkout/Checkout';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/Checkout' element={<Checkout />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
