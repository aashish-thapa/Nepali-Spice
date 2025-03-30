const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    items: [
        {
            name: String,
            price: Number,
            quantity: Number,
        }
    ],
    totalAmount: { type: Number, required: true },
    customerName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    status: { type: String, default: "Pending" },
    paymentStatus: { type: String, default: "Pending" },
});

module.exports = mongoose.model('Order', OrderSchema);
