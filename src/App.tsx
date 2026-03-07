
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import HowItWorks from "./components/ui/HowItWorks";
import CTA from "./components/ui/cta";
import Contact from "./pages/contact";
import Footer from "./components/ui/footer";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/ui/aboutUs";
import WhyUs from "./components/ui/whyUs";
import Services from "./components/ui/services";

import "./App.css";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <ScrollToTop />
            <Navbar />
            <Hero />
            <About />
            <WhyUs />
            <Services />
            <HowItWorks />
            <CTA />
            <Footer />
          </>
        }
      />
      {/* Contact Page Route */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
