import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import SeeMore from "./Pages/SeeMore";
import ContactPage from "./Pages/ContactPage";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "seeMore",
    element: <SeeMore />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "skills",
    element: <Skills />,
  },
  {
    path: "experience",
    element: <Experience />,
  },
  {
    path: "education",
    element: <Education />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
