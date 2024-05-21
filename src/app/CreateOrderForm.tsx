import React, { useState } from 'react';
import { createOrder } from './apiService';
import { Order } from './types';

const CreateOrderForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [dish, setDish] = useState('');
    const [drinks, setDrinks] = useState('');
    const [count, setCount] = useState(1);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const order: Order = {
            id: Math.random(), // Generate a random id for simplicity
            email,
            dish: { /* dish details */ } as any, // Adjust with real dish details
            drinks: [ /* drinks details */ ] as any[], // Adjust with real drinks details
            count,
            date: new Date(),
        };

        try {
            const response = await createOrder(order);
            console.log(response);
        } catch (error) {
            console.error('Failed to create order', error);
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleDishChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDish(event.target.value);
    };

    const handleDrinksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDrinks(event.target.value);
    };

    const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(event.target.value));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
            <label className="block mb-2">
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </label>
            <label className="block mb-2">
                Dish:
                <input
                    type="text"
                    value={dish}
                    onChange={handleDishChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </label>
            <label className="block mb-2">
                Drinks:
                <input
                    type="text"
                    value={drinks}
                    onChange={handleDrinksChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </label>
            <label className="block mb-2">
                Count:
                <input
                    type="number"
                    value={count}
                    onChange={handleCountChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Create Order
            </button>
        </form>
    );
};

export default CreateOrderForm;
