import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { SiPhp, SiSupabase, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <section className="about-section  lg:pb-4" id="about">
      <h2 className="text-light-gray text-2xl font-bold lg:py-4 text-center">
        About Me
      </h2>
      <div className="grid lg:grid-cols-2 lg:gap-4 mt-2">
        <p className="text-white text-left lg:mt-4 mb-4 ">
          Hi, I'm Simi, a software developer specializing in frontend
          development. I create both mobile and web applications, focusing on
          building user-friendly and innovative solutions. In my free time, I
          indulge in anime, K-dramas.
          {/* As an indie
          developer, I enjoy sharing my app development journey on TikTok, where
          I showcase projects and engage with the community. */}
        </p>
        <div className="text-white grid grid-cols-3 gap-4 lg:gap-5">
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
      </div>
    </section>
  );
};

export default About;
