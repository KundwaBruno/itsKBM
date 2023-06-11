import type { NextPage } from "next";
import HomePage from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import PageWrapper from "../components/Shared/PageWrapper";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <PageWrapper title="Kundwa Bruno">
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </PageWrapper>
  );
};

export default Home;
