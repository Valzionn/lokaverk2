import React from 'react';
import { useRouter } from 'next/router';
import { useOrder } from '../context/OrderContext';

const HomePage = () => {
  const router = useRouter();
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
    router.push('/menu');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={startOrder}>Start Order</button>
    </div>
  );
};

export default HomePage;
