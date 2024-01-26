import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div className="form-container w-100">
      <h2 className="form-heading1">La balle est dans votre camp</h2>
    <p className="form-heading2">CONTACTEZ-NOUS POUR PLUS D’INFORMATIONS</p>
      <Row>
        <Col md={6} className="form-column">
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
        </Col>

        <Col md={6} className="form-column">
          <Form.Group>
            <Form.Label>Subject:</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your Message" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
