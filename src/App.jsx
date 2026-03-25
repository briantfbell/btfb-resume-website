import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home.jsx";
import PortfolioLayout from "./pages/PortfolioLayout.jsx";
import Resume from "./pages/Resume.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import Summary from "./pages/Summary.jsx";
import Creative from "./pages/Creative.jsx";
import PasswordGate from "./components/PasswordGate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/"
          element={
            <PasswordGate>
              <PortfolioLayout />
            </PasswordGate>
          }
        >
          <Route path="summary" element={<Summary />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>

        <Route path="creative" element={<Creative />} />

        <Route path="*" element={<Navigate to="/resume" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
