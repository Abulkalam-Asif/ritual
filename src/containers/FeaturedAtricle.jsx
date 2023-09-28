import React from "react";

const FeaturedAtricle = ({ children, className = "" }) => {
  return (
    <>
      <section className="w-full px-12 font-primary md:px-4">
        <div
          className={`max-w-[1170px] w-calcLargest mx-auto flex items-center xl:max-w-[934px] lg:max-w-[700px] md:w-full md:flex-col ${className}`}>
          {children}
        </div>
      </section>
    </>
  );
};

export default FeaturedAtricle;
