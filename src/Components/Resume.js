import React, { useState } from "react";
import resumeImg from "./../images/ayush_resume.png";

function Resume() {
  const [showImage, setShowImage] = useState(true);
  const toggleDisplay = () => {
    setShowImage((prevShowImage) => !prevShowImage);
  };
  return (
    <div onClick={toggleDisplay}>
      {showImage ? (
        <div className="book">
          <img src={resumeImg} alt="resume" width="100%" height="100%" />
          <div className="cover">
            <p>My Resume</p>
          </div>
        </div>
      ) : (
        <img
          src={resumeImg}
          style={{ height: "300px", border: "1px solid black" }}
          alt="Resume.png"
        />
      )}
    </div>
  );
}

export default Resume;
