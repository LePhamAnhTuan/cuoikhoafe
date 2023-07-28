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
    <div
      className="grid gap-2 md:grid-cols-2 md:items-center "
      style={{ margin: "100px 20px" }}
    >
      <div className=" min-h-full">
        <Lottie options={defaultOptions} height={400} width={600} />
      </div>
      <div className=" min-h-full">
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignUp;
