import { Helmet } from "react-helmet";
import Content from "./Content";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="container w-full h-fit grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <Helmet>
        <title>Simi Dickson - Frontend Developer</title>
        <meta
          name="description"
          content="Frontend developer specializing in Mobile and Web development. Offering freelance services."
        />
      </Helmet>
      <div>
        <Hero />
      </div>
      <div className="lg:overflow-y-scroll lg:overflow-x-hidden lg:overscroll-none lg:scrollbar-thin lg:scrollbar-track-gray-800 lg:h-screen ">
        <Content />
      </div>
    </div>
  );
};

export default Home;
