import React from "react";
import {
  FeaturedAtricle,
  Header,
  Hero,
  Introduction,
  ProductCategoryCards,
} from "../containers";
import featuredImg1 from "../assets/featuredImages/featured1.webp";
import featuredImg2 from "../assets/featuredImages/featured2.webp";
import featuredImg3 from "../assets/featuredImages/featured3.webp";
import { FeaturedH2, FeaturedP, Link1 } from "../components";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <ProductCategoryCards /> */}
      <Introduction />
      <FeaturedAtricle>
        <div className="w-1/2 md:w-full">
          <img src={featuredImg1} alt="featured" />
        </div>
        <div className="w-1/2 flex flex-col gap-y-6 items-start ml-[8.33%] md:w-full md:ml-0 md:mt-8">
          <FeaturedH2 text={"We're not about pseudoscience and half-truths"} />
          <FeaturedP
            text={
              "From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need."
            }
          />
          <Link1 text={"Who We Are"} />
        </div>
      </FeaturedAtricle>
      {/* TODO: Convert these divs into separate components */}
    </>
  );
}

export default Home;
