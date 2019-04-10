import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="homePage">
      <div className="videoContainer">
        <video playsInline autoPlay muted loop id="bgvid" width="100%">
          <source src="../assets/videos/reel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="missionStatement">
        <div className="header">
          <h1>Mission Statement</h1>
        </div>
        <div className="statement">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Libero, dolores?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <Link to="/contact" className="contact-me">
          GET A QUOTE!
        </Link>
      </div>
    </div>
  );
}
