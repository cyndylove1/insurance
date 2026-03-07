import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "./constant";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled || !isHome ? "text-[#581c87]" : "text-white";

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 px-4 md:px-6 ${
          isScrolled ? "bg-white py-3 shadow-2xl" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div
              className={`px-2 py-1 text-[12px] md:text-[15px] rounded transition-colors duration-500 ${
                isScrolled || !isHome
                  ? "bg-[#581c87] text-white"
                  : "bg-white text-[#581c87]"
              }`}
            >
              E
            </div>

            <h3
              className={`transition-colors text-[15px] duration-500 hidden sm:block ${textColor}`}
            >
              EAGLE LEADERSHIP
            </h3>
          </div>

          {/* Desktop Links */}
          <div
            className={`hidden lg:flex gap-6 xl:gap-8 text-sm font-medium ${textColor}`}
          >
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="relative pb-1">
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-current transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <Link to="/contact" className="hidden lg:block">
            <button
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                isScrolled || !isHome
                  ? "bg-[#581c87] text-white"
                  : "bg-white text-[#581c87]"
              }`}
            >
              Contact
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden text-3xl lg:hidden ${textColor}`}
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-500 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#581c87] text-3xl"
            >
              <HiX />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-8 mt-12 text-lg font-medium text-[#581c87]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="relative w-fit"
              >
                {item.name}

                {/* Active underline */}
                <span
                  className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#581c87] transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-12"
          >
            <button className="w-full px-5 py-3 rounded-full font-bold text-md transition-all bg-[#581c87] text-white">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
