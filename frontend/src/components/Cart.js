import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const removeItem = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-5">
            <h2>Your Cart</h2>
            {cart.length === 0 ? <p>Cart is empty.</p> :
                <ul className="list-group">
                    {cart.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {item.name} - ${item.price.toFixed(2)}
                            <button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            }
            {cart.length > 0 && (
                <button className="btn btn-primary mt-3" onClick={() => navigate('/checkout')}>
                    Proceed to Checkout
                </button>
            )}
        </div>
    );
};

export default Cart;
