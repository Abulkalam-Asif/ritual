import { useState } from "react";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { Cart, Footer, Header, NewsletterSection } from "./containers";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const toggleCart = () => setIsCartExpanded(prevState => !prevState);
  return (
    <>
      <Header toggleCart={toggleCart} />
      <Cart isCartExpanded={isCartExpanded} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
