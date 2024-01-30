import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-3">
      <Container>
        <Row>
         
            <p className='footer-item '>
              <span className='mx-auto' >&copy; 2021 Copyright. Tous droits réservés.</span>
              <span className='mx-auto d-none d-lg-block'>Data-Gest</span>
              <span className='mx-auto d-none d-lg-block'>Politique de confidentialité</span>
              <span className='mx-auto d-none d-lg-block'>Mentions légales</span>
            </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
