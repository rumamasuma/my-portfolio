import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <>
        <Navbar  bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
     <Container>     
     {/* <Navbar.Brand href="#home">
       <img src="" className='logo' alt="" />
     </Navbar.Brand> */}
       <Nav.Link   as={Link} to="/home" className='header m-2 rounded fst-italic fw-bold fs-5'>Masuma</Nav.Link>
     <Navbar.Toggle />
     <Navbar.Collapse className="justify-content-end">
     <Nav.Link   as={HashLink} to="/home#home" className='header m-2 rounded fst-italic fw-bold fs-5'>Home</Nav.Link>
       <Nav.Link as={HashLink} to="/home#about" className='header m-2 rounded fst-italic fw-bold fs-5' >About Me</Nav.Link>
       <Nav.Link as={HashLink} to="/home#skills" className='header m-2 rounded fst-italic fw-bold fs-5' >Skills</Nav.Link>
       <Nav.Link as={HashLink} to="/home#projects" className='header m-2 rounded fst-italic fw-bold fs-5' >Projects</Nav.Link>
       <Nav.Link as={HashLink} to="/home#blog" className='header m-2 rounded fst-italic fw-bold fs-5' >Blog</Nav.Link>
       <Nav.Link as={HashLink} to="/home#contact" className='header m-2 rounded fst-italic fw-bold fs-5' >Contact Me</Nav.Link>
        
     </Navbar.Collapse>
     </Container>
   </Navbar>
         </>
    );
};

export default Header;