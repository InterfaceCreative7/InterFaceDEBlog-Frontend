import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/menuBar/About";
import Tech from "./component/menuBar/Tech";
import Contact from "./component/menuBar/Contact";
import Culture from "./component/menuBar/Culture";
import ProjectHome from "./component/menuBar/ProjectHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectHome />} />
        <Route path="/About" element={<About />} />
        <Route path="/Tech" element={<Tech />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Culture" element={<Culture />} />
      </Routes>
    </Router>
  );
}
export default App;