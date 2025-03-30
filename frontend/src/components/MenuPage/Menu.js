import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MenuPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenuPage = ({ cart, setCart }) => {
    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/api/menu")
            .then(response => setMenu(response.data))
            .catch(error => console.error("Error fetching menu:", error));
    }, []);

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem._id === item._id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const filterMenu = category === "All" ? menu : menu.filter(item => item.category === category);

    return (
        <div className="container mt-5">

        <div className="cart-icon" onClick={() => navigate("/cart")}>
                <button className="btn btn-primary">
                <FontAwesomeIcon icon="fa-regular fa-cart-shopping" /> View Cart({cart.length})
                </button>
            </div>
            <h2 className="text-center text-success fw-bold">Our Menu</h2>

            {/* Category Filters */}
            <div className="d-flex justify-content-center my-4">
                {["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"].map((cat) => (
                    <button
                        key={cat}
                        className={`btn btn-outline-success mx-2 ${category === cat ? "active" : ""}`}
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Menu Items */}
            <div className="row">
                {filterMenu.length > 0 ? (
                    filterMenu.map((item) => (
                        <div key={item._id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card shadow">
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-semibold">{item.name}</h5>
                                    <p className="text-muted">{item.description}</p>
                                    <h6 className="text-success fw-bold">${item.price.toFixed(2)}</h6>
                                    <button className="btn btn-success mt-2" onClick={() => addToCart(item)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-danger">No items available in this category.</p>
                )}
            </div>

            {/* View Cart Button */}
            <div className="text-center mt-4">
                {cart.length > 0 && (
                    <button className="btn btn-primary px-4 py-2" onClick={() => navigate("/cart")}>
                        View Cart ({cart.length})
                    </button>
                )}
            </div>
        </div>
    );
};

export default MenuPage;
