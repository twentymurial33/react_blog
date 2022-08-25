import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import TopBar from "./components/TopBar";

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      // element: <Layout />,
    },

    // { path: "/Blog", element: <Blog /> },
    // { path: "/Portfolio", element: <Portfolio /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="container">
      <TopBar />

      <Router>
        <AppWrapper />
      </Router>
    </div>
  );
}

export default App;
