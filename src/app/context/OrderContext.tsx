import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Order, Dish } from '../types';

interface OrderContextType {
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
}

const defaultDish: Dish = {
  id: '',
  name: '',
  description: '',
  imageSource: '',
  price: 0,
  category: '',
  cousine: ''
};

const defaultOrder: Order = {
  id: 0,
  email: '',
  dish: defaultDish,
  drinks: [],
  count: 1,
  date: new Date()
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<Order>(defaultOrder);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
