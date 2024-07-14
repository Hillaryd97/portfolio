import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const MobileProject = ({
  projectName,
  techStack,
  description,
  link,
  codeLink,
  previews = [],
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <motion.div
      className="relative flex flex-col space-4-2 mb-4 bg-dark-blue text-white text-left m-1 shadow-lg"
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="w-fit">
        <div className="overflow-x-auto flex space-x-2 scrollbar-thin">
          {previews.length > 0 ? (
            previews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Project Image ${index + 1}`}
                className="w-48 h-32 object-cover rounded cursor-pointer"
                onClick={openPopup}
              />
            ))
          ) : (
            <p className="text-white">No previews available</p>
          )}
        </div>
        {showPopup && (
          <div className="popup-wrapper">
            <div className="popup bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <button
                className="absolute top-2 right-2 text-white text-lg"
                onClick={closePopup}
              >
                Close
              </button>
              <div className="overflow-x-auto flex space-x-2">
                {previews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`Project Image ${index + 1}`}
                    className="w-80 h-64 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="lg:p-4 p-1.5 mt-2">
          <h2 className="lg:text-xl text-base font-bold lg:pb-2">
            {projectName}
          </h2>
          <p className="md:text-md">{description}</p>
          <div className="flex flex-row space-x-2 lg:space-x-4">
            <div className="flex flex-row space-x-1 items-center py-4 cursor-pointer text-white hover:text-blue-400 duration-300">
              <a
                onClick={openPopup}
                className="text-sm font-bold underline underline-offset-4"
                title={`View ${projectName}`}
              >
                View
              </a>
            </div>
          </div>
          <p className="text-blue-300 lg:pt-4 lg:text-base text-xs font-bold">
            {techStack}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

MobileProject.propTypes = {
  projectName: PropTypes.string,
  techStack: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  codeLink: PropTypes.string,
  previews: PropTypes.arrayOf(PropTypes.string),
};

export default MobileProject;
