import React from "react";
import "../style.css";
import Footer from "./Footer";

function MainContent() {
  return (
    <div className="main">
      <h1>Software Developer</h1>
      <ul className="main--facts">
        <p>
          I'm Murial, a front-end web developer with a focus of building
          products/solutions while learning and growing and having fun - what is
          life without fun
        </p>
      </ul>
      <Footer />
    </div>
  );
}

export default MainContent;
