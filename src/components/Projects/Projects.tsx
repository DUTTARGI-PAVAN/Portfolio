import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <p className="section-kicker">Projects</p>
      <h2 className="section-title">
        Selected builds with full stack and AI depth.
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
