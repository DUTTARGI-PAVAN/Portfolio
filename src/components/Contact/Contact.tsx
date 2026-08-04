import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { Send } from "lucide-react";

const Contact = () => {
  const links = [
    { icon: FaEnvelope, label: "your-email@gmail.com", href: "mailto:your-email@gmail.com" },
    { icon: FaLinkedin, label: "LinkedIn Profile", href: "#" },
    { icon: FaGithub, label: "GitHub Profile", href: "#" },
    { icon: SiLeetcode, label: "LeetCode Profile", href: "#" },
  ];

  return (
    <section id="contact" className="section-shell">
      <p className="section-kicker">Contact</p>
      <h2 className="section-title">
        Let’s build something useful together.
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="mb-5 text-2xl font-black text-white">
            Let's Connect
          </h3>

          <p className="section-copy mb-8">
            I'm currently looking for internship and
            full-time opportunities in Full Stack
            Development, AI Engineering, and Product
            Development.
          </p>

          <div className="space-y-3">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="glass-panel flex items-center gap-4 rounded-xl p-4 font-semibold text-slate-200 transition hover:border-cyan-300/45 hover:text-cyan-100"
              >
                <Icon className="text-cyan-300" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8">
          <h3 className="mb-6 text-2xl font-black text-white">
            Send a Message
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-slate-700/70 bg-slate-950/70 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70"
            />

            <button
              type="submit"
              className="primary-action w-full sm:w-auto"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
