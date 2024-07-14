import { Helmet } from "react-helmet";
import Content from "./Content";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="container w-full h-fit">
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
      <div className="">
        <Content />
      </div>
    </div>
  );
};

export default Home;
