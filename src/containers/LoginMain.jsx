import React from "react";
import { InputBox, Link1, SocialLoginSignup } from "../components";
import { Link } from "react-router-dom";

const LoginMain = () => {
  return (
    <>
      <main className="w-full px-8 font-primary xl:px-6 md:px-0">
        <div className="w-full bg-loginSignupBg bg-cover bg-center bg-no-repeat flex items-center justify-center px-8">
          <div className="w-full max-w-[570px] xl:max-w-[454px] lg:max-w-[340px] bg-white px-24 py-14 my-14 xl:px-20 lg:my-10 lg:px-14 lg:py-6 md:p-6">
            <div className="text-center text-themeBlue mb-10 space-y-3">
              <h2 className="text-xl font-medium lg:text-lg">Login</h2>
              <h3 className="text-lg font-secondary lg:text-base">
                We'll pick up right where we left off.
              </h3>
            </div>
            <form className="space-y-6">
              <InputBox label={"Email"} idHtmlFor={"email"} type="email" />
              <InputBox
                label={"Password"}
                idHtmlFor={"password"}
                type="password"
              />
              <div className="text-center">
                <Link1 text={"Forgot your password?"} fontSize="text-sm" />
              </div>
              <button className="mt-2 font-medium text-white w-full bg-themeBlue text-center p-3 rounded-full transition-colors duration-300 hover:bg-themeYellow hover:text-themeBlue tracking-wider">
                Login
              </button>
            </form>
            <div className="my-4 text-sm font-medium text-themeBlue opacity-60 text-center">
              OR
            </div>
            <SocialLoginSignup />
            <p className="mt-8 text-center text-themeBlue font-secondary text-lg">
              New to Ritual?{" "}
              <Link
                to={"/signup"}
                className="underline hover:opacity-60 transition-opacity duration-300">
                Sign up
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginMain;
