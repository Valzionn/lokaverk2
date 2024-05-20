import React, { useEffect, useState } from 'react';
import { fetchLatestOrder } from './api';
import { useOrder } from './OrderContext';

const ReceiptPage = () => {
  const [order, setOrder] = useState<any>(null);
  const { order: currentOrder } = useOrder();

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const data = await fetchLatestOrder();
      setOrder(data);
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Receipt</h1>
      <div>
        <h2>Meal: {order.dish.name}</h2>
        <h2>Drink: {order.drinks[0].name}</h2>
        <h2>Total: {order.dish.price + order.drinks[0].price}</h2>
      </div>
    </div>
  );
};

export default ReceiptPage;
