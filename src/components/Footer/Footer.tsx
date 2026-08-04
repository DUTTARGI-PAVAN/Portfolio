const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col items-center justify-between gap-3 text-center text-sm text-slate-400 md:flex-row">
        <span>© 2026 Pavan Duttargi.</span>
        <span>Built with React, TypeScript and Tailwind CSS.</span>
      </div>
    </footer>
  );
};

export default Footer;
