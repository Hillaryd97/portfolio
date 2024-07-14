import { motion } from "framer-motion";
import Header from "./Header";
import { AiOutlineDownload } from "react-icons/ai";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import simi from "./assets/simi.jpg";

const Hero = () => {
  return (
    <div className="text-white">
      <Header />
      <div className="grid lg:grid-cols-2">
        <div className="text-left lg:pt-20 flex flex-col space-y-8">
          <motion.div
  initial={{ x: "-100px" }}
  animate={{ x: "0px" }}
  transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
>
  <p className="lg:text-6xl text-4xl">
    Hi, I am{" "}
    <span className="bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-pink-500 to-green-500 animate-text">
      Simi.
    </span>
  </p>
</motion.div>
<motion.div
  initial={{ x: "-200px" }}
  animate={{ x: "0px" }}
  transition={{
    type: "tween",
    duration: 0.5,
    ease: "easeOut",
    delay: 0.1,
  }}
>
  <p className="lg:mr-28 text-xl pb-6">
    I am a <span className="text-blue-500">Software Developer</span> with over 2 years experience in mobile and app development.
  </p>
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
    className="flex items-center space-x-1 py-2 hover:outline hover:outline-1 hover:outline-blue-500 hover:bg-dark-purple px-3 rounded-sm text-light-gray w-fit cursor-pointer bg-blue-500 outline-none duration-300"
  >
    <a
      href="https://docs.google.com/document/d/1VDwWldRp3m4c1NI1g4lVJ8419eh3aw43fVjY-PAw8_M/edit"
      className="text-xl text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download CV
    </a>
    <AiOutlineDownload size={22} />
  </motion.div>
</motion.div>
          </motion.div>
          <motion.div
            initial={{ x: "-300px" }}
            animate={{ x: "0px" }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <div className="flex space-x-8">
              <a
                href="https://twitter.com/hik_ari_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={40} />
              </a>
              <a
                href="https://github.com/Hillaryd97"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/simidickson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={40} />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center mt-6 lg:mt-0">
          <div className="relative">
            <div className="border-4 border-transparent rounded-full p-4 flex items-center lg:m-14 m-6 justify-center lg:w-[400px] lg:h-[400px]">
              <img
                src={simi}
                alt="Simi Dickson"
                className="rounded-full"
                // style={{ width: "400px", height: "400px" }}
              />
            </div>
            <svg
              className="absolute inset-0 w-full h-full spinning-text"
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="curve"
                fill="transparent"
                d="M 125, 125 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
              />
              <text width="500">
                <textPath
                  href="#curve"
                  className="text-lg"
                  fill="white"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  Mobile Developer &nbsp; ············· Freelancer &nbsp; ···················
                  &nbsp; Web Developer &nbsp;
                  ··················· &nbsp;
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
