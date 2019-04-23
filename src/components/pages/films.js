import React from "react";

import VidGrid from "../films/filmsNav";

export default function() {
  return (
    <div className="filmsPage">
      <div className="skewed-header">
        <div className="header-bg2" />

        <div className="skewed-header-wrapper">
          <div className="skewed-header-content">
            <div className="heading-wrapper">
              <h1>Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      <VidGrid />
    </div>
  );
}
