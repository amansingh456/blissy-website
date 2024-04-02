import React from "react";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
import GenricButton from "../gen/GenricButton";

const Footer: React.FC = () => {
  const buttonStyles: string =
    "bg-highDark text-lowLight mb-10 mt-10 md:mt-10 px-10 py-4 text-xl font-bold tracking-wide  cursor-pointer clickEffect";

  return (
    <footer className="bs:py-10 sm:py-10 py-20 w-full text-lowLight bg-lowDark ">
      <div className="w-full max-w-screen-xxl px-4 m-auto flex bs:mb-4 sm:mb-4 bs:flex-col sm:flex-col md:flex-col md:items-center lg:flex-row xl:flex-row  justify-between">
        <div className="w-full p-4">
          <p className="mb-4 text-xl sm:text-3xl lg:text-4xl tracking-wide leading-[38px] font-bold">
            Your privacy, our priority:{" "}
            <span className="text-mainGreen">Blissy</span> ensures your security
            with strict privacy measures.
          </p>
          <img
            src="https://framerusercontent.com/images/JeZ8C11qxwXGHoeMozBuruDXMA.png"
            height={150}
            width={150}
            alt="Blissy"
            className="mb-4"
          />
          <p className="bs:text-sm sm:text-sm lg:text-lg tracking-wide leading-[38px] font-thin ">
            copyright © 2024-25 ABC Technologies Pvt Ltd. Registered under
            FIU-IND (REID VA00032718) Made with ❤️ from INDIA 🇮🇳
          </p>
        </div>

        <div className="w-full mb-10 md:w-[40%] md:mb-0 flex flex-col justify-center items-center bs:mt-4 sm:mt-4">
          <p className="mb-4 cursor-pointer bs:text-sm sm:text-sm lg:text-lg tracking-wide leading-[38px] pt-4 ">
            FOLLOW US ON
          </p>
          <div className="flex gap-6">
            <p className="mb-4 cursor-pointer">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <GrInstagram
                  fontSize={30}
                  className="hover:text-mainGreen duration-300"
                />
              </a>
            </p>
            <p className="mb-4 cursor-pointer">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaSquareTwitter
                  fontSize={30}
                  className="hover:text-mainGreen duration-300"
                />
              </a>
            </p>
            <p className="mb-4 cursor-pointer">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin
                  fontSize={30}
                  className="hover:text-mainGreen duration-300"
                />
              </a>
            </p>
            <p className="cursor-pointer">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ImFacebook2
                  fontSize={30}
                  className="hover:text-mainGreen duration-300"
                />
              </a>
            </p>
          </div>
          <GenricButton style={buttonStyles} text="Get Now" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
