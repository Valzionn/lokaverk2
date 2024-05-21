"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateOrderForm from './CreateOrderForm';
import OrderList from './OrderList';
import './index.css'; // Ensure Tailwind CSS is imported

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreateOrderForm />} />
                <Route path="/orders" element={<OrderList email="" />} /> {/* Adjust as needed */}
                <Route path="*" element={<NotFound />} /> {/* Fallback for 404 */}
            </Routes>
        </Router>
    );
};

const NotFound = () => <h2>Page Not Found</h2>;

export default App;