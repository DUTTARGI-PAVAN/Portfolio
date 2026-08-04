import { motion } from "framer-motion";

const About = () => {
  const stats = [
    ["10+", "Projects Built"],
    ["4+", "Core Tech Stacks"],
    ["2027", "Graduation Year"],
    ["AI", "Career Focus"],
  ];

  return (
    <section
      id="about"
      className="section-shell"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="section-kicker">About Me</p>
        <h2 className="section-title">
          Building software where product thinking meets AI.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="glass-panel rounded-2xl p-7 md:p-8">
            <p className="section-copy">
              I'm a Final Year Information Technology student at
              Savitribai Phule Pune University with a strong passion for
              Full Stack Development, Artificial Intelligence, and
              Automation.
            </p>

            <p className="section-copy mt-5">
              I enjoy building real-world applications using React,
              TypeScript, Node.js, Spring Boot, MongoDB, and PostgreSQL.
              My goal is to become an AI Product Engineer and contribute
              to innovative products that solve meaningful problems.
            </p>

            <p className="section-copy mt-5">
              Currently, I am looking for internship and full-time
              opportunities where I can apply my technical skills and
              continue learning from experienced engineers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(([value, label]) => (
              <div key={label} className="glass-panel rounded-xl p-6">
                <h3 className="text-3xl font-black text-cyan-300">{value}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
