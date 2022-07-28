import React from "react";
import "../styles/index.css";

function Nav() {
  return (
    <div className="Navbar">
      <h3>Murial's Software Development Journey</h3>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
        Button
      </button>

      <ul>
        <p>Home</p>
        <p>Portfolio</p>
        <p>Blog</p>
      </ul>
    </div>
  );
}

export default Nav;
