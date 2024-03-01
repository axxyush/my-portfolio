import React from "react";
import useDarkMode from "../Functions/DarkMode";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Resume from "../Components/Resume";
function SeeMore() {
  const { mode, toggleMode } = useDarkMode();
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="SeeMorePage">
        <div className="SeeMoreContent">
          <div className="tooltip-container">
            <div className="tooltip">
              <div className="profile">
                <div className="user">
                  <div className="img">AS</div>
                  <div className="details">
                    <div className="nameOfUser">Ayush</div>
                    <div className="username">@ayushsri</div>
                  </div>
                </div>
                <div className="about">50+ Connections</div>
              </div>
            </div>
            <div className="text">
              <a
                className="icon"
                href="https://www.linkedin.com/in/ayush-srivastava-093054219/"
              >
                <div className="layer">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span
                    style={{
                      background: mode === `light` ? `#0a66c2` : `#000`,
                      fill: mode === `light` ? `white` : `#1da1f2`,
                    }}
                    className="fab fa-linkedin"
                  >
                    <svg viewBox="0 0 448 512" height="1em">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </span>
                </div>
                <div className="text">LinkedIn</div>
              </a>
            </div>
          </div>
          <Resume />
        </div>
      </div>
      <Footer mode={mode} />
    </>
  );
}

export default SeeMore;
