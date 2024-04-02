import FeelSpecial from "./components/FeelSpecial3";
import HeroSection1 from "./components/HeroSection1";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase2";
import MobileScroll from "./components/MobileScroll";
import WindowPeak from "./components/WindowPeak";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

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
