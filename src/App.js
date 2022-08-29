import Topbar from "./components/TopBar";
import Homepage from "./components/pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
