const baseUrl = 'http://localhost:3001/api';

type Provision = {
  id: string;
  name: string;
  description: string;
  imageSource: string;
  price: number;
  category: string;
};

type Dish = Provision & {
  cousine: string;
};

type Drink = Provision & {
  brewer: string;
};

type Order = {
  id: number;
  email: string;
  dish: Dish;
  drinks: Drink[];
  count: number;
  date: Date;
};

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

export const updateOrderByEmail = async (email: string, orderData: Partial<Order>): Promise<Order> => {
  try {
    const response = await fetch(`${baseUrl}/order/${email}`, {
      method: 'PUT',
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

export const deleteOrderByEmail = async (email: string): Promise<{ success: boolean; deletedOrder?: Order }> => {
  try {
    const response = await fetch(`${baseUrl}/order/${email}`, {
      method: 'DELETE',
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