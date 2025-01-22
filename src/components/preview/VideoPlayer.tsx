import React, { useRef, useEffect } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  onLoad?: () => void;
  onError?: () => void;
  isLoading?: boolean;
}

export default function VideoPlayer({
  videoUrl,
  onLoad,
  onError,
  isLoading,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement || (document as any).webkitFullscreenElement; // Type assertion for non-standard property

      if (fullscreenElement === videoElement) {
        // Video is in fullscreen; set object-fit to contain
        videoElement.style.objectFit = "contain";
      } else {
        // Exit fullscreen; reset to cover
        videoElement.style.objectFit = "cover";
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div className="relative aspect-[9/16] h-[500px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-black/20 border-t-black" />
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        src={videoUrl}
        onLoadedData={onLoad}
        onError={onError}
      />
    </div>
  );
}
