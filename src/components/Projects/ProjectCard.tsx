import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  demo,
}: ProjectProps) => {
  return (
    <div className="glass-panel group flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/45">
      <div className="mb-6 h-36 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(250,204,21,0.12)),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.26),transparent_12rem)] p-5">
        <div className="flex h-full items-end">
          <span className="rounded-full bg-slate-950/60 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
            Featured
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-black text-white transition group-hover:text-cyan-200">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800/90 px-3 py-1 text-xs font-bold text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={github}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-100"
        >
          <FaGithub size={16} />
          GitHub
        </a>

        <a
          href={demo}
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/35 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/10"
        >
          Demo
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
