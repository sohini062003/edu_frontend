import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import ChatWidget from "./ChatWidget";
import logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links data
  const navLinks = [
    { path: "/", name: "Home", color: "from-gray-400 to-gray-500" },
    { path: "/aboutus", name: "About", color: "from-purple-400 to-purple-500" },
    { path: "/summarizer", name: "Summarizer", color: "from-cyan-400 to-cyan-500" },
    { path: "/qa-generator", name: "Q&A Gen", color: "from-green-400 to-green-500" },
    { path: "/job-recommend", name: "Career Match", color: "from-yellow-400 to-yellow-500" },
  ];

  return (
    <>
      <nav className={`bg-gradient-to-br from-gray-900 via-black-800 to-black-900 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-gray-700/50 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                className="flex items-center space-x-3 group"
                onClick={closeMobileMenu}
              >
                <img 
                  src={logo} 
                  alt="LearnGeniee Logo"
                  className="h-20 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                  LearnGeniee
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="relative px-1 py-2 font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10 text-gray-300 group-hover:text-white">
                    {link.name}
                  </span>
                  <span className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></span>
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r ${link.color} transition-all duration-300 group-hover:w-[calc(100%-8px)] group-hover:left-1`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`block px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r ${link.color} hover:bg-opacity-10 transition-all duration-300 border-b border-gray-800 last:border-b-0`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
        <ChatWidget />
      </main>
    </>
  );
};

export default Layout;
