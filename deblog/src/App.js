import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./page/AboutPage.js";
import TechPage from "./page/TechPage.js";
import ContactPage from "./page/ContactPage.js";
import CulturePage from "./page/CulturePage.js";
import MainPage from "./page/MainPage.js";
import SubmitPage from "./page/SubmitPage.js";
import ReadyPage from "./page/ReadyPage.js";

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
        <Route path="/Ready" element={<ReadyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;