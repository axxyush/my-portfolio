import React from "react";
import Project from "../Components/Project";
import Navbar from "../Components/Navbar";
import useDarkMode from "../Functions/DarkMode";
import Footer from "../Components/Footer";
import SimonGame from "../images/Simon Game 1.png";
import AmazonClone from "../images/Amazon-1.png";
import AppImage from "../images/app-2.png";
import clgBoundUSA from "../images/college-bound-1.png";

function Projects() {
  const { mode, textColor, toggleMode } = useDarkMode();
  const simonGameDetails = {
    name: "Simon Game",
    siteLink: "https://axxyush.github.io/simon-game/",
    skills: "HTML, CSS, JavaScript",
    description: `Designed and implemented a classic Simon game showcasing
    proficiency in front-end development and user interface design.
    Developed features include random sequence generation, user input
    handling, and responsive design for optimal user experience across
    devices.`,
    challenges: `1. Implementing a truly random sequence generation algorithm.
    2. Ensuring smooth user input handling, especially in rapid response scenarios.`,
    overcome: `1. Researched and experimented with algorithms, achieving a
    balance between randomness and efficiency. 
    2. Fine-tuned event handling and optimized code for varied
    response times through rigorous testing and feedback.`,
    acquired: `1. Strengthened front-end development skills in JavaScript, HTML,
      and CSS.
      <br />
      2. Deepened understanding of responsive design principles,
      debugging, and testing techniques.`,
  };

  const amazonDetails = {
    name: "Amazon Clone",
    siteLink: "https://axxyush.github.io/AmazonClone/",
    skills: "HTML, CSS, JavaScript",
    description: `Developed a front-end Amazon Clone, replicating the user interface and design of the popular e-commerce platform. This project exclusively focused on the visual aspects, omitting backend functionalities. Demonstrated proficiency in front-end technologies such as HTML, CSS, and JavaScript to recreate a responsive and visually appealing Amazon-like shopping experience.`,
    challenges: `The absence of a backend posed challenges in implementing features like real-time data, user authentication, and dynamic interactions. Overcoming these challenges required innovative front-end solutions to emulate certain functionalities and maintain a seamless user experience.`,
    overcome: `Utilized JavaScript to simulate dynamic elements and interactions, creating a responsive interface without the need for server-side processing. Employed creative solutions to mimic certain backend features, ensuring a visually accurate representation of the Amazon platform on the front end.`,
    acquired: `Strengthened front-end development skills, particularly in JavaScript, to handle dynamic content and user interactions. Gained a deeper understanding of client-side rendering and the importance of thoughtful design in providing an authentic user experience.`,
  };

  const appDetail = {
    name: "7 Minute Workout",
    siteLink:
      "https://play.google.com/store/apps/details?id=learn.app.a7minuteworkout",
    skills: "Kotlin, App Development",
    description: `Developed a 7 Minute Workout app using Kotlin for quick, at-home exercises with no equipment. Integrated clear instructions, exercise photos, and a built-in timer for user guidance and progress tracking.`,
    challenges: `Ensuring seamless transitions between exercises and designing an effective, distraction-free timer.`,
    overcome: `Utilized Kotlin to streamline app navigation and enhance user flow. Designed an intuitive timer system for an uninterrupted workout experience.`,
    acquired: `Improved proficiency in Kotlin for Android app development. Enhanced UI/UX design skills and expertise in integrating timers for optimal user engagement.`,
  };

  const clgBoundDetail = {
    name: "College Bound USA",
    siteLink: "https://axxyush.github.io/collegeboundusa/",
    skills: "HTML, CSS, JavaScript",
    description: `Developed the College Bound USA website using HTML, CSS, and JavaScript, providing specialized services for students aspiring to enter top US universities. The site communicates tailored services and fee structures, positioning itself as a valuable partner for a smooth path to prestigious higher education.`,
    challenges: `Balancing visual appeal with clear communication and ensuring accessibility across devices.`,
    overcome: `Utilized HTML, CSS, and JavaScript to create an engaging and informative website. Employed responsive design for optimal viewing on different devices.`,
    acquired: `Enhanced proficiency in HTML, CSS, and JavaScript for web development, focusing on creating visually appealing and informative websites.`,
  };

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
        My Projects
      </h1>
      <div className="projects">
        <Project
          color={textColor}
          bgColor={mode === "light" ? "#f8f9fa" : "black"}
          projectName={simonGameDetails.name}
          image={SimonGame}
          imageAlt={simonGameDetails.name}
          skills={simonGameDetails.skills}
          description={simonGameDetails.description}
          challenges={simonGameDetails.challenges}
          overcome={simonGameDetails.overcome}
          acquired={simonGameDetails.acquired}
          siteLink={simonGameDetails.siteLink}
        />
        <Project
          color={textColor}
          bgColor={mode === "light" ? "#f8f9fa" : "black"}
          projectName={amazonDetails.name}
          image={AmazonClone}
          imageAlt={amazonDetails.name}
          skills={amazonDetails.skills}
          description={amazonDetails.description}
          challenges={amazonDetails.challenges}
          overcome={amazonDetails.overcome}
          acquired={amazonDetails.acquired}
          siteLink={amazonDetails.siteLink}
        />

        <Project
          color={textColor}
          bgColor={mode === "light" ? "#f8f9fa" : "black"}
          projectName={appDetail.name}
          image={AppImage}
          imageAlt={appDetail.name}
          skills={appDetail.skills}
          description={appDetail.description}
          challenges={appDetail.challenges}
          overcome={appDetail.overcome}
          acquired={appDetail.acquired}
          siteLink={appDetail.siteLink}
        />

        <Project
          color={textColor}
          bgColor={mode === "light" ? "#f8f9fa" : "black"}
          projectName={clgBoundDetail.name}
          image={clgBoundUSA}
          imageAlt={clgBoundDetail.name}
          skills={clgBoundDetail.skills}
          description={clgBoundDetail.description}
          challenges={clgBoundDetail.challenges}
          overcome={clgBoundDetail.overcome}
          acquired={clgBoundDetail.acquired}
          siteLink={clgBoundDetail.siteLink}
        />
      </div>
      <Footer mode={mode} />
    </>
  );
}

export default Projects;
