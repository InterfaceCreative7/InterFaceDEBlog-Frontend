import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./page/AboutPage";
import TechPage from "./page/TechPage";
import ContactPage from "./page/ContactPage";
import CulturePage from "./page/CulturePage";
import MainPage from "./page/MainPage";
import SubmitPage from "./page/SubmitPage";

function App() { //page로 router지정
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Tech" element={<TechPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Culture" element={<CulturePage />} />
        <Route path="/Submit" element={<SubmitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;