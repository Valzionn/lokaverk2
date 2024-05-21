import React, { useState, useEffect } from 'react';
import { getOrder } from './apiService';
import { Order } from './types';

type OrderListProps = {
    email: string;
};

const OrderList: React.FC<OrderListProps> = ({ email }) => {
    const [order, setOrder] = useState<Order | null>(null);

    useEffect(() => {
        const fetchOrder = async () => {
            if (email) {
                const result = await getOrder(email);
                setOrder(result);
            }
        };

        fetchOrder();
    }, [email]);

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Order Details</h2>
            <p>Email: {order.email}</p>
            <p>Dish: {order.dish.name}</p>
            <p>Drinks: {order.drinks.map(drink => (
                <span key={drink.id}>{drink.name}</span>
            ))}</p>
            <p>Count: {order.count}</p>
            <p>Date: {order.date.toString()}</p> {/* Convert date to string */}
        </div>
    );
};

export default OrderList;