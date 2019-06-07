import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <div className="logo-footer">
          <img
            src="https://kelseycreationsimages.s3-us-west-2.amazonaws.com/good-logo.png"
            alt="Logo"
          />
        </div>
        <div className="links-wrapper">
          <div className="nav-wrapper" style={{ boxShadow: "none" }}>
            <div className="nav-link-wrapper">
              <NavLink to="/" activeClassName="nav-link-active">
                Home
              </NavLink>
            </div>
            <div className="nav-link-wrapper">
              <NavLink to="/bio" activeClassName="nav-link-active">
                Bio
              </NavLink>
            </div>
            <div className="nav-link-wrapper">
              <NavLink to="/films" activeClassName="nav-link-active">
                Films
              </NavLink>
            </div>
            <div className="nav-link-wrapper">
              <NavLink to="/contact" activeClassName="nav-link-active">
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        <div className="social-media-icons-wrapper">
          <a href="https://www.instagram.com/kelseycreations/">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCoDRD6ug-7jVrtn486E4BQw/featured">
            <i className="fab fa-youtube" />
          </a>

          <a href="https://vimeo.com/kelseycreations">
            <i className="fab fa-vimeo-square" />
          </a>
        </div>
        <div className="copyright-wrapper">
          &copy; 2019 KelseyCreations &#124; all rights reserved
        </div>
      </div>
    );
  }
}
