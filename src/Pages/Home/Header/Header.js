import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
        <Navbar  bg="light" variant="transparent" sticky="top" collapseOnSelect expand="lg" >
     <Container>     
     {/* <Navbar.Brand href="#home">
       <img src="" className='logo' alt="" />
     </Navbar.Brand> */}
       <Nav.Link   as={Link} to="/home" className='header m-2 rounded fst-italic fw-bold fs-5'>Masuma Khatun</Nav.Link>
     <Navbar.Toggle />
     <Navbar.Collapse className="justify-content-end">
     
       <Nav.Link as={Link} to="/about" className='header m-2 rounded fst-italic fw-bold fs-5' >About Me</Nav.Link>
       <Nav.Link as={Link} to="/skills" className='header m-2 rounded fst-italic fw-bold fs-5' >Skills</Nav.Link>
       <Nav.Link as={Link} to="/projects" className='header m-2 rounded fst-italic fw-bold fs-5' >Projects</Nav.Link>
       <Nav.Link as={Link} to="/contact" className='header m-2 rounded fst-italic fw-bold fs-5' >Contact Me</Nav.Link>
        
     </Navbar.Collapse>
     </Container>
   </Navbar>
         </>
    );
};

export default Header;