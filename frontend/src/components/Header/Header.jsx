import React from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuBtn from '../MenuBtn/MenuBtn';
import { Link } from 'react-router-dom';

function Header() {
  const carouselItems = [
    {
      id: 1,
      location: 'Hattiesburg, Mississippi',
      description: 'Welcome to Nepali Spice in Hattiesburg, Mississippi, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.',
      bgClass: 'carousel-item1',
    },
    {
      id: 2,
      location: 'Hattiesburg, Mississippi',
      description: 'Welcome to Nepali Spice in Hattiesburg, Mississippi, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.',
      bgClass: 'carousel-item2',
    },
    {
      id: 3,
      location: 'Hattiesburg, Mississippi',
      description: 'Welcome to Nepali Spice in Hattiesburg, Mississippi, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.',
      bgClass: 'carousel-item3',
    }
  ];

  return (
    <header>
        <Carousel className='carousel-fade mt-5 mt-sm-0'>
          {carouselItems.map(item => (
            <Carousel.Item key={item.id} className={`vh-100 ${item.bgClass}`}>
              <Carousel.Caption className='h-100 pb-0'>
                <div className="row h-100">
                  <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                    <h2 className='fw-bold fs-3 text-center text-md-start'>Welcome to</h2>
                    <h1 className='text-capitalize fw-bold text-center text-md-start'>Nepali Spice</h1>
                    <p className='mb-4 text-center text-md-start'>{item.description}</p>
                    <div className='d-flex flex-column flex-sm-row'>
                      <MenuBtn />
                      <Link to='/contact'>
                        <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Contact us</button>
                      </Link>
                    </div>
                  </div>
                  <div className='col-xl-5 d-none d-xl-block'></div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
    </header>
  );
}

export default Header;
