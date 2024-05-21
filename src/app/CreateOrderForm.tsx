import React, { useState } from 'react';
import { createOrder } from './apiService';

const CreateOrderForm = () => {
    const [email, setEmail] = useState('');
    const [dish, setDish] = useState('');
    const [drinks, setDrinks] = useState('');
    const [count, setCount] = useState(1);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const order = {
            id: Math.random(), // Generate a random id for simplicity
            email,
            dish: { /* dish details */ },
            drinks: [ /* drinks details */ ],
            count,
            date: new Date(),
        };

        const response = await createOrder(order);
        console.log(response);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Dish:
                <input type="text" value={dish} onChange={(e) => setDish(e.target.value)} />
            </label>
            <label>
                Drinks:
                <input type="text" value={drinks} onChange={(e) => setDrinks(e.target.value)} />
            </label>
            <label>
                Count:
                <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
            </label>
            <button type="submit">Create Order</button>
        </form>
    );
};

export default CreateOrderForm;
