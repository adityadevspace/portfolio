import { useEffect, useState } from "react";

const sections = ["home", "skills", "education", "certifications", "assignments", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop - 150;
        const height = element.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetTop + height) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050816]/80 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">AK</h1>

        <ul className="flex gap-8 text-sm md:text-base">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`capitalize transition duration-300 ${
                  active === section
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}