const Order = require('../models/order');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { items, totalAmount, customerName, phoneNumber } = req.body;

        const newOrder = new Order({ items, totalAmount, customerName, phoneNumber });
        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order' });
    }
};

// Payment with Stripe
exports.processPayment = async (req, res) => {
    try {
        const { amount, token } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: 'usd',
            payment_method_types: ['card'],
            description: 'Nepali Spice Order Payment',
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ message: 'Payment error' });
    }
};
