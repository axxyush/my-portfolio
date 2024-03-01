import React from "react";
// import useDarkMode from "../Functions/DarkMode";
import { Link } from "react-router-dom";

function Project(props) {
  // const { mode, textColor, toggleMode } = useDarkMode();
  return (
    <>
      <div className="projectOuter">
        <div
          style={{ color: props.color, backgroundColor: props.bgColor }}
          className="projectInner"
        >
          <h1 className="gradient-text">{props.projectName}</h1>
          <img
            style={{ height: "100px", border: "1px solid black" }}
            src={props.image}
            alt={props.imageAlt}
          />
          <h3 className="gradient-text">Skills: </h3>
          <p>{props.skills}</p>
          <h3 className="gradient-text">Description: </h3>
          <p>{props.description}</p>
          <h3 className="gradient-text">Challenges: </h3>
          <p>{props.challenges}</p>
          <h3 className="gradient-text">How I Overcame Challenges: </h3>
          <p>{props.overcome}</p>
          <h3 className="gradient-text">Skills Acquired: </h3>
          <p>{props.acquired}</p>
          <Link style={{ textDecoration: "none" }} to={props.siteLink}>
            <p>Click here to view site</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Project;

// <div style={{ margin: "30px" }} className="cards">
//         <img
//           style={{ height: "75px" }}
//           src={props.image}
//           alt={props.imageAlt}
//         />
//         <p className="headings">{props.projectName}</p>
//         <h1>{props.name}</h1> <br />
//         <h3 className="gradient-text">Skills: </h3>
//         <p>{props.skills}</p>
//         <h3 className="gradient-text">Description: </h3>
//         <p>{props.description}</p>
//         <br />
//         <h3 className="gradient-text">Challenges: </h3>
//         <p>{props.challenges}</p>
//         <h3 className="gradient-text">How I Overcame Challenges: </h3>
//         <p>{props.overcome}</p>
//         <h3 className="gradient-text">Skills Acquired: </h3>
//         <p>{props.acquired}</p>
//         <p>Visit Site</p>
//       </div>
