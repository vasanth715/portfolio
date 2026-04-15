import { useEffect, useRef, useState } from "react";
import { capabilities } from "./capabilities.data";
import CapabilitiesCircle from "./CapabilitiesCircle";
import CapabilityText from "./CapabilityText";
import CapabilityBackground from "./CapabilityBackground";
import ScrollIndicator from "./ScrollIndicator";

const CapabilitiesSection = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("capabilities");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const rawProgress = Math.min(
        Math.max(-rect.top / (rect.height - window.innerHeight), 0),
        1
      );

      // Smooth using requestAnimationFrame
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setProgress((prev) => prev + (rawProgress - prev) * 0.05);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.floor(progress * capabilities.length);

  return (
    <section id="capabilities" className="relative h-[600vh] w-full">
      <CapabilityBackground image={capabilities[activeIndex]?.image} />

      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-6xl px-6 grid grid-cols-3 gap-10 items-center text-white">
          
          <CapabilityText
            position="left"
            title={capabilities[activeIndex]?.title}
          />

          <CapabilitiesCircle
            progress={progress}
            activeIndex={activeIndex}
            total={capabilities.length}
          />

          <CapabilityText
            position="right"
            description={capabilities[activeIndex]?.description}
          />

        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
};

export default CapabilitiesSection;
