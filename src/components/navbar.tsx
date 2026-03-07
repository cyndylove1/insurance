import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./constant";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => document.getElementById(item.id));

      sections.forEach((section) => {
        if (!section) return;
        const sectionTop = section.offsetTop - 100; // Offset for navbar height
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 px-4 md:px-6 ${
        isScrolled ? "bg-white py-3 shadow-2xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter shrink-0">
          <div
            className={`px-2 py-1 text-[12px] md:text-[15px] rounded transition-colors duration-500 ${
              isScrolled ? "bg-(--primary) text-white" : "bg-white text-(--primary)"
            }`}
          >
            E
          </div>
          <h3
            className={`transition-colors duration-500 hidden sm:block ${
              isScrolled ? "text-[#581c87]" : "text-white"
            }`}
          >
            EAGLE LEADERSHIP
          </h3>
        </div>

        {/* Navigation Links */}
        <div
          className={`hidden lg:flex gap-6 xl:gap-8 text-sm font-medium transition-colors duration-500 ${
            isScrolled ? "text-(--primary)" : "text-white opacity-90"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative pb-1 transition-all duration-300 hover:opacity-100 ${
                activeSection === item.id ? "opacity-100" : "opacity-60"
              }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-current transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="shrink-0">
          <button
            className={`px-5 py-1 md:py-2 rounded-full font-bold md:text-sm text-[12px] transition-all duration-500 hover:scale-105 active:scale-95  ${
              isScrolled
                ? "bg-(--primary) text-white"
                : "bg-white text-(--primary)"
            }`}
          >
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
