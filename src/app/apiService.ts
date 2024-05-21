import { Order } from './types';

const API_URL = 'http://localhost:3000/api/order';

export const createOrder = async (order: Order): Promise<any> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return response.json();
};

export const updateOrderById = async (id: number, order: Order): Promise<any> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return response.json();
};

export const updateOrderByEmail = async (email: string, order: Order): Promise<any> => {
    const response = await fetch(`${API_URL}/${email}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return response.json();
};

export const getOrder = async (email: string): Promise<Order | null> => {
    const response = await fetch(`${API_URL}/${email}`);
    if (response.ok) {
        return response.json();
    }
    return null;
};

export const deleteOrderById = async (id: number): Promise<any> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};

export const deleteOrderByEmail = async (email: string): Promise<any> => {
    const response = await fetch(`${API_URL}/${email}`, {
        method: 'DELETE',
    });
    return response.json();
};