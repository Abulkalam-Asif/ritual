import React from "react";
import {
  Header,
  Hero,
  Introduction,
  ProductCategoryCards,
} from "../containers";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductCategoryCards />
      <Introduction />
    </>
  );
}

export default Home;
