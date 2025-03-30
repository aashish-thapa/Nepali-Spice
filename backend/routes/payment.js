require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Use secret key from .env
const router = express.Router();

router.post("/payment", async (req, res) => {
    try {
        const { amount } = req.body;

        // Create a payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Payment error:", error);
        res.status(500).json({ error: "Payment failed" });
    }
});

module.exports = router;
