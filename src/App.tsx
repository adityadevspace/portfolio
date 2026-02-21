import { useEffect, useState } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Assignments from "./sections/Assignments";
import Contact from "./sections/Contact";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative bg-[#04060f] text-white overflow-x-hidden scroll-smooth">

      {/* Mesh Background */}
      <div className="mesh-bg"></div>

      {/* Cursor Glow */}
      <div
        className="cursor-glow"
        style={{ left: position.x, top: position.y }}
      />

      <ScrollProgress />
      <Navbar />

      <Hero />
      <Skills />
      <Education />
      <Certifications />
      <Assignments />
      <Contact />
    </div>
  );
}