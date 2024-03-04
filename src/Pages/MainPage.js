import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import useDarkMode from "../Functions/DarkMode";
import Footer from "../Components/Footer";
import AuthorImages from "../Components/AuthorImage";
import SocialsBtn from "../Components/SocialsBtn";

export default function MainPage() {
  const { mode, textColor, toggleMode } = useDarkMode();
  const [showImage, setShowImage] = useState(true);

  const toggleDisplay = () => {
    setShowImage((prevShowImage) => !prevShowImage);
  };

  return (
    <>
      <div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="mainPage">
          <div className="box">
            <div className="texts" style={{ color: `${textColor}` }}>
              <div className="hello">&lt; Hello!/&gt;</div>
              <div className="name">I am Ayush</div>
              <div className="into">I am a Programmer and</div>
              <div className="into">Developer!</div>
              <button
                style={{
                  fontSize: "15px",
                  color: `${textColor}`,
                  backgroundColor: mode === `light` ? `white` : `black`,
                }}
                onClick={toggleDisplay}
                className="button"
              >
                Socials
              </button>
            </div>
            <div>{showImage ? <AuthorImages /> : <SocialsBtn />}</div>
          </div>
        </div>
        <Footer mode={mode} />
      </div>
    </>
  );
}
