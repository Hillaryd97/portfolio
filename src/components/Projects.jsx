import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import MobileProject from "./MobileProject"; // Import MobileProject component
import rev320 from "./assets/rev320.png";
import tasteTreasure from "./assets/Taste-Treasure.png";
import quiz from "./assets/quiz.png";
import rubyPastries from "./assets/Ruby-Pastries.png";
import otakuWave from "./assets/Otaku-Wave.png";
import { Helmet } from "react-helmet";

import powherImage2 from "./assets/powher-image (2).jpeg";
import powherImage3 from "./assets/powher-image (3).jpeg";
import powherImage4 from "./assets/powher-image (4).jpeg";
import powherImage5 from "./assets/powher-image (5).jpeg";
import powherImage6 from "./assets/powher-image (6).jpeg";
import powherImage7 from "./assets/powher-image (1).png";
import temiImage2 from "./assets/temi-image (2).png";
import temiImage3 from "./assets/temi-image (3).png";
import temiImage4 from "./assets/temi-image (4).png";
import temiImage5 from "./assets/temi-image (5).png";
import temiImage6 from "./assets/temi-image (6).png";
import temiImage7 from "./assets/temi-image (1).png";
const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");

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

  const webProjects = [
    {
      preview: tasteTreasure,
      projectName: "Taste Treasure",
      techStack: "React, TailwindCSS, Supabase",
      description:
        "TasteTreasure is a vibrant online culinary community where food lovers unite to explore a world of mouthwatering recipes.",
      link: "https://taste-treasure.vercel.app/",
      codeLink: "https://github.com/Hillaryd97/taste-teasure",
    },
    {
      preview: rubyPastries,
      projectName: "Ruby Pastries",
      techStack: "React, TailwindCSS, Sanity, Supabase",
      description:
        "A dynamic e-commerce website for Ruby Pastries, enabling customers to browse bakery products and place orders.",
      link: "https://ruby-pastries.vercel.app/",
      codeLink: "https://github.com/Hillaryd97/ruby-pasteries",
    },
    {
      preview: otakuWave,
      projectName: "Otaku Wave",
      techStack: "Next.js, TailwindCSS, Redux, Firebase",
      description:
        "A social network tailored for anime enthusiasts, where users can create posts, view upcoming anime schedules, and manage their anime watchlists. Users can mark anime entries as completed, currently watching, to watch, or rewatch. ",
      link: "http://otaku-wave.vercel.app",
      codeLink: "https://github.com/Hillaryd97/otaku_wave",
    },
    {
      preview: rev320,
      projectName: "Rev 3:20c",
      techStack: "React, TailwindCSS, Framer Motion",
      description:
        "Designed a cake ordering website for REV320C, a small cake business.",
      link: "https://rev360-cakes.vercel.app/",
      codeLink: "https://github.com/Hillaryd97/rev360-cakes",
    },
  ];

  const mobileProjects = [
    {
      previews: [
        powherImage7,
        powherImage2,
        powherImage4,
        powherImage5,
        powherImage6,
        powherImage3,
      ],
      projectName: "PowHER",
      techStack: "React Native, Expo, Firebase",
      description:
        "PowHer is a mobile application focused on empowering women's safety. Currently in beta on both app stores, PowHer offers customizable safety experiences, real-time status monitoring, community engagement, and a suite of additional functionalities.",
      link: "https://github.com/Hillaryd97/quiz-app",
      codeLink: "https://github.com/Hillaryd97/quiz-app",
    },
    {
      previews: [temiImage7, temiImage3, temiImage4, temiImage2, temiImage5],
      projectName: "Temi - App Idea Vault",
      techStack: "React Native, Expo, Firebase",
      description:
        "Temi is your ultimate tool for storing and managing app or web ideas. Seamlessly organize your projects, track progress, and group them into customizable folders for efficient management. Currently in development.",
      link: "https://github.com/Hillaryd97/quiz-app",
      codeLink: "https://github.com/Hillaryd97/quiz-app",
    },
  ];

  return (
    <section id="projects" className="projects-section lg:mt-32">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <h2 className="text-light-gray text-2xl font-bold py-4">
        My Works
      </h2>
      <div className="flex lg:mb-14 mb-4 items-center justify-center">
        <div className="bg-gray-300 rounded-lg">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "web"
                ? "bg-blue-500 text-white font-semibold"
                : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("web")}
          >
            Web Projects
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "mobile"
                ? "bg-blue-500 text-white font-semibold"
                : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("mobile")}
          >
            Mobile Projects
          </button>
        </div>
      </div>
      <div
        className={`projects-container ${
          activeTab === "web" ? "active" : ""
        } grid lg:grid-cols-2`}
      >
        {webProjects.map((project, index) => (
          <ProjectItem
            key={index}
            preview={project.preview}
            projectName={project.projectName}
            techStack={project.techStack}
            description={project.description}
            link={project.link}
            codeLink={project.codeLink}
          />
        ))}
      </div>
      <div
        className={`projects-container ${
          activeTab === "mobile" ? "active" : ""
        } grid lg:grid-cols-2`}
      >
        {mobileProjects.map((project, index) => (
          <MobileProject
            key={index}
            previews={project.previews} // Pass previews as an array
            projectName={project.projectName}
            techStack={project.techStack}
            description={project.description}
            link={project.link}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
