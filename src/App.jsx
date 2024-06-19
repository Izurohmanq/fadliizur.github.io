import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import TechStackPage from "./pages/TechStack";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/techstack" element={<TechStackPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
