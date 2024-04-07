"use client";
import React from "react";
import GenricButton from "../gen/GenricButton";

const HeroSection1: React.FC = () => {
  const handleButtonClick = () => {};

  const buttonStyles: string =
    "bg-highDark text-lowLight mb-10 mt-10 md:mt-10 px-10 py-4 text-xl font-bold tracking-wide  cursor-pointer clickEffect";

  return (
    <>
      <div className=" bg-lowDark w-full mt-[100px] md:h-[80vh] lg:h-[70vh] xl:h-[70vh] xxl:h-[70vh] flex flex-col items-center ">
        <div className="w-full max-w-screen-xxl px-4 m-auto text-center">
          <h1 className="text-lowLight font-extrabold bs:mt-10 sm:mt-10 bs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl bs:leading-normal sm:leading-normal tracking-wide">
            Talk to the Introverts people like you
          </h1>
          <p className=" text-lowLight text-lg sm:text-2xl md:text-3xl  lg:text-3xl tracking-wide mt-10">
            join now, become someone's
            <span className="text-mainGreen font-bold text-lg sm:text-2xl md:text-3xl  lg:text-3xl tracking-wide">
              &nbsp;Healer&nbsp;
            </span>
            become someone's
            <span className="text-mainGreen font-bold text-lg sm:text-2xl md:text-3xl  lg:text-3xl tracking-wide">
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
