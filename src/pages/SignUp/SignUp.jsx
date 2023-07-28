import React from "react";
import * as animationData from "../../assets/animation/animation_Login.json.json";
import Lottie from "react-lottie";
import FormSignUp from "../../Components/FormSignUp/FormSignUp";
const SignUp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex items-center ">
      <div className="w-1/2">
        <Lottie options={defaultOptions} height={400} width={600} />
      </div>
      <div className="w-1/2">
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignUp;
