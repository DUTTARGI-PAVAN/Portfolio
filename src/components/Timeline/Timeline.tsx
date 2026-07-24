import { motion } from "framer-motion";
import { timeline } from "../../data/timeline";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="min-h-screen px-10 md:px-20 py-20"
    >
      <h2 className="text-5xl font-bold mb-16">
        My <span className="text-sky-400">Journey</span>
      </h2>

      <div className="max-w-4xl mx-auto">
        {timeline.map((item) => (
          <motion.div
            key={item.year}
            className="flex gap-6 mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Year */}
            <div className="w-24">
              <h3 className="text-sky-400 font-bold text-xl">
                {item.year}
              </h3>
            </div>

            {/* Content */}
            <div className="border-l-2 border-sky-500 pl-6 pb-8">
              <h4 className="text-2xl font-semibold">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-3">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;