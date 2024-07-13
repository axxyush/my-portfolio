import React from "react";
import useDarkMode from "../Functions/DarkMode";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Skills() {
  const { mode, textColor, toggleMode } = useDarkMode();
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontFamily: "Kode mono",
          color: `${textColor}`,
        }}
      >
        My Skills
      </h1>
      <div className="skillPage">
        <div
          className="cardS"
          style={{
            backgroundColor: mode === `light` ? `white` : `black`,
          }}
        >
          <p style={{ color: `${textColor}` }} className="textS">
            Languages: Python, Java
          </p>
          <p style={{ color: `${textColor}` }} className="textS">
            {" "}
            Web Development: React, HTML, CSS, JavaScript{" "}
          </p>
          <p style={{ color: `${textColor}` }} className="textS">
            Development Tools: Visual Studio, Android Studio{" "}
          </p>
          <p style={{ color: `${textColor}` }} className="textS">
            Design Tools: PicsArt, Canva, VN Video Editor
          </p>
          <p />
        </div>
      </div>
      <Footer mode={mode} />
    </>
  );
}

export default Skills;
