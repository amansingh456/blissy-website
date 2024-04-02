"use client";
import React, { useEffect, useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 900) {
        setShowLinks(false);
      } else {
        setShowLinks(true);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <nav className="z-1 w-full z-10 text-lowLight bg-highDark h-28 flex items-center fixed -top-0.5 left-0 right-0">
      <div className="w-full max-w-screen-xxl px-4 m-auto">
        <ul className="flex justify-between w-full items-center">
          <li>
            <a href="/" className="text-4xl md:text-6xl text-mainGreen">
              Blissy
            </a>
          </li>

          {showLinks ? (
            <li className="flex gap-6 ">
              <a href="/" className="clickEffect">
                About
              </a>
              <a href="/" className="clickEffect">
                Blog
              </a>
              <a href="/" className="clickEffect">
                Healers
              </a>
              <a href="/" className="clickEffect">
                Contact Us
              </a>
            </li>
          ) : !showLinks ? (
            <RiMenu5Line
              className="text-4xl md:text-6xl clickEffect"
              onClick={() => setIsSidebarOpen(true)}
            />
          ) : (
            ""
          )}
        </ul>

        {isSidebarOpen && !showLinks && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-highDark opacity-90 z-0"></div>
            <div
              className="fixed  top-10  z-1 w-40 rounded-lg -right-8 bg-mainGreen opacity-100 text-lowLight text-lg flex flex-col items-start justify-center p-4 gap-4"
              style={{ transition: "all 3s 1s ease-in-out" }}
            >
              <div className="flex justify-end w-[80%]">
                <IoIosCloseCircle
                  size={30}
                  onClick={() => setIsSidebarOpen(false)}
                  className="cursor-pointer  clickEffect"
                />
              </div>
              <a href="/" className="clickEffect">
                About
              </a>
              <a href="/" className="clickEffect">
                Blog
              </a>
              <a href="/" className="clickEffect">
                Healers
              </a>
              <a href="/">Contact Us</a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
