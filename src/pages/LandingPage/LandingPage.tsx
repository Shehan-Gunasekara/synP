import { useEffect, useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection";
import { FeaturesSection } from "./sections/FeaturesSection";
// import { LipSyncFeatureNotice } from "./components/LipSyncFeatureNotice";
import { LipSyncBanner } from "./components/LipSyncBanner";
import { ConsistentCharacterBanner } from "./components/ConsistentCharacterBanner";
import { NewFeatureNotice } from "./components/NewFeatureNotice";

export function LandingPage() {
  const [showFeatureNotice, setShowFeatureNotice] = useState(false);

  useEffect(() => {
    //   // Check if user has seen the notice before
    //   const hasSeenNotice = localStorage.getItem("hasSeenNewFeatureNotice");
    //   if (!hasSeenNotice) {
    setShowFeatureNotice(true);
    // setTimeout(() => {
    //   setShowFeatureNotice(false);
    // }, 10000);
    //   }
  }, []);

  const handleCloseNotice = () => {
    setShowFeatureNotice(false);
    // localStorage.setItem("hasSeenNewFeatureNotice", "true");
  };

  const handleTryIt = () => {
    window.history.pushState({}, "", "/consistent-actor");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const handleLearnMore = () => {
    const characterSection = document.getElementById("consistent-character");
    if (characterSection) {
      characterSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setShowFeatureNotice(false);
  };

  const handleGetStarted = () => {
    window.history.pushState({}, "", "/ugc-actor");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen">
      {showFeatureNotice && (
        <NewFeatureNotice
          onClose={handleCloseNotice}
          onTryIt={handleTryIt}
          onLearnMore={handleLearnMore}
        />
      )}
      <HeroSection onGetStarted={handleGetStarted} />

      <section id="consistent-character">
        <ConsistentCharacterBanner />
      </section>
      <LipSyncBanner />
      <ProcessSection />
      <FeaturesSection />
    </div>
  );
}
