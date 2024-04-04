import FeelSpecial from "./components/FeelSpecial3";
import HeroSection1 from "./components/HeroSection1";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase2";
import MobileScroll from "./components/MobileScroll";
import WindowPeak from "./components/WindowPeak";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Blissy",
  description: "Experience the power of empathy in every call with Blissy",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection1 />
      <Showcase />
      <FeelSpecial />
      <MobileScroll />
      <Faqs />
      <WindowPeak />
      <Footer />
    </>
  );
}
