"use client";
import React from "react";
import GenricButton from "../gen/GenricButton";

const HeroSection1: React.FC = () => {
  const handleButtonClick = () => {};

  const buttonStyles: string =
    "bg-highDark text-lowLight mb-10 mt-10 md:mt-10 px-10 py-4 text-xl font-bold tracking-wide  cursor-pointer clickEffect";

  return (
    <>
      <div className=" bg-lowDark w-full bs:mt-20 sm:mt-24 mt-28 h-[65vh] flex flex-col items-center">
        <div className="w-full max-w-screen-xxl px-4 m-auto text-center">
          <h1 className="text-lowLight font-extrabold bs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide mt-16">
            Talk to the introverts people like you
          </h1>
          <p className="hidden md:block text-lowLight text-lg sm:text-2xl lg:text-3xl tracking-wide mt-10">
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
        <GenricButton
          text={"Get Now"}
          onClick={handleButtonClick}
          style={buttonStyles}
        />
      </div>
    </>
  );
};

export default HeroSection1;
