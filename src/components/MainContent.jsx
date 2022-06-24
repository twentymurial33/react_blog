import React from "react";
import "../styles/index.css";
import image from "../assets/322 (1).JPEG";

function MainContent() {
  return (
    <div className="main">
      <h1>Software Developer</h1>
      <p>
        I'm Murial, a software developer with a focus of building
        products/solutions.
        <br></br>
        While learning,growing and having fun and investing in people with
        similar and diverse backgrounds.
        <br></br>
        Lets make this world a better place to live in!
      </p>
      <hr></hr>
      <img src={image} alt="Image" />
    </div>
  );
}

export default MainContent;
