import React, { useState, useEffect } from 'react';
import { getOrder } from './apiService';

const OrderList = ({ email }) => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            const result = await getOrder(email);
            setOrder(result);
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
            <p>Drinks: {order.drinks.map(drink => drink.name).join(', ')}</p>
            <p>Count: {order.count}</p>
            <p>Date: {order.date}</p>
        </div>
    );
};

export default OrderList;
