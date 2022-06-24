// import Layout from "./components/Layout";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Blog from "./pages/blog/index";
import Portfolio from "./pages/portfolio/index";
import Layout from "./components/Layout";
import "./style.css";

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
    },

    { path: "/Blog", element: <Blog /> },
    { path: "/Portfolio", element: <Portfolio /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="container">
      <Layout />
      <Router>
        <AppWrapper />
      </Router>
    </div>
  );
}

export default App;
