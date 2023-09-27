import React from "react";

const HeroLink = ({ text, href = "#" }) => {
  return (
    <>
      <a
        href={href}
        className="w-full text-center whitespace-nowrap bg-themeBlue text-white font-medium px-10 py-3 leading-7 rounded-full transition-colors duration-300 hover:text-themeBlue hover:bg-white md:py-2">
        {text}
      </a>
    </>
  );
};

export default HeroLink;