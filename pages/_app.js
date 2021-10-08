import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>
        {`
          body {
            background-color: #0b0e11 !important;
            color: #fff !important;
            font-family: "Raleway", sans-serif;
            overflow-x: hidden;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
