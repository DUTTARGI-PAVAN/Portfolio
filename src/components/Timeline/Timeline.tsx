import { motion } from "framer-motion";
import { timeline } from "../../data/timeline";

const Timeline = () => {
  return (
    <section id="timeline" className="section-shell">
      <p className="section-kicker">Journey</p>
      <h2 className="section-title">
        A steady path from fundamentals to AI product engineering.
      </h2>

      <div className="mt-12 max-w-4xl">
        {timeline.map((item) => (
          <motion.div
            key={item.year}
            className="relative flex gap-5 pb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 shrink-0 pt-1">
              <h3 className="text-lg font-black text-cyan-300">
                {item.year}
              </h3>
            </div>

            <div className="relative border-l border-cyan-300/35 pl-7">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]" />
              <div className="glass-panel rounded-xl p-5">
              <h4 className="text-xl font-black text-white">
                {item.title}
              </h4>

                <p className="mt-3 leading-7 text-slate-400">
                {item.description}
              </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
