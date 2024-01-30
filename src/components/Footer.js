import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-3">
      <Container>
        <Row>
          <Col className="text-center">
          
              <span className='mx-5 footer-item'>&copy; 2021 Copyright. Tous droits réservés.</span>
              <span className='mx-5 footer-item'>Data-Gest</span>
              <span className='mx-5 footer-item'>Politique de confidentialité</span>
              <span className='mx-5 footer-item'>Mentions légales</span>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
