import React from "react";
import "../style.css";

function MainContent() {
  return (
    <div className="main">
      <h1>Fun Facts About Learning React</h1>
      <ul className="main--facts">
        <li>Was Released in 2013</li>
        <li>Has well over 100K stars in Github </li>
        <li>is maintained by Facebook</li>
        <li>Was originally created by Jonathan Walke</li>
      </ul>
    </div>
  );
}

export default MainContent;
