import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="homePage">
      <div className="videoContainer">
        <video playsInline autoPlay muted loop id="bgvid" width="100%">
          <source
            src="../assets/videos/KelseyCreationsReel.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="missionStatement">
        <div className="header">
          <h1>Kelsey Creations</h1>
        </div>
        <div className="statement">
          <p>
            "It has been said that next to hunger and thirst, our most basic
            human need is for <em>STORYTELLING</em>.<br /> Our Passion is to
            tell your story."
          </p>
        </div>
        <Link to="/contact" className="contact-me">
          Schedule Me!
        </Link>
      </div>
    </div>
  );
}
