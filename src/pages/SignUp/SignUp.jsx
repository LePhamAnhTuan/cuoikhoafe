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
      className="grid lg:grid-cols-2 lg:items-center "
      style={{ margin: "100px 20px" }}
    >
      <div className="">
        <Lottie options={defaultOptions} height={400} width={600} />
      </div>
      <div className="">
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignUp;
