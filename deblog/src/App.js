import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./page/AboutPage.js";
import TechPage from "./page/TechPage.js";
import ContactPage from "./page/ContactPage.js";
import MainPage from "./page/MainPage.js";
import SubmitPage from "./page/SubmitPage.js";
import ReadyPage from "./page/ReadyPage.js";
import BodyPage from "./page/BodyPage.js";
import BookPage from "./page/BookPage.js";


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;