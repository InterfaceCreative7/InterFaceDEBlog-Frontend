import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./page/AboutPage.js";
import TechPage from "./page/TechPage.js";
import ContactPage from "./page/ContactPage.js";
import MainPage from "./page/MainPage.js";
import SubmitPage from "./page/SubmitPage.js";
import ReadyPage from "./page/ReadyPage.js";
import BodyPage from "./page/BodyPage.js";
import BookPage from "./page/BookPage.js";
import CorrectionPage from "./page/CorrectionPage.js";
import EditPage from "./page/EditPage.js";
import ModifyPage from "./page/ModifyPage.js";



function App() { //page로 router지정
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Book" element={<BookPage />} />
        <Route path="/Tech" element={<TechPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Submit" element={<SubmitPage />} />
        <Route path="/Ready" element={<ReadyPage />} />
        <Route path="/:_id" element={<BodyPage />} />
        <Route path="/Correction" element={<CorrectionPage />} />
        <Route path="/Correction/:_id" element={<EditPage />} />
        <Route path="/Correction/ModifyPage/:_id" element={<ModifyPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;