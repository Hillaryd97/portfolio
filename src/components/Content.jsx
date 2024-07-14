import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";

const Content = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
      className="lg:px-6 pb-4"
    >
      <Projects />
      <About />
      <Services />
      <Contact />
    </motion.div>
  );
};

export default Content;
