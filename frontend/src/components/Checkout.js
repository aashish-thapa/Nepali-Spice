import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const stripePromise = loadStripe("your-public-key-here"); // Replace with your Stripe public key

const CheckoutForm = ({ cart, setCart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        if (!stripe || !elements) return;

        try {
            // Create payment intent
            const { data } = await axios.post("http://localhost:5000/api/payment", {
                amount: cart.reduce((total, item) => total + item.price * item.quantity, 0) * 100, // Convert to cents
            });

            // Confirm payment
            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (result.error) {
                setError(result.error.message);
                setLoading(false);
            } else {
                // If payment is successful, place order
                await axios.post("http://localhost:5000/api/orders", { items: cart });

                setCart([]); // Clear cart
                navigate("/success");
            }
        } catch (error) {
            console.error("Payment error:", error);
            setError("Payment failed. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-lg p-4">
                        <h2 className="text-center text-success mb-4">Checkout</h2>

                        {/* Order Summary */}
                        <div className="mb-4">
                            <h5 className="fw-bold">Order Summary</h5>
                            <ul className="list-group">
                                {cart.map((item) => (
                                    <li key={item.id} className="list-group-item d-flex justify-content-between">
                                        <span>{item.name} × {item.quantity}</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="d-flex justify-content-between mt-3 fw-bold">
                                <span>Total:</span>
                                <span>${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <form onSubmit={handleSubmit} className="mt-3">
                            <h5 className="fw-bold">Enter Payment Details</h5>
                            <div className="form-group border p-3 rounded">
                                <CardElement options={{ style: { base: { fontSize: "16px", color: "#495057" } } }} />
                            </div>

                            {error && <p className="text-danger mt-2">{error}</p>}

                            <button className="btn btn-success w-100 mt-3" type="submit" disabled={!stripe || loading}>
                                {loading ? <span className="spinner-border spinner-border-sm"></span> : "Pay Now"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Checkout = ({ cart, setCart }) => (
    <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} setCart={setCart} />
    </Elements>
);

export default Checkout;
