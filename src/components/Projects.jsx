import ProjectItem from "./ProjectItem";
import rev320 from "./assets/rev320.png";
import todo from "./assets/todo.png";
import quiz from "./assets/quiz.png";

const Projects = () => {
  return (
    <div className="" id="projects">
      <h2 className="text-light-gray text-xl font-bold py-4 text-left">
        PROJECTS
      </h2>
      <ProjectItem
        preview={rev320}
        projectName={"Rev 3:20c"}
        techStack={"REACT + TAILWINDCSS + FRAMER MOTION"}
        description={
          "A responsive bakery website designed with ReactJS and styled using TailwindCSS."
        }
        link={"https://rev360-cakes.vercel.app/"}
        codeLink={"https://github.com/Hillaryd97/rev360-cakes"}
      />
      <ProjectItem
        preview={todo}
        projectName={"Todo List"}
        techStack={"HTML + TAILWINDCSS + JAVASCRIPT"}
        description={
          "A todo list application that allows users to create tasks efficiently."
        }
        link={"http://todo-list-eta-one.vercel.app/"}
        codeLink={"https://github.com/Hillaryd97/todo-list"}
      />
      <ProjectItem
        preview={quiz}
        projectName={"Quizlly"}
        techStack={"HTML + TAILWINDCSS + JAVASCRIPT"}
        description={"A quiz application powered by TriviaDB API."}
        link={"https://quiz-app-hillaryd97.vercel.app/"}
        codeLink={"https://github.com/Hillaryd97/quiz-app"}
      />
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
