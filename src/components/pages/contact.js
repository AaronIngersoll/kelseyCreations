import React from "react";
// import { Form, Button } from "react-bootstrap";

export default function() {
  return (
    <div className="page-container">
      <div className="skewed-header">
        <div className="header-bg3" />

        <div className="skewed-header-wrapper">
          <div className="skewed-header-content">
            <div className="heading-wrapper">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-grid-wrapper">
        <div className="contact-info-grid-wrapper">
          <div className="logo">
            <img
              src="https://kelseycreationsimages.s3-us-west-2.amazonaws.com/good-logo.png"
              alt="Logo"
            />
          </div>
        </div>
        <div>
          <div className="contact-me-grid-wrapper">
            <div className="company-details-wrapper">
              <div>
                <i className="fas fa-map-marker-alt" /> Provo, Utah
              </div>
            </div>
            <div className="company-details-wrapper">
              <div>
                <i className="fas fa-phone-volume" /> 480.495.5738
              </div>
            </div>
            <div className="inquiries">
              {" "}
              <i className="fas fa-envelope" /> Email me here:{" "}
            </div>
            <form
              method="post"
              action="mailto:aingy205@gmail.com.com?subject=fromKelseyCreations.com"
            >
              <input
                className="submitBTN"
                type="submit"
                value="Email &#xf1d8;"
              />
            </form>
          </div>
          {/* <Form
  
          >
            <div className="two-column">
              <Form.Group controlId="formBasic">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="formBasic">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </div>
            <div className="two-column">
              <Form.Group controlId="formBasic">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
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
            <Button variant="primary" type="submit"  />
            Email Here
          </Form> */}
        </div>
      </div>
    </div>
  );
}
