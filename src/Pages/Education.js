import React from "react";
import useDarkMode from "../Functions/DarkMode";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Education() {
  const { mode, textColor, toggleMode } = useDarkMode();
  const education = [
    {
      school: "University at Buffalo, The State University of New York",
      degree: "Bachelor of Science",
      year: "expected June 2027",
      GPA: "3.5",
      activities: `Honors College, Social Media Manager of QuantClub, Student Assistant at Elli (Convenience Store)`,
    },
    {
      school: "Boys' High School & College Annexe",
      degree: "High School",
      year: "2009-2023",
      GPA: "85%",
      activities: "School Band guitarist, Naval NCC Cadet",
    },
  ];
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
        My Education
      </h1>
      <div className="experiencePage">
        <div className="experience-grid" style={{ color: `${textColor}` }}>
          {education.map((education, index) => (
            <div key={index} className="experience-card">
              <h2 className="gradient-text">{education.school}</h2>
              <h3>
                {education.degree}, {education.year}
              </h3>
              <p>GPA: {education.GPA}</p>
              <p>Extracurriculars: {education.activities}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer mode={mode} />
    </>
  );
}

export default Education;
