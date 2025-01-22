import React from "react";
import { Button } from "../ui/Button";
import { Download } from "lucide-react";

interface PreviewActionsProps {
  videoUrl: string | null;
}

export function PreviewActions({ videoUrl }: PreviewActionsProps) {
  const handleDownload = () => {
    if (!videoUrl) return;

    try {
      const link = document.createElement("a");
      link.href = videoUrl;
      link.download = videoUrl.split("/").pop() || "video.mp4";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="p-4 border-t border-black/5">
      <button
        className="w-full inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none bg-white/10 backdrop-blur-sm text-black border border-black/10 hover:bg-white/20 text-sm sm:text-sm md:text-lg px-5 sm:px-6 py-2 sm:py-3"
        onClick={handleDownload}
        disabled={!videoUrl}
      >
        <Download className="h-4 w-4 mr-2" />
        {videoUrl ? "Download Video" : "No Video Available"}
      </button>
    </div>
  );
}
