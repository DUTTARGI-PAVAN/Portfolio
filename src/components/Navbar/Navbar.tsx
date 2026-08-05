const Navbar = () => {
  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-xl font-black tracking-wide text-white">
          Pavan<span className="text-cyan-300">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-cyan-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/18"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
