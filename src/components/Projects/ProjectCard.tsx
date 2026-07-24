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
    <div
      className="
      bg-slate-900
      rounded-2xl
      p-6
      border
      border-slate-800
      hover:border-sky-500
      hover:-translate-y-2
      transition
    "
    >
      <h3 className="text-2xl font-bold text-sky-400">
        {title}
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {tech.map((item) => (
          <span
            key={item}
            className="bg-slate-800 px-3 py-1 rounded-lg"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <a
          href={github}
          className="bg-sky-500 px-4 py-2 rounded-lg"
        >
          GitHub
        </a>

        <a
          href={demo}
          className="border border-sky-500 px-4 py-2 rounded-lg"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;