"use client";
import React, { useEffect, useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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
    <nav className="z-1 w-full z-10 text-lowLight bg-highDark h-[100px] flex items-center fixed -top-0.5 left-0 right-0">
      <div className="w-full max-w-screen-xxl px-4 m-auto">
        <ul className="flex justify-between w-full items-center">
          <li>
            <a href="/" className="text-4xl md:text-6xl text-mainGreen">
              Blissy
            </a>
          </li>

          {showLinks ? (
            <AnimatePresence>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 "
              >
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
              </motion.li>
            </AnimatePresence>
          ) : !showLinks ? (
            <AnimatePresence>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 "
              >
                <RiMenu5Line
                  className="text-4xl md:text-6xl clickEffect"
                  onClick={() => setIsSidebarOpen(true)}
                />
              </motion.li>
            </AnimatePresence>
          ) : (
            ""
          )}
        </ul>

        {isSidebarOpen && !showLinks && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 w-full h-full  bg-highDark opacity-90 z-0"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="fixed top-8  z-1 w-40 rounded-lg -right-8 bg-mainGreen opacity-100 text-lowLight text-lg flex flex-col items-start justify-center p-4 gap-4"
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
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
