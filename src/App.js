import Maincontent from "./components/MainContent";
import Nav from "./components/Nav";

import "./style.css";

function App() {
  return (
    <div className="container">
      <Nav />
      <Maincontent />
    </div>
  );
}

export default App;
