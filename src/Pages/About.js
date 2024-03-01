import React from "react";
import useDarkMode from "../Functions/DarkMode";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  const { mode, textColor, toggleMode } = useDarkMode();
  return (
    <>
      <div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="aboutPage">
          <div className="aboutContent" style={{ color: `${textColor}` }}>
            <div
              className="aboutContentIn"
              style={{
                backgroundColor: mode === "light" ? "#f8f9fa" : "black",
              }}
            >
              <div style={{ position: "absolute" }} className="loader"></div>{" "}
              <h1 className="gradient-text">&lt;About Me/&gt;</h1>
              <h2>Ayush Srivastava</h2>
              <br />
              <p>
                Greetings! I'm Ayush, a freshman Computer Science major at the
                University at Buffalo. My journey in the world of coding began
                early, sparking a passion that led me to create captivating
                applications, all while relishing the thrill of problem-solving.
                In recent times, my focus has been on excelling in Front-end web
                development, showcasing my proficiency in React.
                <br />
                <br />
                Beyond coding, I wear multiple hats—I'm a confident guitarist, a
                dedicated NGO leader organizing 30+ impactful events, and an 'A'
                certificate holder from the Indian NCC Naval wing. During a
                5-week IMUN internship, I honed my social media marketing and
                communication skills. Currently, I hold the position of Social
                Media Manager at QuantClub, a student-led club at the University
                at Buffalo. Adding to my diverse experiences, I am a student
                employee at Elli, a convenience store on campus. This role has
                equipped me with valuable skills such as customer satisfaction
                and thriving under pressure in a fast-paced environment.
                <br />
                <br />
                As I embark on the search for internships, my goal is to gain
                hands-on experience and further polish my skills. My journey
                reflects a harmonious blend of technology, creativity,
                leadership, and social impact. I am eager to connect with
                like-minded individuals and organizations and I am open to
                collaborating on innovative projects. Let's create something
                extraordinary together!
              </p>
            </div>
          </div>
        </div>
        <Footer mode={mode} />
      </div>
    </>
  );
}

export default About;
