import React from "react";
import Link from "./Link";
import "../style.css";

function Nav() {
  return (
    <div className="Navbar">
      <header>
        <h3>Murial's React Journey</h3>
        <h4>All My React Tutorials</h4>
      </header>
      <nav>
        <ul>
          <p>Portfolio</p>
          <p>Blog</p>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
