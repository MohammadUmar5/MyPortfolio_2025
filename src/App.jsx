import { useState } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import "./App.css";

function App() {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="bg-black text-white">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');`}
      </style>

      {/* True Glassmorphic Navbar - Transparent until content is behind it */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-15 w-full backdrop-blur-md bg-black/0 hover:bg-black/5 transition-all duration-300 py-6">
        <div className="flex justify-center gap-10 items-center h-full">
          {["home", "projects", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`capitalize text-lg font-medium transition-all duration-300 hover:scale-105 px-4 py-2 relative ${
                activeNav === item
                  ? "text-white"
                  : "text-white hover:font-bold "
              }`}
            >
              {item}
              {activeNav === item && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24">
        {" "}
        {/* Added padding-top to account for fixed navbar */}
        <div className="flex items-center justify-between px-8 lg:px-16 py-12 h-150 max-w-7xl">
          {/* Left Side - Text */}
          <div className=" ml-1 mt-[-280px]">
            <h1
              className="text-4xl text-white lg:text-6xl font-bold leading-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Hello I am Umar, a
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                {" "}
                backend developer
              </span>
            </h1>
            <h3 className="text-xl mt-5 text-gray-400">
              Building scalable APIs, managing cloud infrastructure &
              architecting backend systems.
            </h3>
          </div>

          {/* Right Side - Image */}
          <div className="w-100 h-150 relative left-0 bottom-8">
            <img
              src="../Avatar_tilted.png"
              alt="VR Developer"
              className="w-full h-full object-contain brightness-120 contrast-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
