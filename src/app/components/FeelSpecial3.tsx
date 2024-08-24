"use client";
import React from "react";
import GenericButton from "../gen/GenricButton";
import { redirectLink } from "../gen/genricFunc";

const FeelSpecial: React.FC = () => {
  const handleButtonClick = () => {
    redirectLink();
  };

  const buttonStyles: string =
    "bg-highDark text-lowLight mb-10 mt-0 md:mt-10 px-10 py-4 text-xl font-bold tracking-wide  cursor-pointer clickEffect";

  return (
    <div className="bs:h-[60vh] md:h-[80vh] w-full text-lowLight bg-lowDark ">
      <div
        className="w-full max-w-screen-xxl px-4 m-auto bg-cover h-full bg-no-repeat"
        style={{
          backgroundImage: `url("https://ik.imagekit.io/gqdvppqpv/317.jpeg")`,
        }}
      >
        <div className="bs:w-[100%] sm:w-[90%] md:w-[80%] h-full flex flex-col justify-center">
          <div className="">
            <div className="bs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[100px] tracking-wide font-bold mb-6">
              feel special more often with{" "}
              <span className="text-mainGreen">Blissy</span>
            </div>
            <div className="text-lg sm:text-2xl lg:text-3xl tracking-wide leading-[38px] font-bold mb-6">
              Experience the power of empathy in every call with Blissy, your
              trusted companion for healing conversations.
            </div>
          </div>
          <GenericButton
            text="Get it Now"
            onClick={handleButtonClick}
            style={buttonStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
