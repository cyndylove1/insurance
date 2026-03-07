import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/ui/footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Why from "./pages/whyUs";
import Services from "./pages/services";
import HowItWorks from "./pages/howItWorks";
import AboutUs from "./pages/aboutUs";
import "./App.css";
import "./index.css";


function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/contact";

  return (
    <>
      <ScrollToTop />

      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/why-us" element={<Why />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
