import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md border-white/10">
      <div className="max-w-7xl mx-auto relative flex justify-between items-center px-6 py-4">

        <div className="text-xl font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text select-none">
          &lt;DS/&gt;
        </div>



        <ul className="hidden md:flex gap-8 text-white text-sm uppercase font-semibold tracking-wide absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

     
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium shadow hover:opacity-90 transition"
        >
          🚀 Hire Me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-background border-t border-white/10 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4 text-white text-sm uppercase font-semibold tracking-wide">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block w-full transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

         
            <li>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center text-sm font-medium shadow hover:opacity-90 transition"
              >
                🚀 Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
