import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oii5ilt",
        "template_8blljhk",
        form.current,
        "DLEYJRcI8Zsn3WS_4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Sent"); // Change button text to "Sent"
          setTimeout(() => {
            setButtonText("Send Message"); // Reset button text after 3 seconds
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="text-left text-white mb-8">
      <h2 className="text-light-gray text-xl font-bold py-4">CONTACT ME!</h2>
      <p className="pb-3">
        Have a job for me? Reach me through any of the mediums below!!
      </p>
      <div className="lg:grid lg:grid-cols-4 flex flex-col-reverse">
        <div className="flex lg:flex-col items-center justify-evenly py-3">
          <a
            href="https://twitter.com/hik_ari_"
            className="hover:text-blue-600 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://github.com/Hillaryd97"
            className="hover:text-blue-600 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/simidickson"
            className="hover:text-blue-600 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:Hillaryd97@gmail.com"
            className="hover:text-blue-600 duration-300"
          >
            <SiGmail size={30} />
          </a>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="col-span-3 flex flex-col space-y-2 py-4"
        >
          <input
            className="px-2 py-1.5 bg-dark-purple outline outline-1 rounded-sm outline-blue-500 text-white"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="px-2 py-1.5 bg-dark-purple outline outline-1 rounded-sm outline-blue-500 text-white"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="px-2 py-1.5 bg-dark-purple outline outline-1 rounded-sm outline-blue-500 text-white"
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 600, damping: 19 }}
            className="px-2 py-1.5 rounded-sm bg-blue-500 text-white"
            type="submit"
          >
            {buttonText}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
