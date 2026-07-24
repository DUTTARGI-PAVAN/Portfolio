import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
  id="home"
  className="min-h-screen pt-24 flex flex-col md:flex-row items-center justify-between px-10 md:px-20"
>
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="text-sky-400">
            Pavan Duttargi
          </span>
        </h1>

        <div className="text-2xl md:text-3xl mt-4 text-sky-300">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "AI Product Engineer",
              1500,
              "GenAI Enthusiast",
              1500,
            ]}
            repeat={Infinity}
          />
        </div>

        <p className="mt-6 max-w-xl text-gray-400 leading-8">
          Final Year IT student passionate about building
          AI-powered applications using React, Node.js,
          Spring Boot, and Generative AI.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600 transition">
            Download Resume
          </button>

          <button className="border border-sky-500 px-6 py-3 rounded-lg hover:bg-sky-500 transition">
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="https://picsum.photos/400"
          alt="Profile"
          className="w-80 md:w-96 rounded-3xl border-4 border-sky-500 shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;