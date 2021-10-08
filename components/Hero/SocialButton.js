import { motion } from "framer-motion";

const SocialButton = ({ href, Icon }) => {
  return (
    <>
      <motion.a
        whileHover={{ scale: 1.2 }}
        className="mx-2 hover:text-secondary duration-200"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Icon}
      </motion.a>
    </>
  );
};

export default SocialButton;
