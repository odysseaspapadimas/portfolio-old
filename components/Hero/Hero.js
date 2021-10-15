import tw from "tailwind-styled-components/dist/tailwind";
import SocialButton from "./SocialButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Skills from "./Skills";

const HeroContainer = tw.div`text-center h-screen flex flex-col items-center justify-center`;
const Header = tw.h1`text-3xl px-1`;
const SubHeader = tw.h1`text-xl px-2`;
const SocialContainer = tw.div`flex justify-center items-center mt-4`;
const SkillsContainer = tw(motion.div)`flex flex-col space-y-2 mt-4`;
const ProjectsButton = tw(
  motion.button
)`p-4 rounded-sm inline-block mt-4 cursor-pointer bg-secondary hover:bg-secondary-hover hover:scale-125 duration-200 text-lg`;

const Hero = ({ scrollToProjects }) => {
  return (
    <HeroContainer>
      <Header>
        
        <Typewriter
          options={{
            cursor: "",
            delay: 60,
          }}
          onInit={(typewriter) => {
            typewriter.typeString("Hi, I'm Odysseas Papadimas.").start();
          }}
        />
      </Header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4 }}
      >
        <SubHeader>
          I'm a Front-end Developer based in Patras, Greece.
        </SubHeader>
        <SocialContainer>
          <SocialButton
            href="https://github.com/odysseaspapadimas"
            Icon={<FaGithub size="40" />}
          />
          <SocialButton
            href="https://www.linkedin.com/in/odysseas-papadimas/"
            Icon={<FaLinkedin size="40" />}
          />
        </SocialContainer>
      </motion.div>

      <SkillsContainer
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ delay: 2.4, duration: 0.4 }}
      >
        <h1 className="text-2xl">My skills:</h1>
        <Skills />
      </SkillsContainer>
      <ProjectsButton
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
        onClick={scrollToProjects}
      >
        My Projects
      </ProjectsButton>
    </HeroContainer>
  );
};

export default Hero;
