import React from "react";

const H3 = ({ text }) => {
  return (
    <>
      <h3 className="font-primary text-2.5xl font-medium text-themeBlue md:text-1.5xl">
        {text}
      </h3>
    </>
  );
};

export default H3;
