import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="section-shell flex min-h-screen items-center pt-28"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
          className="max-w-3xl"
      >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            <Sparkles size={16} />
            Final Year IT Student
          </div>

          <h1 className="text-5xl font-black leading-[1.02] tracking-normal text-white md:text-7xl">
          Hi, I'm <span className="gradient-text">Pavan Duttargi</span>
        </h1>

          <div className="mt-5 min-h-10 text-2xl font-bold text-cyan-200 md:text-3xl">
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

          <p className="section-copy mt-6">
            I build polished web apps and AI-powered product experiences with
            React, Node.js, Spring Boot, and practical Generative AI workflows.
        </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="/resume.pdf" download className="primary-action">
              <Download size={18} />
              Download Resume
            </a>

            <a href="#contact" className="secondary-action">
              Contact Me
              <ArrowRight size={18} />
            </a>
        </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm text-slate-300">
            {["React", "Spring Boot", "GenAI"].map((item) => (
              <div key={item} className="glass-panel rounded-lg px-4 py-3 text-center font-bold">
                {item}
              </div>
            ))}
          </div>
      </motion.div>

      <motion.div
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
          <div className="glass-panel rounded-[2rem] p-3">
            <img
              src="/Gemini_Generated_Image_.png"
              alt="Pavan Duttargi portfolio visual"
              className="aspect-[4/5] w-full rounded-[1.55rem] object-cover"
            />
          </div>
          <div className="glass-panel absolute -bottom-5 left-4 right-4 rounded-xl p-4">
            <p className="text-sm font-bold text-cyan-200">Currently focused on</p>
            <p className="mt-1 text-lg font-black text-white">AI product engineering</p>
          </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
