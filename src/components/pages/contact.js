import React from "react";
import Mailchimp from "react-mailchimp-form";

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
          <div className="company-details-wrapper">
            <div>
              <i class="fas fa-paper-plane" /> Contact Me:
            </div>
          </div>
          <div className="logo">
            <img
              src="https://kelseycreationsimages.s3-us-west-2.amazonaws.com/good-logo.png"
              alt="Logo"
            />
          </div>
        </div>

        <div className="form">
          <Mailchimp
            action="https://gmail.us20.list-manage.com/subscribe/post?u=6bdbb9c6b316a597c70a42fa9&amp;id=d6738e58a4"
            fields={[
              {
                name: "FNAME",
                placeholder: "First Name",
                type: "text",
                required: true
              },
              {
                name: "LNAME",
                placeholder: "Last Name",
                type: "text",
                required: true
              },
              {
                name: "EMAIL",
                placeholder: "Email",
                type: "email",
                required: true
              },
              {
                name: "PHONE",
                placeholder: "Phone #",
                type: "phone",
                required: true
              },
              {
                name: "MESSAGE",
                placeholder: "Ask me about Kelsey Creations!",
                type: "text",
                required: true
              }
            ]}
            messages={{
              sending: "Sending...",
              success: "Thank you for Contacting me!",
              error: "An unexpected internal error has occurred.",
              empty: "You must write an e-mail.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "Contact me!"
            }}
            className="Form"
          />
        </div>
      </div>
    </div>
  );
}
