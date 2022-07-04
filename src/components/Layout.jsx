import React from "react";
// import Nav from "./Nav";
import Example from "./DarkNav";
import Footer from "./Footer";
import Main from "./MainContent";

function Layout() {
  return (
    <div>
      <Example />
      {/* <Nav /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
