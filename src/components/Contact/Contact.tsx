import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-10 md:px-20 py-20"
    >
      <h2 className="text-5xl font-bold mb-16">
        Contact <span className="text-sky-400">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">
            Let's Connect
          </h3>

          <p className="text-gray-400 leading-8 mb-8">
            I'm currently looking for internship and
            full-time opportunities in Full Stack
            Development, AI Engineering, and Product
            Development.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-sky-400" />
              <span>your-email@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-sky-400" />
              <a href="#">
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-sky-400" />
              <a href="#">
                GitHub Profile
              </a>
            </div>

            <div className="flex items-center gap-4">
              <SiLeetcode className="text-sky-400" />
              <a href="#">
                LeetCode Profile
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-2xl font-semibold mb-6">
            Send a Message
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 p-4 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 p-4 rounded-lg outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-slate-800 p-4 rounded-lg outline-none"
            />

            <button
              type="submit"
              className="bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;