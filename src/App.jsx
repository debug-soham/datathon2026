import { useState } from "react";
import NavBar from "./components/NavBar";
import Preloader from "./components/Preloader";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import GallerySection from "./sections/GallerySection";
import FooterSection from "./sections/FooterSection";
import TimelineSection from "./sections/TimelineSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useGSAP(() => {
    if (!showPreloader) {
      ScrollSmoother.create({
        smooth: 3,
        effects: true,
      });
    }
  }, [showPreloader]);

  return (
    <main>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <TimelineSection />
          <NutritionSection />

          <div>
            <GallerySection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
