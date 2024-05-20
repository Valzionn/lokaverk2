import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from './OrderContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { setOrder } = useOrder();

  const startOrder = () => {
    setOrder({
      id: 0,
      email: '',
      dish: {
        id: '',
        name: '',
        description: '',
        imageSource: '',
        price: 0,
        category: '',
        cousine: ''
      },
      drinks: [],
      count: 1,
      date: new Date()
    });
    navigate('/menu');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={startOrder}>Start Order</button>
    </div>
  );
};

export default HomePage;