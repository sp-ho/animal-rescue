import { Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Fostering from "./pages/Fostering";
import Breed from "./pages/Breed";
import Microchips from "./pages/Microchips";
import SpayNeuter from "./pages/SpayNeuter";
import Adoption from "./pages/Adoption";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Sponsors from "./pages/Sponsors";
import Feedback from "./pages/Feedback";
import Adoptable from "./pages/Adoptable";
import AdoptedPhotos from "./pages/AdoptedPhotos";
import AdoptedVideos from "./pages/AdoptedVideos";
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
          <Route path="/microchips" element={<Microchips />} />
          <Route path="/spayneuter" element={<SpayNeuter />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/adoptable" element={<Adoptable />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/adoptedphotos" element={<AdoptedPhotos />} />
          <Route path="/adoptedvideos" element={<AdoptedVideos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </I18nextProvider>
  );
}

export default App;
