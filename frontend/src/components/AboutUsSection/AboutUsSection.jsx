import React from 'react';
import './AboutUsSection.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../../utils/images/about-section-img.jpg';

function AboutUsSection() {
  return (
    <div className="container my-5">
        <div className="flex-column-reverse flex-lg-row row">
            <motion.div 
                className="col-lg-6 d-flex justify-content-center"
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={AboutSectionImg} className='about-section-img img-fluid mt-5 mt-lg-0 shadow' alt="Nepali Spice Riverside" />
            </motion.div>
            <motion.div 
                className="col-lg-6 d-flex flex-column justify-content-center"
                initial={{ opacity: 0, x: 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className='text-uppercase fw-bold fs-1 mb-4 mb-lg-5'>Welcome to Nepali Spice</h2>
                <p>Welcome to <strong>Nepali Spice</strong>, a homemade restaurant nestled in the heart of Hattiesburg, Mississippi. We bring you a taste of authentic Nepali cuisine, crafted with love and the freshest ingredients.</p>
                <p className='mb-4 mb-lg-5'>Our cozy eatery offers a warm and inviting atmosphere where you can enjoy traditional Nepali dishes, all made with care in-house. Whether it's a casual lunch or a special dinner, we promise an unforgettable culinary experience. Visit us and savor the true flavors of Nepal, right here in Hattiesburg!</p>
                <Link to='/about'>
                    <button type='button' className='btn btn-dark btn-lg rounded-0 text-capitalize shadow'>Learn More About Us</button>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUsSection;
