import { Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Fostering from "./pages/Fostering";
import Breed from "./pages/Breed";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fostering" element={<Fostering />} />
          <Route path="/breed" element={<Breed />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </I18nextProvider>
  );
}

export default App;
