import React from "react";

export default function() {
  return (
    <div className="bioPage">
      <div className="skewed-header">
        <div className="header-bg1" />

        <div className="skewed-header-wrapper">
          <div className="skewed-header-content">
            <div className="heading-wrapper">
              <h1>BIO</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="squares-wrapper">
        <div className="squares">
          <div className="square">
            <div className="img-wrapper">
              <img
                src="https://kelseycreationsimages.s3-us-west-2.amazonaws.com/kelsey.png"
                alt="Featured Kels"
                id="kelsey"
              />
            </div>
            <div className="square-text-wrapper">
              <h1>About Me</h1>
              <p>
                Hi I'm Kelsey Chamberlain, creator of <em>Kelsey Creations</em>.
                Videography has been my passion since I was ten years old. I
                started <em>Kelsey Creations </em>
                about 4 years ago and hope I can bring you as much joy as I have
                found filming many wonderful people. I grew up in Gilbert,
                Arizona and am currently living in Highland, Utah with my cute
                hubby and new baby boy, Eli.
              </p>
            </div>
          </div>

          <div className="square">
            <div className="square-text-wrapper">
              <h1>My Goal</h1>

              <p>
                Story telling, to bring emotion to my videos and create
                something that people will consider timeless.{" "}
              </p>
            </div>
            <div className="img-wrapper">
              <img
                src="https://kelseycreationsimages.s3-us-west-2.amazonaws.com/aaron.JPG"
                alt="Fam"
              />
            </div>
          </div>
          <div className="square">
            <div className="img-wrapper">
              <img
                src="https://kelseycreationsimages.s3-us-west-2.amazonaws.com/eli.JPG"
                alt="Fam"
              />
            </div>
            <div className="square-text-wrapper">
              <h1>How I Acheive My Goal</h1>

              <p>
                I capture true expressions. I try to show myself and my
                creativity through the eyes of my camera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
