import ProjectItem from "./ProjectItem";
import rev320 from "./assets/rev320.png";
import tasteTreasure from "./assets/Taste-Treasure.png";
import quiz from "./assets/quiz.png";
import rubyPastries from "./assets/Ruby-Pastries.png";
import otakuWave from "./assets/Otaku-Wave.png";
import { Helmet } from "react-helmet";

const Projects = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "CreativeWork",
        name: "Taste Treasure",
        url: "https://taste-treasure.vercel.app/",
        description:
          "TasteTreasure is a vibrant online culinary community where food lovers unite to explore a world of mouthwatering recipes.",
        creator: {
          "@type": "Person",
          name: "Hillary Dickson",
        },
      },
      {
        "@type": "CreativeWork",
        name: "Ruby Pastries",
        url: "https://ruby-pastries.vercel.app/",
        description:
          "A dynamic e-commerce website for Ruby Pastries, enabling customers to browse bakery products and place orders.",
        creator: {
          "@type": "Person",
          name: "Hillary Dickson",
        },
      },
      {
        "@type": "CreativeWork",
        name: "Otaku Wave",
        url: "http://otaku-wave.vercel.app",
        description:
          "A social network for anime lovers... (Still in production)",
        creator: {
          "@type": "Person",
          name: "Hillary Dickson",
        },
      },
      {
        "@type": "CreativeWork",
        name: "Rev 3:20c",
        url: "https://rev360-cakes.vercel.app/",
        description:
          "Designed a cake ordering website for REV320C, a small cake business.",
        creator: {
          "@type": "Person",
          name: "Hillary Dickson",
        },
      },
    ],
  };

  return (
    <section id="projects" className="projects-section">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <h2 className="text-light-gray text-xl font-bold py-4 text-left">
        Projects
      </h2>
      <ProjectItem
        preview={tasteTreasure}
        projectName="Taste Treasure"
        techStack="React, TailwindCSS, Supabase"
        description="TasteTreasure is a vibrant online culinary community where food lovers unite to explore a world of mouthwatering recipes."
        link="https://taste-treasure.vercel.app/"
        codeLink="https://github.com/Hillaryd97/taste-teasure"
      />
      <ProjectItem
        preview={rubyPastries}
        projectName="Ruby Pastries"
        techStack="React, TailwindCSS, Sanity, Supabase"
        description="A dynamic e-commerce website for Ruby Pastries, enabling customers to browse bakery products and place orders."
        link="https://ruby-pastries.vercel.app/"
        codeLink="https://github.com/Hillaryd97/ruby-pasteries"
      />
      <ProjectItem
        preview={otakuWave}
        projectName="Otaku Wave"
        techStack="Next.js, TailwindCSS, Redux, Firebase"
        description="A social network for anime lovers... (Still in production)"
        link="http://otaku-wave.vercel.app"
        codeLink="https://github.com/Hillaryd97/otaku_wave"
      />
      <ProjectItem
        preview={rev320}
        projectName="Rev 3:20c"
        techStack="React, TailwindCSS, Framer Motion"
        description="Designed a cake ordering website for REV320C, a small cake business."
        link="https://rev360-cakes.vercel.app/"
        codeLink="https://github.com/Hillaryd97/rev360-cakes"
      />
    </section>
  );
};

export default Projects;
