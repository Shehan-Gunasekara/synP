import { useState, useEffect } from "react";
import { PromptInput } from "../../prompt/components/PromptInput";
import { PreviewCard } from "../../../components/preview/PreviewCard";
import { LipSyncInput } from "../../lipsync/components/LipSyncInput";
import { GeneratorSteps } from "./GeneratorSteps";
import { useAuth } from "../../auth/context/useAuth";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VideoGenerator = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [lipSyncedVideoUrl, setLipSyncedVideoUrl] = useState<string | null>(
    null
  );
  const [videoLoading, setVideoLoading] = useState(false);
  const [isLipSyncing, setIsLipSyncing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [lipSyncComplete, setLipSyncComplete] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [userCredits, setUserCredits] = useState<any | null>();
  const [isNoCredits, setIsNoCredits] = useState(false);
  const { user, isDisplayedNotification, setIsDisplayedNotification } =
    useAuth();
  const [audioUrl, setAudioUrl] = useState("");
  const [audioObjectUrl, setAudioObjectUrl] = useState<string | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PromptInput
            setVideoLoading={setVideoLoading}
            setVideoUrl={setVideoUrl}
            setIsNoCredits={setIsNoCredits}
          />
        );
      case 2:
        return (
          <div className="space-y-8">
            <LipSyncInput
              videoUrl={generatedVideo}
              setGeneratedVideo={setGeneratedVideo}
              setLipSyncedVideoUrl={setLipSyncedVideoUrl}
              setIsNoCredits={setIsNoCredits}
              audioUrl={audioUrl}
              setAudioUrl={setAudioUrl}
              setAudioObjectUrl={setAudioObjectUrl}
              audioObjectUrl={audioObjectUrl}
              setAudioFile={setAudioFile}
              audioFile={audioFile}
            />
          </div>
        );
      default:
        return null;
    }
  };
  useEffect(() => {
    if (isDisplayedNotification) return;
    setIsDisplayedNotification(true);
    // toast.info(
    //   <div>
    //     <strong className="text-sm">NEW ENHANCED LIPSYNC AVAILABLE!</strong>
    //     <p className="text-xs">
    //       You can now turn on Enhanced Lip Sync for better lip synchronization
    //       and more realistic facial expressions in your videos.
    //     </p>
    //   </div>,
    //   { position: "bottom-left" }
    // );
    toast.info(
      <div
        onClick={() => {
          window.history.pushState({}, "", "/consistent-actor");
          window.dispatchEvent(new PopStateEvent("popstate"));
        }}
        className="cursor-pointer"
      >
        <strong className="text-sm">NEW CONSISTENT CHARACTER AVAILABLE!</strong>
        <p className="text-xs">
          You can now generate a video with the same character and style as your
          image.
        </p>
        <button className="text-[14px] underline">Try now</button>
      </div>,
      { position: "bottom-left" }
    );
  }, []);

  return (
    <main className="flex-1 max-w-7xl mx-auto px-6">
      <div className="pt-28 md:pt-40 pb-0">
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4 sm:space-y-6">
          <p className="text-xl sm:text-3xl md:text-5xl font-semibold bg-gradient-to-br from-black to-black/60 bg-clip-text text-transparent leading-tight">
            Generate your UGC actor
          </p>
          <p className="text-base lg:text-xl text-black/60 max-w-2xl mx-auto">
            Create custom AI actors for your content in seconds
          </p>
        </div>

        <GeneratorSteps
          currentStep={currentStep}
          videoGenerated={false}
          lipSyncComplete={lipSyncComplete}
          setCurrentStep={setCurrentStep}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,500px] gap-12">
          <div className="space-y-8">{renderCurrentStep()}</div>
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <PreviewCard
              title="Output Video"
              isLoading={currentStep == 1 ? videoLoading : isLipSyncing}
              isInput={false}
              videoUrl={currentStep == 1 ? videoUrl : lipSyncedVideoUrl}
              setVideoUrl={
                lipSyncedVideoUrl ? setLipSyncedVideoUrl : setVideoUrl
              }
              isNoCredits={isNoCredits}
              onLipSyncClick={() => {
                setGeneratedVideo(videoUrl);
                setCurrentStep(2);
              }}
              currentStep={currentStep}
            />
          </div>
        </div>
      </div>{" "}
      <ToastContainer />
    </main>
  );
};

export default VideoGenerator;
