"use client";
import React, { useState } from "react";
import ScreenText from "./ScreenText";
import allImages from "../assets/allImages";

interface ScrollDataItem {
  heading: string;
  description: string;
  mobile_img: string;
}

const scrollData: ScrollDataItem[] = [
  {
    heading: "Connect. Heal. Communicate.",
    description:
      "Blissy: Where every call brings comfort and healing, connecting hearts in a safe, supportive space.",
    mobile_img: allImages.image6,
  },
  {
    heading: "Empathy in Every Call.",
    description:
      "Discover solace in anonymous conversations with Blissy, where empathy and support meet every voice.",
    mobile_img: allImages.image7,
  },
  {
    heading: "Your Safe Space Online.",
    description:
      "Join Blissy for healing connections, where anonymity fosters open conversations and heartfelt support.",
    mobile_img: allImages.image8,
  },
  {
    heading: "Anonymous Healing Conversations.",
    description:
      "Find healing through connection with Blissy, where every conversation brings comfort and understanding.",
    mobile_img: allImages.image9,
  },
];

const MobileScroll: React.FC = () => {
  const [currentImg, setCurrentImg] = useState<number>(0);

  return (
    <div className="w-full text-lowLight bg-lowDark hidden lg:block">
      <div className="relative py-20 w-full max-w-screen-xxl px-4 m-auto flex">
        <div className="w-[70%]">
          {scrollData.map((screen, i) => (
            <div className="min-h-screen flex justify-center flex-col" key={i}>
              <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
            </div>
          ))}
        </div>
        <div className="w-[30%]flex justify-center">
          <div className="mobile-mockup w-[280px] py-3 h-[600px] roudned-lg rounded-3xl bg-greish shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
            <div className="overflow-hidden h-full flex justify-center items-center absolute-center">
              <img
                src={scrollData[currentImg].mobile_img}
                className="h-[100%] slide-in-right rounded-2xl"
                key={scrollData[currentImg].mobile_img}
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
