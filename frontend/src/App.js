import './App.css';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import MenuPage from './components/MenuPage/Menu'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './components/Success';
function App() {
  // State to control the popup
  const [showPopup, setShowPopup] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div id='app'>
      {/* Announcement Modal */}
      <Modal show={showPopup} onHide={handleClosePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>📢 Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fw-bold">
          🍽️ Online Ordering System Coming Soon! 🚀
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClosePopup}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Navbar */}
      <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='navbar-brand text-success d-flex align-items-center'>
              <FontAwesomeIcon icon={faUtensils} size='xl' />
              <span className='ms-3 lh-1 fw-semibold'>
                Nepali
                <br></br>
                Spice
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='text-center' id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-center w-100'>
              <Link to='/' className='nav-link text-uppercase text-success text-center fw-semibold'>Home</Link>
              <Link to='/menu' className='nav-link text-uppercase text-success text-center fw-semibold'>Menu</Link>
              <Link to='/about' className='nav-link text-uppercase text-success text-center fw-semibold'>About</Link>
              <Link to='/contact' className='nav-link text-uppercase text-success text-center fw-semibold'>Contact</Link>
            </Nav>
            <Link to='/contact'>
              <button type='button' className='btn btn-success rounded-0 text-capitalize my-3 my-lg-0 ms-lg-4 text-nowrap'>Book a table</button>
            </Link>
            <Link to='/menupage'>
              <button type='button' className='btn btn-warning rounded-0 text-capitalize my-3 my-lg-0 ms-lg-4 text-nowrap'>Order Now</button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menupage' element={<MenuPage cart={cart} setCart={setCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} setCart={setCart} />} />
        <Route path="/success" element={<Success />} />

        
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
