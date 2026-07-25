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
    <section
      id="achievements"
      className="min-h-screen px-10 md:px-20 py-20"
    >
      <h2 className="text-5xl font-bold mb-16">
        My <span className="text-sky-400">Achievements</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              bg-slate-900
              p-6
              rounded-2xl
              border
              border-slate-800
              hover:border-sky-500
              hover:-translate-y-2
              transition
            "
          >
            <h3 className="text-2xl font-bold text-sky-400">
              {item.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;