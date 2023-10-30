import PageWrapper from '@/components/pageWrapper';
import About from './about';
import Contact from './contact';
import Experience from './experience';
import HeroSection from './hero';
import Projects from './projects';

const Home = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </PageWrapper>
  );
};

export default Home;
