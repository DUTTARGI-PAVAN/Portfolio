const Navbar = () => {
  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Timeline",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Pavan<span className="text-sky-400">.</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-sky-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-sky-500 px-5 py-2 rounded-lg hover:bg-sky-600 transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;