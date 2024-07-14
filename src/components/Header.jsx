// import { a } from "react-router-dom";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container bg-dark-purple flex items-center justify-center">
      <div className="flex lg:pb-8 pb-12 justify-between items-center">
        <div className="flex w-full lg:w-fit justify-evenly space-x-8 items-center">
          <a
            href="#projects"
            className="py-1 text-xl font-semibold text-light-gray hover:border-b-2 border-b-2 border-dark-purple hover:border-b-light-gray transition duration-150 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#about"
            className="py-1 text-xl font-semibold text-light-gray hover:border-b-2 border-b-2 border-dark-purple hover:border-b-light-gray transition duration-150 ease-in-out"
          >
            About
          </a>
          <a
            href="#contact"
            className="py-1 text-xl font-semibold text-light-gray hover:border-b-2 border-b-2 border-dark-purple hover:border-b-light-gray transition duration-150 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
      {/* Mobile Navigation Bar */}
      {/* qew
      <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pb-4 flex flex-col justify-center items-center space-y-2">
          <a href="#projects"
            className=" py-1 text-lg text-light-gray hover:border-b-2 border-b-2 border-dark-purple hover:border-b-light-gray  transition duration-150 ease-in-out"
          >
            Projects
          </a>
          <a href="#about"
            to=""
            className=" py-1 text-lg text-light-gray hover:border-b-2 border-b-2 border-dark-purple hover:border-b-light-gray  transition duration-150 ease-in-out"
          >
            About
          </a>
          <a href="#contact"
            className=" py-1 text-lg text-light-gray hover:border-b-2 border-b-2 border-dark-purple hover:border-b-light-gray  transition duration-150 ease-in-out"
          >
            Contact
          </a>
          
        </div>
      </div> */}
    </div>
  );
};

export default Header;
