import React, { useState } from 'react';
import './MenuSection.css';
import { motion } from 'framer-motion';
import food from '../../utils/food';
import drinks from '../../utils/drinks';
import MenuBtn from '../MenuBtn/MenuBtn';

function MenuSection() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <div className="menu-section py-5 text-light shadow">
            <div className="container d-flex flex-column align-items-center">
                <div className="row mb-4 mb-lg-5 w-100">
                    {/* Mains Section */}
                    <motion.div 
                        className="col-lg-6 d-flex flex-column align-items-center mb-4 mb-lg-0"
                        initial={{ opacity: 0, x: -300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className='fs-2 mb-4 fw-semibold text-uppercase'>Mains</h3>
                        <ul className='px-0'>
                            {food.map((item) => (
                                <li key={item.id} className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className='fs-4 me-5 text-capitalize fw-semibold'>{item.name}</p>
                                        <p className='fs-4 text-success'>${item.price}</p>
                                    </div>
                                    <button className="btn btn-success btn-sm" onClick={() => addToCart(item)}>
                                        Add to Cart
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Drinks Section */}
                    <motion.div 
                        className="col-lg-6 d-flex flex-column align-items-center mb-4 mb-lg-0"
                        initial={{ opacity: 0, x: 350 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className='fs-2 mb-4 fw-semibold text-uppercase'>Drinks</h3>
                        <ul className='px-0'>
                            {drinks.map((item) => (
                                <li key={item.id} className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className='fs-4 me-5 text-capitalize fw-semibold'>{item.name}</p>
                                        <p className='fs-4 text-success'>${item.price}</p>
                                    </div>
                                    <button className="btn btn-success btn-sm" onClick={() => addToCart(item)}>
                                        Add to Cart
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Menu Button (Can show cart count if needed) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <MenuBtn cartCount={cart.length} />
                </motion.div>
            </div>
        </div>
    );
}

export default MenuSection;
