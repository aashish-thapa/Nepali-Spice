const MenuItem = require('../models/menuItem');

// Get all menu items
exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        console.error("Error fetching menu items:", error);
        res.status(500).json({ message: 'Error fetching menu items', error: error.message });
    }
};

// Add a new menu item
exports.addMenuItem = async (req, res) => {
    try {
        const { name, description, price, image, category } = req.body;

        // Validate required fields
        if (!name || !price || !category) {
            return res.status(400).json({ message: "Name, price, and category are required." });
        }

        // Ensure price is a number
        if (typeof price !== 'number') {
            return res.status(400).json({ message: "Price must be a number." });
        }

        const newItem = new MenuItem({ name, description, price, image, category });

        await newItem.save();
        res.status(201).json({ message: "Menu item added successfully!", data: newItem });
    } catch (error) {
        console.error("Error adding menu item:", error);
        res.status(500).json({ message: 'Error adding menu item', error: error.message });
    }
};

// Get menu items by category
exports.getMenuItemsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const menuItems = await MenuItem.find({ category });

        if (!menuItems.length) {
            return res.status(404).json({ message: `No items found for category: ${category}` });
        }

        res.json(menuItems);
    } catch (error) {
        console.error("Error fetching menu items by category:", error);
        res.status(500).json({ message: 'Error fetching menu items by category', error: error.message });
    }
};
