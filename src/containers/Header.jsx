import React from "react";
import logo from "../assets/logo.svg";
import loginIcon from "../assets/headerIcons/login.svg";
import cartIcon from "../assets/headerIcons/cart.svg";

import { HeaderButton, HeaderLink } from "../components";

function Header() {
  return (
    <>
      <header className="sticky top-0 left-0 right-0 w-full px-12 font-primary border-t-4 border-t-themeBlue bg-white xl:px-6">
        <div className="max-w-[1170px] w-calcLargest mx-auto flex justify-between items-center text-primary xl:w-full">
          <div>
            <HeaderButton>Menu</HeaderButton>
          </div>
          <div>
            <img src={logo} alt="logo" className="h-6 lg:h-5 md:h-4" />
          </div>
          <div className="flex items-center gap-x-14">
            <HeaderLink className={"md:hidden"}>Our Standards</HeaderLink>
            <div className="flex items-center gap-x-6">
              <HeaderLink>
                <img src={loginIcon} alt="login icon" className="h-6 lg:h-5" />
              </HeaderLink>
              <HeaderButton>
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
