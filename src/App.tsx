import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Achievements from "./components/Achievements/Achievements";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen overflow-hidden text-slate-100">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
