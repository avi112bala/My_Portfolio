import "./App.css";
import Home from "./Component/Home"
import About from "./Component/About"
import Education from "./Component/Education"
import Experience from "./Component/Experience"
import Skills from "./Component/Skills"
import Project from "./Component/Project"
import Contact from "./Component/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
