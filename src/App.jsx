import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection.jsx"
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSections.jsx"
import FlavorSection from "./sections/FlavorSections.jsx"
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection/>
        </div>
      </div>
    </main>
  );
};

export default App;