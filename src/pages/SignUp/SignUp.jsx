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
    <div className="w-full py-16 px-4">
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        style={{ margin: "80px 0" }}
      >
        <div className=" mx-auto my-4">
          <Lottie
            className="md:w-[400px] sm:w-[300px]"
            options={defaultOptions}
          />
        </div>
        <div>
          <FormSignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
