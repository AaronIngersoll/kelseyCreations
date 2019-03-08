import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return(
        <div className="footer">
            <div className="logo-footer">
                <img src="../assets/logo/good-logo.png" alt="Logo"/>
            </div>
            <div className="links-wrapper">
                <div className="nav-wrapper">

                        <div className="nav-link-wrapper">
                        <NavLink to="/" activeClassName="nav-link-active">Home</NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                        <NavLink to="/bio" activeClassName="nav-link-active">Bio</NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                        <NavLink to="/films" activeClassName="nav-link-active">Films</NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                        </div>

                </div>
            </div>

            <div className="social-media-icons-wrapper">
                <a href="https://www.instagram.com/kelseycreations/">
                    <i className="fab fa-instagram"></i>
                </a>
    
                <a href="https://vimeo.com/kelseycreations">
                    <i className="fab fa-vimeo-square"></i>
                </a>
            </div>
            <div className="copyright-wrapper">
                &copy; 2019 KelseyCreations &#124; all rights reserved
            </div>
        </div>
    )};  
}

            
                       
   
