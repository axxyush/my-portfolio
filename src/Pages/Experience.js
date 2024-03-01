import React from "react";
import useDarkMode from "../Functions/DarkMode";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Experience() {
  const { mode, textColor, toggleMode } = useDarkMode();
  const experiences = [
    {
      company: "Sarang (Non-Governmental Organization)",
      title: "Regional Head",
      location: "Prayagraj, India",
      year: "July 2021 - September 2023",
      description:
        "Completed a 3-month internship as a videographer and editor at Sarang. Served as a dedicated member of the organization for over a year, overseeing the Instagram account, designing posters, and creating videos for events. Volunteered in 80+ social events across Prayagraj. Promoted to Regional Head, managing 30+ social welfare events. Delivered 10+ impactful speeches in schools, promoting awareness on social issues.",
    },
    {
      company: "International Model United Nations (IMUN)",
      title: "Intern",
      location: "Remote",
      year: "September 2022 - October 2022",
      description:
        "Pursued a 5-week marketing internship at IMUN. Elevated conference engagement through targeted promotion, winning two bonus tasks for creating posts with the highest engagement. Received the Star Performer award.",
    },
    {
      company: "National Cadet Corps",
      title: "Cadet",
      location: "Prayagraj, India",
      year: "September 2019 - July 2021",
      description:
        "Cleared the certificate ‘A’ examination of the Naval NCC. Completed 2 years of training as a Naval Cadet. Trained junior cadets and led troops in march past.",
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
        My Work Experience
      </h1>
      <div className="experiencePage">
        <div className="experience-grid" style={{ color: `${textColor}` }}>
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              <h2 className="gradient-text">{experience.company}</h2>
              <h3>
                {experience.title}, {experience.location}
              </h3>
              <p>{experience.year}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer mode={mode} />
    </>
  );
}

export default Experience;
