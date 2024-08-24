import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import TechStackPage from "./pages/TechStack";
import ProjectPage from "./pages/Project";
import ContactPage from "./pages/Contact";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/techstack" element={<TechStackPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </>
  );
}

export default App;
