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
    {
      que: "What if I don’t feel safe on the platform? Can I delete my account permanently?",
      ans: "Yes, within the Blissy app, you will find two options to manage your account: one for logging out if you want to take a break, and another to permanently delete your account if you no longer wish to use the platform. This ensures that you have full control over your presence on Blissy, allowing you to leave the app entirely if you ever feel unsafe or uncomfortable.",
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
              className="bg-highDark hover:bg-opacity-30 duration-300 mb-1 p-4"
            >
              <div className="bs:text-md sm:text-xl lg:text-2xl tracking-wide leading-[22px] lg:leading-[38px]">
                <div
                  className="flex justify-between items-center clickEffect cursor-pointer duration-500"
                  onClick={() => toggleOpen(index)}
                >
                  <span> {faq.que}</span>
                  <span className="cursor-pointer clickEffect">
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
