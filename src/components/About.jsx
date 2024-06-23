import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { SiPhp, SiSupabase, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <section className="about-section text-left pb-4" id="about">
      <h2 className="text-light-gray text-xl font-bold py-4">About Me</h2>
      <p className="text-white">
        I'm a Frontend Developer with a knack for building creative and
        user-friendly web and mobile applications.
      </p>
      {/* <p className="text-white">
        My name is Hillary Dickson. I have a keen eye for design and a love for
        problem-solving, striving to create impactful experiences that leave a
        lasting impression.
      </p> */}
      <h3 className="text-light-gray text-xl font-bold py-4">
        Technologies I Work With:
      </h3>
      <div className="text-white grid grid-cols-3 gap-4 lg:gap-5 lg:grid-cols-4">
        <div className="flex items-center space-x-1 p-2 w-full bg-dark-blue">
          <AiFillHtml5 size={30} />
          <p>HTML</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-full bg-dark-blue">
          <DiCss3 size={30} />
          <p>CSS</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-full bg-dark-blue">
          <DiJavascript1 size={30} />
          <p>JavaScript</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-full bg-dark-blue">
          <SiPhp size={30} />
          <p>PHP</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-full bg-dark-blue">
          <SiTailwindcss size={30} />
          <p>Tailwind</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-full bg-dark-blue">
          <FaReact size={30} />
          <p>React.js</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-full bg-dark-blue">
          <SiSupabase size={30} />
          <p>Supabase</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-full bg-dark-blue">
          <FaBootstrap size={30} />
          <p>Bootstrap</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-full bg-dark-blue">
          <FaFigma size={30} />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
};

export default About;
