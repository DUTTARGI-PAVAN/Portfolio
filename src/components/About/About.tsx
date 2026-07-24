import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-10 md:px-20 py-20 flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-10">
          About <span className="text-sky-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <p className="text-gray-400 leading-8 text-lg">
              I'm a Final Year Information Technology student at
              Savitribai Phule Pune University with a strong passion for
              Full Stack Development, Artificial Intelligence, and
              Automation.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-5">
              I enjoy building real-world applications using React,
              TypeScript, Node.js, Spring Boot, MongoDB, and PostgreSQL.
              My goal is to become an AI Product Engineer and contribute
              to innovative products that solve meaningful problems.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-5">
              Currently, I am looking for internship and full-time
              opportunities where I can apply my technical skills and
              continue learning from experienced engineers.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-sky-400">10+</h3>
              <p className="text-gray-400 mt-2">
                Projects Built
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-sky-400">4+</h3>
              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-sky-400">2027</h3>
              <p className="text-gray-400 mt-2">
                Graduation Year
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-sky-400">AI</h3>
              <p className="text-gray-400 mt-2">
                Career Focus
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;