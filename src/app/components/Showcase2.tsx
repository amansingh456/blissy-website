"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import allImages from "../assets/allImages";

interface ImageData {
  className: string;
  src: string;
  alt: string;
  animation: {
    initial: { [key: string]: any };
    animate: { [key: string]: any };
    transition: { [key: string]: any };
  };
}

const Showcase: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const imagesData: ImageData[] = [
    {
      className:
        "bs:w-[45%] sm:w-[40%] sm:h-[84%] md:w-[24%] md:h-[80%] lg:h-[90%] lg:w-[22%] xl:w-[20%] rounded-[20px] md:rounded-[24px] xl:rounded-[25px]  absolute bs:left-[1%] sm:left-[6%]  md:left-[10%]  lg:left-[12%]  xl:left-[10%] bs:top-[6%] md:top-[14%] lg:top-[14%] xl:top-[14%]",
      src: allImages.image1,
      alt: "Phone Left 2",
      animation: {
        initial: { y: 5000 },
        animate: { y: 0 },
        transition: { type: "spring", stiffness: 60, damping: 11, delay: 0.1 },
      },
    },
    {
      className:
        "md:w-[24%] md:h-[80%] lg:w-[22%] xl:w-[20%]  rounded-[25px] lg:h-[90%] absolute hidden md:block md:left-[22%]  xl:left-[25%] top-[8%]",
      src: allImages.image2,
      alt: "Phone Left 2",
      animation: {
        initial: { y: 5000 },
        animate: { y: 0 },
        transition: { type: "spring", stiffness: 60, damping: 13, delay: 0.2 },
      },
    },
    {
      className:
        "bs:w-[45%] sm:w-[46%] sm:h-[84%] md:w-[24%] md:h-[80%] lg:h-[90%] lg:w-[22%] xl:w-[20%] rounded-[20px] md:rounded-[24px] xl:rounded-[25px] absolute bs:left-[27%] sm:left-[28%] md:left-[38%] lg:left-[39%] xl:left-[40%] z-20",
      src: allImages.image4,
      alt: "Phone Left 2",
      animation: {
        initial: { y: 5000 },
        animate: { y: 0 },
        transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.3 },
      },
    },
    {
      className:
        "md:w-[24%] md:h-[80%] lg:w-[22%] xl:w-[20%] lg:h-[90%] rounded-[25px] z-10 absolute hidden md:block md:right-[22%] xl:right-[25%] md:top-[8%]  xl:top-[8%]",
      src: allImages.image3,
      alt: "Phone Left 2",
      animation: {
        initial: { y: 5000 },
        animate: { y: 0 },
        transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.4 },
      },
    },
    {
      className:
        "bs:w-[45%] sm:w-[40%] sm:h-[84%] md:w-[24%] md:h-[80%] lg:w-[22%] xl:w-[20%] lg:h-[90%] rounded-[20px] md:rounded-[24px] xl:rounded-[25px] z-0  absolute  bs:right-[1%] sm:right-[6%] md:right-[10%] lg:right-[12%] xl:right-[10%] bs:top-[6%] md:top-[14%] lg:top-[14%] xl:top-[14%]",
      src: allImages.image5,
      alt: "Phone Left 2",
      animation: {
        initial: { y: 5000 },
        animate: { y: 0 },
        transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.5 },
      },
    },
  ];

  return (
    <div
      className={`w-full  relative overflow-hidden bg-lowDark  bg-cover -z-10 flex bs:-mb-[120px] sm:mb-[0] lg:py-20 xl:pb-40 xl:pt-20 ${
        showAnimation ? "scale-in-bottom" : ""
      }`}
    >
      <div
        className="w-full max-w-screen-xxl px-4 m-auto bs:h-[600px] sm:h-[550px] md:h-[680] lg:h-[500px] xl:h-[620px] flex relative"
        ref={ref}
      >
        {showAnimation &&
          imagesData.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
              initial={image.animation.initial}
              animate={image.animation.animate}
              transition={image.animation.transition}
            />
          ))}
      </div>
    </div>
  );
};

export default Showcase;
