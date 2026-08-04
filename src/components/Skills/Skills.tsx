import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <p className="section-kicker">Skills</p>
      <h2 className="section-title">
        Tools I use to ship clean, useful products.
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6"
          >
            <h3 className="mb-5 text-xl font-black capitalize text-white">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <div
                  key={skill}
                  className="rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-100"
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
