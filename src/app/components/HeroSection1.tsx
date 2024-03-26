"use client";
import React from "react";
import GenericButton from "../gen/GenricButton";

const HeroSection1 = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  const buttonStyles =
    "animate-shadow-pulse bg-highDark text-highLight mt-10 px-10 py-4 rounded-full text-xl font-bold tracking-wide hover:bg-mainGreen hover:text-highDark transition duration-300 ease-in-out cursor-pointer clickEffect";

  return (
    <div className=" bg-lowDark mt-28 h-[80vh] flex flex-col justify-center items-center">
      <div className="w-[60%] text-center">
        <h1 className="text-lowLight font-extrabold text-8xl leading-snug tracking-wide">
          Talk to the introverts people like you
        </h1>
        <p className="text-lowLight text-2xl tracking-wide mt-10">
          join now, become someone's
          <span className="text-mainGreen font-bold text-4xl">
            &nbsp;Healer&nbsp;
          </span>
          become someone's
          <span className="text-mainGreen font-bold text-4xl">
            &nbsp;Love&nbsp;
          </span>
        </p>
      </div>
      <GenericButton
        text="Get it Now"
        onClick={handleButtonClick}
        style={buttonStyles}
      />
    </div>
  );
};

export default HeroSection1;
