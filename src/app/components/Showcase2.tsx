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
        "bs:w-[70%] sm:w-[40%] md:w-[32%] lg:w-[22%] xl:w-[20%] rounded-[20px] md:rounded-[24px] xl:rounded-[25px] hidden sm:block absolute sm:left-[6%]  md:left-[12%]  lg:left-[22%]  xl:left-[10%] bs:top-[10%] md:top-[10%] lg:top-[8%] xl:top-[14%]",
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
        "bs:w-[70%] sm:w-[40%] md:w-[32%] lg:w-[22%] xl:w-[20%]  rounded-[25px] absolute  left-[25%] top-[8%] hidden xl:block",
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
        "bs:w-[75%] sm:w-[40%] md:w-[32%] lg:w-[22%] xl:w-[20%] rounded-[20px] md:rounded-[24px] xl:rounded-[25px] absolute bs:left-[13%] sm:left-[30%] md:left-[34%] lg:left-[39%] xl:left-[40%] z-20",
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
        "bs:w-[70%] sm:w-[40%] md:w-[32%] lg:w-[22%] xl:w-[20%] rounded-[25px] z-10 absolute right-[25%] top-[8%] hidden xl:block",
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
        "bs:w-[70%] sm:w-[40%] md:w-[32%] lg:w-[22%] xl:w-[20%] rounded-[20px] md:rounded-[24px] xl:rounded-[25px] z-0 hidden sm:block absolute  sm:right-[6%] md:right-[12%] lg:right-[22%] xl:right-[10%] bs:top-[10%] md:top-[10%]  lg:top-[8%] xl:top-[14%]",
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
      className={`w-full  relative overflow-hidden bg-lowDark bg-cover -z-10 flex py-32 pb-40 ${
        showAnimation ? "scale-in-bottom" : ""
      }`}
    >
      <div
        className="w-full max-w-screen-xxl px-4 m-auto  bs:h-[600px] sm:h-[550px] md:h-[680] lg:h-[500px] xl:h-[620px] flex relative"
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
