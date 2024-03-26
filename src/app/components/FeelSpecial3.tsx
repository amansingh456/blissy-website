"use client";
import React from "react";
import "../style/feelSpecial3.css";
import "../style/commonClass.css";
import GenericButton from "../gen/GenricButton";

const FeelSpecial = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  const buttonStyles =
    "animate-shadow-pulse bg-highDark text-highLight mt-10 px-10 py-4 rounded-full text-xl font-bold tracking-wide hover:bg-mainGreen hover:text-highDark transition duration-300 ease-in-out cursor-pointer clickEffect";

  return (
    <div className="feel-special  photo-section">
      <div className="photo-section-child max-width">
        <div className="photo-section-top">
          <div className="photo-section-heading">feel special more often.</div>
          <div className="photo-section-subheading">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
          </div>
        </div>
        <div className="photo-section-bottom">
          <div className="photo-section-description">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
            lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
            lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
          </div>
          <GenericButton
            text="Get it Now"
            onClick={handleButtonClick}
            style={buttonStyles}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
