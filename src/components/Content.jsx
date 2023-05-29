import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Content = () => {
  return (
    <motion.div
      initial={{ x: "150px" }}
      animate={{ x: "0px" }}
      transition={{ type: "spring", stiffness: 100, duration: 3 }}
      className="lg:px-6 pb-4"
    >
      <Projects />
      <About />
      <Contact />
    </motion.div>
  );
};

export default Content;
