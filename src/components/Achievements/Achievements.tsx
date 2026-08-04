import { motion } from "framer-motion";

const achievements = [
  {
    title: "10+ Projects",
    description: "Built Full Stack and AI-powered applications.",
  },
  {
    title: "AWS Volunteer",
    description: "AWS Student Builder Group Volunteer.",
  },
  {
    title: "8+ CGPA",
    description: "Maintained a strong academic record.",
  },
  {
    title: "AI Product Engineer",
    description: "Focused on AI, Automation, and Product Development.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-shell">
      <p className="section-kicker">Highlights</p>
      <h2 className="section-title">
        Proof points that show consistency and momentum.
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 transition hover:-translate-y-2 hover:border-cyan-300/45"
          >
            <h3 className="text-2xl font-black text-cyan-200">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
