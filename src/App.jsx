import { useState } from "react";
import { SocialIcon } from "react-social-icons";
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
      <div className="pt-15">
        {" "}
        {/* Added padding-top to account for fixed navbar */}
        <div className="flex items-center justify-between px-8 lg:px-16 py-12 h-full max-w-7xl">
          {/* Left Side - Text */}
          <div className=" ml-1 mt-0 z-30">
            <h1
              className="text-4xl text-white lg:text-7xl font-bold leading-none"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              Hello I am Umar, a
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                backend developer
              </span>
            </h1>
            <h3 className="text-xl mt-5 text-gray-400">
              Building scalable APIs, managing cloud infrastructure &
              architecting backend systems.
            </h3>
            <div className="mt-20">
              <SocialIcon
                url="https://github.com/MohammadUmar5 "
                bgColor="transparent"
                className="mr-4"
                style={{ height: "100px", width: "100px" }}
              />
              <SocialIcon
                url="https://linkedin.com/in/yourusername"
                bgColor="transparent"
                className="mr-4"
                style={{ height: "100px", width: "100px" }}
              />
              <SocialIcon
                url="https://x.com/MohdUmar887"
                bgColor="transparent"
                className="mr-4"
                style={{ height: "100px", width: "100px" }}
              />
              <SocialIcon
                url="mailto:yourname@example.com"
                bgColor="transparent"
                className="mr-4"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-90 h-130 relative left-10 bottom-0 z-20">
            <img
              src="../Avatar_tilted.png"
              alt="VR Developer"
              className="w-full h-full object-contain brightness-150 contrast-160"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
