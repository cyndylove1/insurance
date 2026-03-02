import { useState, useEffect } from "react";
import { navLinks } from "../components/constant"; // actual array
import type { NavLinkType } from "../components/constant"; // type only
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../components/button";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll and active section
  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll<HTMLElement>("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") ?? "home";
        }
      });

      setActiveSection(current);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Scroll to section
  const handleScrollLink = (href: string): void => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(href);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 inset-x-0 z-30
          flex items-center justify-between
          px-4 md:px-6 h-14
          transition-all duration-500
          ${scrolled ? "bg-white shadow-md" : "bg-white"}
        `}
      >
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-purple-700">
          Logo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link: NavLinkType) => {
            const isRoute = link.type === "route";
            const sectionId = link.href.replace("#", "");
            const isActive = isRoute
              ? location.pathname === link.href
              : activeSection === sectionId && location.pathname === "/";

            return isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={`px-5 py-1 rounded-full text-sm font-[500] transition-all duration-300
                  ${isActive ? "bg-purple-700 text-white" : "text-black hover:text-purple-700"}`}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleScrollLink(link.href)}
                className={`px-5 py-1 rounded-full text-sm font-[500] transition-all duration-300
                  ${isActive ? "bg-purple-700 text-white" : "text-black hover:text-purple-700"}`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button className="py-2 px-6 bg-purple-700 text-white" text="Get In Touch" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-3xl text-black"
        >
          <HiMenu />
        </button>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden
          transform transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-900 text-3xl"
          >
            <HiX />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 px-6 mt-10">
          {navLinks.map((link: NavLinkType) => {
            const isRoute = link.type === "route";
            const sectionId = link.href.replace("#", "");

            const isActive = isRoute
              ? location.pathname === link.href
              : activeSection === sectionId && location.pathname === "/";

            if (isRoute) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition-colors duration-300
            ${isActive ? "text-purple-700 font-semibold" : "text-gray-900 hover:text-purple-700"}`}
                >
                  {link.name}
                </Link>
              );
            } else {
              return (
                <button
                  key={link.name}
                  onClick={() => handleScrollLink(link.href)}
                  className={`text-lg text-left transition-colors duration-300
            ${isActive ? "text-purple-700 font-semibold" : "text-gray-900 hover:text-purple-700"}`}
                >
                  {link.name}
                </button>
              );
            }
          })}

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <Button className="text-white bg-purple-700 w-full py-2" text="Get In Touch" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
