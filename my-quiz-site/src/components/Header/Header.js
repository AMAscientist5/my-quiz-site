import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
    <div>
     <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Link className='logo' to='/'><Navbar.Brand>My Quiz Site</Navbar.Brand></Link>     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom">
            <Link to='/'>Home</Link> 
            <Link to='/statistics'>Statictics</Link>
            <Link to='/blog'>Blog</Link>
          </Nav>
        </Navbar.Collapse>     
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;