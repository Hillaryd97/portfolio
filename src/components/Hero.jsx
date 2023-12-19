import { motion } from "framer-motion";
import Header from "./Header";
import { AiOutlineDownload } from "react-icons/ai";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="text-white">
      <Header />
      <div className="text-left lg:pt-20 flex flex-col space-y-6">
        <motion.div
          initial={{ x: "-100px" }}
          animate={{ x: "0px" }}
          transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
        >
          <p className="lg:text-6xl text-4xl">
            Hi, I am{" "}
            <span className=" bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-pink-500 to-green-500 animate-text">
              Simi.
            </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "-200px" }}
          animate={{ x: "0px" }}
          transition={{ type: "tween", duration: 0.5, ease: "easeOut", delay: 0.1 }} // Shorter delay here
        >
          <p className="lg:mr-24 text-xl pb-6">
            I am a <span className="text-blue-500">Frontend Developer</span>{" "}
            with experience building websites. I specialize in frontend
            technologies such as React and TailwindCSS.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="flex items-center space-x-1 py-2 hover:outline hover:outline-1 hover:outline-blue-500 hover:bg-dark-purple px-3 rounded-sm text-light-gray w-fit cursor-pointer bg-blue-500 outline-none duration-300"
          >
            <a href="https://docs.google.com/document/d/1VDwWldRp3m4c1NI1g4lVJ8419eh3aw43fVjY-PAw8_M/edit" className="text-xl text-white ">
              {" "}
              Download CV
            </a>
            <AiOutlineDownload size={22} />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: "-300px" }}
          animate={{ x: "0px" }}
          transition={{ type: "tween", duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex space-x-8">
            <a href="https://twitter.com/hik_ari_">
              <FaTwitter size={40} />{" "}
            </a>
            <a href="https://github.com/Hillaryd97">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/simidickson">
              <FaLinkedin size={40} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
