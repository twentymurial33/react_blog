import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
    </div>
  );
}

export default Footer;
