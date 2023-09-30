import React from "react";
import { appleIcon, googleIcon } from "../assets";
import Button1 from "./Button1";

const SocialLoginSignup = () => {
  return (
    <>
      <div className="space-y-4">
        <Button1 icon={appleIcon} text={"Sign in with Apple"} />
        <Button1 icon={googleIcon} text={"Sign in with Google"} />
      </div>
    </>
  );
};

export default SocialLoginSignup;
