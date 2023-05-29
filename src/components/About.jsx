import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { DiCss3, DiJavascript1, DiSqllite } from "react-icons/di";
import { SiPhp, SiSupabase, SiTailwindcss } from "react-icons/si";
import { BsGithub } from "react-icons/Bs";

const About = () => {
  return (
    <div className="text-left pb-4" id="about">
      <h2 className="text-light-gray text-xl font-bold py-4">ABOUT</h2>
      <p className="text-white">
        My name is Hillary Dickson. I am passionate about turning ideas into
        reality through creative and innovative solutions. With a keen eye for
        design and a love for problem solving, I strive to create impactful
        experiences that leave a lasting impression.
      </p>
      <p className="text-light-gray text-xl font-bold py-4">Technologies I work with: </p>
      <div className="text-white grid grid-cols-2 gap-4 lg:gap-5 lg:grid-cols-4">
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <AiFillHtml5 size={30} />
          <p>HTML</p>
        </div>{" "}
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <DiCss3 size={30} />
          <p>CSS</p>
        </div>{" "}
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <DiJavascript1 size={30} />
          <p>JavaScript</p>
        </div>{" "}
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <SiPhp size={30} />
          <p>PHP</p>
        </div>{" "}
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <SiTailwindcss size={30} />
          <p>Tailwind</p>
        </div>{" "}
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <FaReact size={30} />
          <p>React.js</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <SiSupabase size={30} />
          <p>Supabase</p>
        </div>{" "}
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <FaBootstrap size={30} />
          <p>Bootstrap</p>
        </div>{" "}
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <DiSqllite size={30} />
          <p>SQL</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <FaFigma size={30} />
          <p>Figma</p>
        </div>
        <div className="flex items-center space-x-1 p-2 w-fit bg-dark-blue">
          <BsGithub size={30} />
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default About;
