import { Link, Outlet } from "react-router-dom";
import ChatWidget from "./ChatWidget"; // ✅ Import it
import logo from "../assets/logo.png"; // ✅ Import your logo
const Layout = () => {
  return (
    <>
       <nav className="bg-gradient-to-br from-gray-900 via-black-800 to-black-900 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-gray-700/50">
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
    {/* Logo with enhanced glow effect */}
    <Link to="/" className="flex items-center space-x-3 group">
      <img 
        src={logo} 
        alt="SmartGineer Logo"
        className="h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
        LearnGeniee
      </span>
    </Link>

    {/* Navigation Links with improved hover effects */}
    <div className="hidden md:flex items-center space-x-8">
      {[
        { path: "/", name: "Home", color: "from-cyan-400 to-cyan-500" },
        { path: "/aboutus", name: "About", color: "from-purple-400 to-purple-500" },
        { path: "/summarizer", name: "Summarizer", color: "from-cyan-400 to-cyan-500" },
        { path: "/qa-generator", name: "Q&A Gen", color: "from-purple-400 to-purple-500" },
        { path: "/job-recommend", name: "Career Match", color: "from-cyan-400 to-cyan-500" },
      ].map((link) => (
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

    {/* Mobile Menu Button (optional) */}
    <button className="md:hidden text-gray-300 hover:text-white focus:outline-none">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
</nav>

      <main>
        <Outlet />
        <ChatWidget /> {/* ✅ Add the Chatbot Widget Here */}
      </main>
    </>
  );
};

export default Layout;
