"use client";
import React, { useState } from "react";
import {
  IoChevronDownCircleSharp,
  IoChevronUpCircleSharp,
} from "react-icons/io5";

interface Faq {
  que: string;
  ans: string;
}

const Faqs: React.FC = () => {
  const toggleOpen = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  const faqData: Faq[] = [
    {
      que: "What is Blissy ?",
      ans: "Blissy is a mobile app where introverts can connect with random people for conversations and support. It offers a safe space for users to make friends and seek guidance from trained healers for issues like breakup or divorce",
    },
    {
      que: "What are the main features of Blissy?",
      ans: "The main features of Blissy include random matchmaking for conversations, a platform for introverts to connect, and access to trained healers for emotional support",
    },
    {
      que: "How does Blissy ensure user privacy and security?",
      ans: "Blissy ensures user privacy and security by not revealing personal details such as phone numbers or profiles to other users, except for trained healers. Additionally, it employs robust encryption and follows strict privacy guidelines to safeguard user data",
    },
    {
      que: "Can users choose specific interests or topics to discuss with others on Blissy?",
      ans: "Yes, users can select specific interests or topics to discuss with others on Blissy. The app provides options for users to indicate their preferences, allowing for more meaningful and engaging conversations with like-minded individuals",
    },
    {
      que: "Can users access the healing services at any time, or are there specific hours of availability?",
      ans: "Users can access the healing services on Blissy at any time, as the platform offers round-the-clock availability. This ensures that users can seek guidance and support whenever they need it, regardless of the time of day",
    },
    {
      que: "Are there options for users to report inappropriate behavior or content on Blissy?",
      ans: "Yes, Blissy provides options for users to report inappropriate behavior or content. This feature helps maintain a safe and respectful environment for all users, and the Blissy team takes appropriate action in response to reports to ensure a positive experience for everyone.",
    },
  ];
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(faqData.length).fill(false)
  );

  return (
    <div className="py-20 w-full text-lowLight bg-lowDark">
      <div className="w-full max-w-screen-xxl px-4 m-auto">
        <div className="text-xl sm:text-3xl lg:text-4xl tracking-wide leading-[38px] font-bold mb-6">
          FAQ's
        </div>
        <div className="">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-highDark hover:bg-lowDark duration-300 mb-1 p-2"
            >
              <div className="text-md sm:text-xl lg:text-2xl tracking-wide leading-[22px] lg:leading-[38px]">
                <div className="flex justify-between items-center">
                  <span> {faq.que}</span>
                  <span
                    className="cursor-pointer clickEffect"
                    onClick={() => toggleOpen(index)}
                  >
                    {!openStates[index] ? (
                      <IoChevronDownCircleSharp />
                    ) : (
                      <IoChevronUpCircleSharp />
                    )}
                  </span>
                </div>
              </div>
              {openStates[index] && (
                <div className="bs:text-sm sm:text-sm lg:text-lg tracking-wide leading-[38px] font-thin mt-2">
                  {faq.ans}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
