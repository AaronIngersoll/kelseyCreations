import React from 'react';

export default function() {
    return(
        <div className="homePage">
            <div className="videoContainer">
                <video playsInline autoPlay muted loop id="bgvid" width="100%">
                    <source src="../assets/videos/reel.mp4" type="video/mp4"/>
                </video>
  
            </div>
        <div className="homeLogo">
        <img id="logoHome"src="../assets/logo/good-logo.png" alt="logo"/>
        </div>

       
        <div className="missionStatement">
            <div className="header"><h1>Mission Statement</h1></div>
                <div className="statement">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolores?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <button>leggggooooo</button>
        </div>

        </div>
    );
}