const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    category: { type: String, required: true },  // New field for categorization
    available: { type: Boolean, default: true }, // New field for availability
    rating: { type: Number, default: 4.5 }, // New field for ratings
    spiceLevel: { type: String, enum: ["Mild", "Medium", "Hot"], default: "Mild" } // New field for spice level
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
