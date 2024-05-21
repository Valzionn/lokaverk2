import React, { useState } from 'react';
import CreateOrderForm from './CreateOrderForm';
import OrderList from './OrderList';

const App = () => {
    const [email, setEmail] = useState('');

    return (
        <div>
            <h1>Order Management</h1>
            <CreateOrderForm />
            <div>
                <h2>Fetch Order</h2>
                <input
                    type="email"
                    placeholder="Enter email to fetch order"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <OrderList email={email} />
            </div>
        </div>
    );
};

export default App;
