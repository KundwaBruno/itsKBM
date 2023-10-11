import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import HomePage from '../components/Home';
import Projects from '../components/Projects';
import PageWrapper from '../components/Shared/PageWrapper';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <PageWrapper title="Kundwa Bruno">
        <HomePage />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </PageWrapper>
    </>
  );
};

export default Home;
