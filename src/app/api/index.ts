import { Order } from '../types';

const baseUrl = 'http://localhost:3001/api';

export const createOrder = async (orderData: Omit<Order, 'id'>): Promise<Order> => {
  try {
    const response = await fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};

export const fetchLatestOrder = async (): Promise<Order> => {
  try {
    const response = await fetch(`${baseUrl}/orders/latest`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest order:', error);
    throw error;
  }
};
