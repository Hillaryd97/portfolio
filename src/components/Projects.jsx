import ProjectItem from "./ProjectItem";
import rev320 from "./assets/rev320.png";
import tasteTreasure from "./assets/Taste-Treasure.png";
import quiz from "./assets/quiz.png";
import rubyPastries from "./assets/Ruby-Pastries.png";
import otakuWave from "./assets/Otaku-Wave.png";

const Projects = () => {
  return (
    <div className="" id="projects">
      <h2 className="text-light-gray text-xl font-bold py-4 text-left">
        PROJECTS
      </h2>
      <ProjectItem
        preview={tasteTreasure}
        projectName={"Taste Treasure"}
        techStack={"REACT + TAILWINDCSS + SUPABASE"}
        description={
          "TasteTreasure is a vibrant online culinary community where food lovers unite to explore a world of mouthwatering recipes."
        }
        link={"https://taste-treasure.vercel.app/"}
        codeLink={"https://github.com/Hillaryd97/taste-teasure"}
      />
      <ProjectItem
        preview={rubyPastries}
        projectName={"Ruby Pastries "}
        techStack={"REACT + TAILWINDCSS + SANITY + SUPABASE"}
        description={
          "A dynamic e-commerce website for Ruby Pastries, enabling customers to browse bakery products and place orders."
        }
        link={"https://ruby-pastries.vercel.app/"}
        codeLink={"https://github.com/Hillaryd97/ruby-pasteries"}
      />
        <ProjectItem
        preview={otakuWave}
        projectName={"Otaku Wave"}
        techStack={"NEXTJS + TAILWINDCSS + REDUX + FIREBASE"}
        description={
          "A social network for anime lovers...(Still in production)"
        }
        link={"http://otaku-wave.vercel.app"}
        codeLink={"https://github.com/Hillaryd97/otaku_wave"}
      />
      <ProjectItem
        preview={rev320}
        projectName={"Rev 3:20c"}
        techStack={"REACT + TAILWINDCSS + FRAMER MOTION"}
        description={
          "Designed a cake ordering website for REV320C, a small cake buisness"
        }
        link={"https://rev360-cakes.vercel.app/"}
        codeLink={"https://github.com/Hillaryd97/rev360-cakes"}
      />

      {/* <ProjectItem
        preview={todo}
        projectName={"Todo List"}
        techStack={"HTML + TAILWINDCSS + JAVASCRIPT"}
        description={
          "A todo list application that allows users to create tasks efficiently."
        }
        link={"http://todo-list-eta-one.vercel.app/"}
        codeLink={"https://github.com/Hillaryd97/todo-list"}
      /> */}
      {/* <ProjectItem
        preview={quiz}
        projectName={"Quizlly"}
        techStack={"HTML + TAILWINDCSS + JAVASCRIPT"}
        description={"A quiz application powered by TriviaDB API."}
        link={"https://quiz-app-hillaryd97.vercel.app/"}
        codeLink={"https://github.com/Hillaryd97/quiz-app"}
      /> */}
      {/* <ProjectItem
        projectName={"Rev 3:20c"}
        techStack={"REACT + TAILWINDCSS + FRAMER MOTION"}
        description={
          "A responsive bakery website designed with ReactJS and styled using TailwindCSS."
        }
        link={""}
      /> */}
    </div>
  );
};

export default Projects;
