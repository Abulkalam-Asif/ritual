import React from "react";
import { logo, loginIcon, cartIcon } from "../assets";
import { HeaderButton, HeaderLink } from "../components";

function Header({ toggleCart }) {
  return (
    <>
      <header className="sticky top-0 left-0 right-0 w-full px-12 font-primary border-t-4 border-t-themeBlue border-b border-b-gray-300 bg-white xl:px-4 z-20">
        <div className="max-w-[1170px] w-calcLargest mx-auto flex justify-between items-center text-primary xl:w-full">
          <div>
            <HeaderButton>Menu</HeaderButton>
          </div>
          <div>
            <a href="/">
              <img src={logo} alt="logo" className="h-6 lg:h-5 md:h-4" />
            </a>
          </div>
          <div className="flex items-center gap-x-14">
            <HeaderLink className={"md:hidden"}>Our Standards</HeaderLink>
            <div className="flex items-center gap-x-6">
              <HeaderLink>
                <img src={loginIcon} alt="login icon" className="h-6 lg:h-5" />
              </HeaderLink>
              <HeaderButton onClick={toggleCart}>
                <img src={cartIcon} alt="cart icon" className="h-6 lg:h-5" />
              </HeaderButton>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
