import React from 'react'
import { Switch, Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <> 
   <Navbar /> 
  <Routes>
                <Route path="/"  element={<Homepage />} />
                <Route path="/cryptocurrencies"  element={<Cryptocurrencies />} />
                <Route path="/crypto/:coinId"  element={<CryptoDetails />} />
                <Route path="/news"  element={<News />} />
              </Routes> 
         <Footer />
         </>
  );
}

export default App