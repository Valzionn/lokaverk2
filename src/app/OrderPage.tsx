import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder } from './api';
import { useOrder } from './OrderContext';

const OrderPage = () => {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const { order, setOrder } = useOrder();

  const handleOrder = async () => {
    try {
      if (!order.dish || order.drinks.length === 0) {
        throw new Error('Dish and drinks must be selected');
      }

      const updatedOrder = {
        ...order,
        email,
        date: new Date(date), // Convert string to Date object
      };

      await createOrder(updatedOrder);
      setOrder(updatedOrder);
      navigate('/receipt');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div>
      <h1>Order Details</h1>
      <label>
        Time:
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default OrderPage;


