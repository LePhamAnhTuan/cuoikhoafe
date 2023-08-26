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
      className=" grid gap-2 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 md:items-center sm:max-xl   "
      style={{ margin: "100px 20px" }}
    >
      <div>
        <Lottie options={defaultOptions} height={400} width={600} />
      </div>
      <div>
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignUp;
