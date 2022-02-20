import { ROUTES } from "src/config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "src/styles/common.scss";

interface RouteType {
  name: string;
  path: string;
  component: React.ReactElement
}

function App() {
  return (
    <Router>
      <Routes>
        {ROUTES.map((route: RouteType, index: number) => (
          <Route
            key={route.name + index}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
