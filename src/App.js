import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout'
import Checkout from './pages/Checkout';
import Succes from './pages/Succes';
import Cancel from './pages/Cancel';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/*  Home page*/}
      <Route path="/" element={<Layout/>} />
       {/*  checkout page*/}
       <Route path="/checkout" element={<Checkout/>} />

        {/*  path to view success page*/}
      <Route path="/success" element={<Succes/>} />

      {/*  path to view success page*/}
      <Route path="/cancel" element={<Cancel/>} />

      
    </Routes>
    
    </BrowserRouter>
      

    
  )
}

export default App