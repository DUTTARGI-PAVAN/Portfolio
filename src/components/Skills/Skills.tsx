import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-10 md:px-20 py-20"
    >
      <h2 className="text-5xl font-bold mb-16">
        My <span className="text-sky-400">Skills</span>
      </h2>

      <div className="space-y-10">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold capitalize mb-5">
              {category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {items.map((skill) => (
                <div
                  key={skill}
                  className="
                    bg-slate-900
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-slate-800
                    hover:border-sky-500
                    hover:-translate-y-1
                    transition
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;