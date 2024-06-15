import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
const navbar = () => {

    return (
    <div >
    <Navbar expand="lg" className="bg-dark-subtle">
      <Container >
        <Navbar.Brand href="#home">Employee Management App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
         <Link style={{ textDecoration: 'none' }} to="/"> 
         <Nav.Link href="/">Employees</Nav.Link>
         </Link>

         <Link style={{ textDecoration: 'none' }} to="/addemployee"> 
          <Nav.Link href="/">AddEmployee</Nav.Link> 
          </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    );

}

export default navbar