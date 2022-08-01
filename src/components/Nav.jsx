import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">Murial Anindo</span>
      </div>

      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <Link to="/Security">Blogs</Link>

        <Link to="/Application">Projects </Link>
        <div className="text-sm sm:flex-grow">
          <a
            href="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Blogs
          </a>
          <a
            href="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
