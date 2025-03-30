import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="container mt-5 text-center">
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for ordering with Nepali Spice.</p>
            <Link to="/" className="btn btn-success">Back to Home</Link>
        </div>
    );
};

export default Success;
