import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import image1 from '../assets/images/Vector.png';
import image2 from '../assets/images/Vector-1.png';
import image3 from '../assets/images/Vector-2.png';



const ContactForm = () => {
  return (
    <div className="form-container w-100">
      <h2 className="form-heading1">La balle est dans votre camp</h2>
      <p className="form-heading2 pb-5">CONTACTEZ-NOUS POUR PLUS D’INFORMATIONS</p>
      <Row className='Container w-100'>
        <Col md="6" className="mx-auto px-5 my-5">
          <Row>
            <Col  className="form-column">
              <Form.Group>
                <Form.Control type="text" placeholder="Prenom* " />
              </Form.Group>
            </Col>
            <Col  className="form-column">
              <Form.Group>
                <Form.Control type="text" placeholder="Nom* " />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col  className="form-column">
              <Form.Group>
                <Form.Control type="text" placeholder="Société* " />
              </Form.Group>
            </Col>
            <Col  className="form-column">
              <Form.Group>
                <Form.Control type="text" placeholder="Téléphone* " />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Button className='custom-button'>DEMANDER A ETRE RAPPELE</Button>{' '}


          </Row>
        </Col>
        <Col md="auto" className=' vertical-line2 '>


        </Col>
        <Col md="4" className='contact-details my-auto d-none d-lg-block'>
          <Row>
            <Col md={3} className='mx-0'>
              <img src={image3} className='contact-details-img my-3' ></img>

            </Col>
            <Col md={6}>
              <p className='my-4 contact-details-text'>bienvenue@data-gest.fr</p>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <img src={image2} className='contact-details-img my-3'></img>
            </Col>
            <Col md={6}>
              <p className='my-4 contact-details-text'>01 41 08 60 90</p>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <img src={image1} className='contact-details-img my-3'></img>
            </Col>
            <Col md={6}>  
              <p className='my-4 contact-details-text'>Data-Gest <br></br>
                18, rue Horace Vernet``<br></br>
                92 130 Issy Les Moulineaux
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
