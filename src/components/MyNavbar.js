import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/image logo datagest.png';
import { Button } from 'react-bootstrap';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" me-2">
      <Container className='me-2 '>
        <Navbar.Brand href="#home"><img src={logo} alt='logo' className='w-50'></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Item href="#" className="purple-button mx-1 p-1 px-3">Présentation</Nav.Item>
            <Nav.Item href="#" className="purple-button mx-2 p-1 px-3">Catalogue interactif</Nav.Item>
            <Nav.Item href="#" className="purple-button mx-2 p-1 px-3">Nous contacter</Nav.Item>

          </Nav>
        
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;