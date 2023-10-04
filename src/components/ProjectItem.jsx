import PropTypes from "prop-types";
// import { BsFillEyeFill, BsCodeSlash } from "react-icons/Bs";
import { motion } from "framer-motion";

const ProjectItem = ({
  projectName,
  techStack,
  description,
  link,
  codeLink,
  preview,
}) => {
  return (
    <motion.div
      className="group relative flex flex-col space-4-2 mb-4 bg-dark-blue text-white text-left p-1"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="w-fit ">
        <img src={preview} alt="Project Image" />
        <div className="lg:p-4 p-1.5 absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-opacity-80 opacity-0 bg-black group-hover:h-full group-hover:opacity-100 duration-500">
          <p className="lg:text-xl text-base font-bold lg:pb-2">{projectName}</p>
          <p className="lg:text-md text-sm text-center">{description}</p>
          <div className="flex flex-row space-x-2 lg:space-x-4">
            <div className="flex flex-row space-x-1 items-center py-4 cursor-pointer text-white hover:text-blue-400 duration-300">
              {/* <BsFillEyeFill size={15} /> */}
              <a href={link} className="text-sm font-bold underline underline-offset-4">
                Visit
              </a>
            </div>
            <div className="flex flex-row items-center py-1.5 px-1 cursor-pointer text-white  hover:text-blue-400 duration-300">
              {/* <BsCodeSlash size={15} /> */}
              <a href={codeLink} className="text-sm font-bold underline underline-offset-4">
                Code
              </a>
            </div>
          </div>
          <p className="text-blue-300 lg:pt-8 lg:text-base text-xs font-bold">{techStack}</p>
        </div>
      </div>
    </motion.div>
  );
};

ProjectItem.propTypes = {
  preview: PropTypes.string,
  projectName: PropTypes.string,
  techStack: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  codeLink: PropTypes.string,
};

export default ProjectItem;
