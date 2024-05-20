'use client'
//installa react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OrderProvider } from './OrderContext';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import DrinkPage from './DrinkPage';
import OrderPage from './OrderPage';
import ReceiptPage from './ReceiptPage';

const App = () => {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/drink" element={<DrinkPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
};

export default App;