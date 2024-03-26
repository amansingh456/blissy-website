"use client";
import React, { useEffect, useRef, useState } from "react";
import "../style/showcase2.css";
import allImages from "../assets/allImages";

interface ShowcaseProps {}

interface ShowcaseImage {
  id: string;
  src: string;
  alt: string;
}

const Showcase: React.FC<ShowcaseProps> = () => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleProductAnimation = (e: IntersectionObserverEntry[]) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleProductAnimation, options);

    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [showAnimation]);

  const showcaseImages: ShowcaseImage[] = [
    {
      id: "phone-left-1",
      src: `${allImages.image1}`,
      alt: "Phone Left 1",
    },
    {
      id: "phone-left-2",
      src: `${allImages.image2}`,
      alt: "Phone Left 2",
    },
    {
      id: "phone-center",
      src: `${allImages.image3}`,
      alt: "Phone Center",
    },
    {
      id: "phone-right-1",
      src: `${allImages.image4}`,
      alt: "Phone Right 1",
    },
    // {
    //   id: "phone-right-2",
    //   src: `${allImages.image5}`,
    //   alt: "Phone Right 2",
    // },
  ];

  return (
    <div
      className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase-wrapper">
          {showcaseImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="showcase-ui"
              id={image.id}
            />
          ))}
          <img
            src={allImages.image5}
            alt="Phone Right 2"
            className="showcase-ui mt-4"
            id="phone-right-2"
          />
        </div>
      )}
    </div>
  );
};

export default Showcase;
