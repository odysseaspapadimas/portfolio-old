import tw from "tailwind-styled-components/dist/tailwind";

const FooterContainer = tw.div`py-3 px-4 bg-gray-900 w-screen mt-10 text-center`;

const Footer = () => {
  return (
    <FooterContainer>
      <h1>
        Contact me at:{" "}
        <a href="mailto:odysseas.patra@gmail.com" className="underline">
          odysseas.patra@gmail.com
        </a>
      </h1>
    </FooterContainer>
  );
};

export default Footer;
