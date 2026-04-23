import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home.jsx";
import PortfolioLayout from "./pages/PortfolioLayout.jsx";
import Resume from "./pages/resume/Resume.jsx";
import ProjectsPage from "./pages/resume/ProjectsPage.jsx";
import Summary from "./pages/resume/Summary.jsx";
import CreativeLayout from "./pages/creative/CreativeLayout.jsx";
import CreativeLanding from "./pages/creative/CreativeLanding.jsx";
import Work from "./pages/creative/Work.jsx";
import Ask from "./pages/creative/Ask.jsx";
import Plan from "./pages/creative/Plan.jsx";
import Other from "./pages/creative/Other.jsx";
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

        <Route path="creative" element={<CreativeLayout />}>
          <Route index element={<CreativeLanding />} />
          <Route path="work" element={<Work />} />
          <Route path="ask" element={<Ask />} />
          <Route path="plan" element={<Plan />} />
          <Route path="other" element={<Other />} />
        </Route>

        <Route path="*" element={<Navigate to="/resume" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
