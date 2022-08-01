import React from "react";
// import Example from "./DarkNav";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./MainContent";

function Layout() {
  return (
    <div>
      <Nav />
      {/* <Example /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
