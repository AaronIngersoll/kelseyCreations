import React from "react";
import { Form, Button } from "react-bootstrap";

export default function() {
  return (
    <div className="page-container">
      <div className="contact-grid-wrapper">
        <div className="company-metadata-sidebar-wrapper">
          <div className="logo">
            <img src="../assets/logo/good-logo.png" alt="Logo" />
          </div>

          <div className="company-details-wrapper">
            <i className="fas fa-map-marker-alt" />
            <div>Provo, Utah</div>
          </div>
          <div className="company-details-wrapper">
            <i className="fas fa-phone-volume" />
            <div>555-555-5555</div>
          </div>
        </div>
      </div>
      <div className="contact-me-grid-wrapper">
        <Form>
          <div className="two-column">
            <Form.Group controlId="formBasic">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group controlId="formBasic">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="LastName" />
            </Form.Group>
          </div>
          <div className="two-column">
            <Form.Group controlId="formBasic">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasic">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phone" placeholder="Phone Number" />
            </Form.Group>
          </div>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Drop Me A Line </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
