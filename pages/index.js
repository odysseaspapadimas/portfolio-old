import Head from "next/head";
import tw from "tailwind-styled-components";
import Background from "../components/Background";
import Hero from "../components/Hero/Hero";
import { useEffect, useState, useRef } from "react";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer";

const MainContainer = tw.div`flex flex-col items-center justify-center`;

function Home() {
  const [width, setWidth] = useState(0);
  const projectsRef = useRef();

  useEffect(() => {
    setWidth(window.outerWidth);
  }, []);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainContainer>
      <Background />
      <Head>
        <title>Odysseas Papadimas - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="1msgL4asL05YBQsMUhxWYSjdYqu3rCo9OFN9hU7j2TU" />
      </Head>

      <Hero scrollToProjects={scrollToProjects} />
      <Projects ref={projectsRef} />
      <Footer />
    </MainContainer>
  );
}

export default Home;
