"use client";
import React, { useRef, useEffect, useState } from "react";

interface ScreenData {
  heading: string;
  description: string;
  mobile_img: string;
}

interface ScreenTextProps {
  screen: ScreenData;
  setCurrentImg: React.Dispatch<React.SetStateAction<number>>;
  i: number;
}

const ScreenText: React.FC<ScreenTextProps> = ({
  screen,
  setCurrentImg,
  i,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const setItemVisible = (entries: IntersectionObserverEntry[]) => {
    if (entries[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    let observerRefValue: HTMLDivElement | null = null;
    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  return (
    <div
      className={`opacity-0 ${
        isVisible ? "opacity-95 duration-500 translate-x-5" : ""
      }`}
      ref={ref}
    >
      <div className="bs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[100px] pr-4 tracking-wide">
        {screen.heading}
      </div>
      <div className="only-mobile">
        <div className="mobile-mockup ">
          <div className="flex">
            <img src={screen.mobile_img} key={screen.mobile_img} alt="mockup" />
          </div>
        </div>
      </div>
      <div className="bs:text-sm sm:text-xl lg:text-2xl tracking-wide leading-[38px] duration-500 translate-x-2 pt-10 pr-10">
        {screen.description}
      </div>
    </div>
  );
};

export default ScreenText;
