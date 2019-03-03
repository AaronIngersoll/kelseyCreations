import React from 'react';


export default function() {
    return(
        <div className="contactPage">
        
            
    <div className="page-container">
        <div className="contact-grid-wrapper">
            <div className="company-metadata-sidebar-wrapper">
                <div className="logo">
                    <img src="../assets/logo/good-logo.png" alt="Logo"/>
                </div>

                <div className="company-details-wrapper">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                        123 Any St Scottsdale, AZ, 85251
                        </div>

                </div>
                <div className="company-details-wrapper">
                        <i className="fas fa-phone-volume"></i>
                        <div>
                            555-555-5555
                        </div>
                </div>
                <div className="company-details-wrapper">
                        <i className="far fa-clock"></i>
                        <div>
                            10 AM - MIDNIGHT
                        </div>  
                </div>
        </div>
        
         <div className="form">
                <div className="form-group">
                    <input type="text" id="fullName" placeholder="Your Name"/>
                    <label for="fullName">Your Name</label>
                </div>

                <div className="form-group">
                        <input type="text" id="email" placeholder="e-Mail"/>
                        <label for="email">e-Mail</label>
                    </div>

                <div className="form-group">
                        <textarea name="message" id="message" placeHolder="Message"></textarea>
                        <label for="message">Message</label>
                </div>

                <div className="spacer10"></div>

                <div className="centered-btn-wrapper">
                    <button type="submit" className="btn">Send</button>
                    </div>
                </div>
                    
            </div>
       
    </div>
            </div>
    );
}