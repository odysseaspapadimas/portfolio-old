import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

const ProjectCardContainer = tw(
  motion.div
)`flex justify-center items-center space-x-2 border-2 border-gray-700 rounded-sm p-2 m-2 md:m-0 md:p-5 max-w-lg`;
const Tag = tw.p`${({ $bg, $text }) =>
  `${$bg} ${$text}`} text-base p-2 m-1 rounded-sm`;
const ImageContainer = tw.div`min-w-40 min-h-40`;
const InfoContainer = tw.div`flex flex-col items-center h-full`;
const TagsContainer = tw.div`self-start flex items-center flex-wrap`;
const Info = tw.div`self-center mb-2`;
const LinksContainer = tw.div`flex items-center space-x-4 my-auto`;
const Link = tw(
  motion.a
)`py-2 px-4 rounded-sm bg-secondary hover:bg-secondaryHover duration-200`;

const ProjectCard = ({ name, desc, tags, img, gitLink, webLink, left }) => {
  return (
    <ProjectCardContainer whileHover={{ scale: 1.08, rotate: left ? -2 : 2 }}>
      <ImageContainer>
        <img src={img} alt={name} className="w-full h-full" />
      </ImageContainer>
      <InfoContainer>
        <TagsContainer>
          {tags &&
            tags.map((tag, i) => (
              <Tag key={i} $bg={tag[1]} $text={tag[2]}>
                {tag[0]}
              </Tag>
            ))}
        </TagsContainer>
        <Info>
          <h1 className="text-4xl">{name}</h1>
          <p className="text-xl">{desc}</p>
        </Info>

        <LinksContainer>
          <Link
            whileHover={{ scale: 1.2 }}
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            whileHover={{ scale: 1.2 }}
            href={webLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </Link>
        </LinksContainer>
      </InfoContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
