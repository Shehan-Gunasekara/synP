import { useState } from "react";
import { PreviewCard } from "../../../components/preview/PreviewCard";
import { GeneratorSteps } from "./GeneratorSteps";
import { useAuth } from "../../auth/context/useAuth";
import { ImagePromptInput } from "../../prompt/components/ImagePromptInput";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageToVideoGenerator = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  //   const [currentStep, setCurrentStep] = useState(1);
  const [isNoCredits, setIsNoCredits] = useState(false);
  const { user } = useAuth();

  //   const renderCurrentStep = () => {
  //     switch (currentStep) {
  //       case 1:
  //         return (
  //           <ImagePromptInput
  //             setVideoLoading={setVideoLoading}
  //             setVideoUrl={setVideoUrl}
  //             setIsNoCredits={setIsNoCredits}
  //           />
  //         );
  //       default:
  //         return null;
  //     }
  //   };

  return (
    <main className="flex-1  max-w-7xl mx-auto px-6">
      <div className="pt-28 md:pt-40 pb-0">
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4 sm:space-y-6">
          <p className="text-xl sm:text-3xl md:text-5xl font-semibold bg-gradient-to-br from-black to-black/60 bg-clip-text text-transparent leading-tight">
            Consistent Avatar Video Generator
          </p>
          <p className="text-base lg:text-xl text-black/60 max-w-2xl mx-auto">
            Turn your still images into dynamic AI-powered videos
          </p>
        </div>

        {/* <GeneratorSteps
          currentStep={currentStep}
          videoGenerated={!!videoUrl}
          lipSyncComplete={false}
          setCurrentStep={setCurrentStep}
        /> */}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,500px] gap-12">
          <div className="space-y-8">
            {/* {renderCurrentStep()} */}
            <ImagePromptInput
              setVideoLoading={setVideoLoading}
              setVideoUrl={setVideoUrl}
              setIsNoCredits={setIsNoCredits}
            />
          </div>
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <PreviewCard
              title="Output Video"
              isLoading={videoLoading}
              isInput={false}
              videoUrl={videoUrl}
              setVideoUrl={setVideoUrl}
              isNoCredits={isNoCredits}
              currentStep={3}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default ImageToVideoGenerator;
