import { useState } from "react";
import { Card } from "../ui/Card";
import { PreviewImage } from "./PreviewImage";
import VideoPlayer from "./VideoPlayer";
import { Button } from "../ui/Button";
import { Download, Mic, Trash2 } from "lucide-react";
import { useAuth } from "../../features/auth/context/useAuth";

interface PreviewCardProps {
  title: string;
  isInput: boolean;
  videoUrl: string | null;
  setVideoUrl: (url: string | null) => void;
  isNoCredits: boolean;
  onLipSyncClick?: () => void;
  currentStep: number;
  isLoading?: boolean;
  removeVideo?: () => void;
}

export function PreviewCard({
  title,
  isInput,
  videoUrl,
  setVideoUrl,
  isNoCredits,
  onLipSyncClick,
  currentStep,
  removeVideo,
  isLoading,
}: PreviewCardProps) {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const { isEnableEnhanceLipSync } = useAuth();
  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const handleVideoError = () => {
    setIsVideoLoading(false);
    setVideoUrl(null);
  };

  const handleDownload = async () => {
    if (!videoUrl) return;

    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ugc-video.mp4";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base lg:text-xl font-medium">{title}</h2>
        {!isInput ? (
          <p className="sm:text-sm text-xs text-black/60">Real-time preview</p>
        ) : (
          <p
            className="sm:text-sm text-xs text-black/60 cursor-pointer"
            onClick={removeVideo}
          >
            {" "}
            <Trash2 className="w-4 h-4" />
          </p>
        )}
      </div>
      <Card className="overflow-hidden">
        {videoUrl ? (
          <>
            <div className="justify-center items-center flex">
              <VideoPlayer
                videoUrl={videoUrl}
                onLoad={handleVideoLoad}
                onError={handleVideoError}
                isLoading={isVideoLoading}
              />
            </div>
            {!isInput && (
              <div className="p-4 border-t flex justify-between items-center">
                <Button
                  onClick={handleDownload}
                  variant="secondary"
                  className="flex items-center gap-2 sm:text-sm text-[8px]"
                >
                  <Download className="sm:w-4 w-3 sm:h-4 h-3" />
                  Download
                </Button>
                {currentStep === 1 && (
                  <Button
                    onClick={onLipSyncClick}
                    variant="secondary"
                    className="flex items-center gap-2  sm:text-sm text-[8px]"
                  >
                    <Mic className="sm:w-4 w-3 sm:h-4 h-3" />
                    Add Voice
                  </Button>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            {/* {isLoading ? (
            ) : (
            )} */}
            <PreviewImage
              isNoCredits={isNoCredits}
              type={currentStep}
              isLoading={isLoading}
            />
          </>
        )}
        {/* <PreviewActions videoUrl={videoUrl} /> */}
      </Card>
      {currentStep === 1 && !isInput && (
        <div className="flex items-center p-1 gap-2 rounded-lg text-gray-700 sm:text-xs text-[10px]">
          <p>
            The cost to generate each video is between $0.90 and $1.75,
            depending on the steps. With $10, you can use the model
            approximately 5 times.
          </p>
        </div>
      )}
      {currentStep === 2 && !isInput && (
        <div className="flex items-center p-1 gap-2 rounded-lg text-gray-700 sm:text-xs text-[10px]">
          <p>
            The cost to generate each video is{" "}
            {isEnableEnhanceLipSync ? "$3.00" : "$2.35"} for every minute of
            video content. This charge is based on the total length of the
            video, with the rate applied to each minute of footage generated.
          </p>
        </div>
      )}
      {currentStep === 3 && !isInput && (
        <div className="flex items-center p-1 gap-2 rounded-lg text-gray-700 sm:text-xs text-[10px]">
          <p>
            The cost to generate each video is $2 for every minute of video
            content. This charge is based on the total length of the video,
            with the rate applied to each minute of footage generated.
          </p>
        </div>
      )}
    </div>
  );
}
