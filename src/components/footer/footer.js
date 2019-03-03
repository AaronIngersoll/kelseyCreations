import React, {Component} from 'react';

import NavigationContainer from "../nav-bar/nav-bar"

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
                    
                <div className= "footer-phone">
                    <span className="phone">
                        555-555-555
                    </span>
            
                    <span className="hours">
                        10 AM - MIDNIGHT
                    </span>
                </div>
            <div className="links-wrapper"><NavigationContainer /></div>

                <div className="social-media-icons-wrapper">
                    <a href="#"></a>
                        <i className="fab fa-instagram"></i>
        
                    <a href="#"></a>
                        <i className="fab fa-facebook-square"></i>
        
                    <a href="#"></a>
                        <i className="fab fa-vimeo-square"></i>
                </div>
                <div className="copyright-wrapper">
                    &copy; 2019 Ingy &#124; all rights reserved
                </div>
        </div>
    )};  
}

            
                       
   
