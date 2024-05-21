const API_URL = 'http://localhost:3000/api/order';

export const createOrder = async (order) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return response.json();
};

export const updateOrderById = async (id, order) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return response.json();
};

export const updateOrderByEmail = async (email, order) => {
    const response = await fetch(`${API_URL}/${email}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return response.json();
};

export const getOrder = async (email) => {
    const response = await fetch(`${API_URL}/${email}`);
    return response.json();
};

export const deleteOrderById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};

export const deleteOrderByEmail = async (email) => {
    const response = await fetch(`${API_URL}/${email}`, {
        method: 'DELETE',
    });
    return response.json();
};
