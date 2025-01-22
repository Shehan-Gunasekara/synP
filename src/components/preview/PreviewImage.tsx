import React from "react";
import { AlertCircle, Brain, Mic, Video } from "lucide-react";

export function PreviewImage({
  isNoCredits,
  type,
  isLoading = false,
}: {
  isNoCredits: boolean;
  type: number;
  isLoading?: boolean;
}) {
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/purchase");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  return (
    <div className="aspect-[4/3] bg-gradient-to-br from-black/5 to-black/10 relative h-[500px] w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        {isNoCredits ? (
          <>
            {" "}
            <div className="flex flex-col items-left p-1 gap-2 rounded-lg">
              <div className=" text-red-700 sm:text-[15px] text-sm font-semibold flex flex-row items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />{" "}
                <p>Not enough credits</p>
              </div>
              <div className="text-gray-600 sm:text-xs text-[11px]">
                You need to add some credits to run this model.
              </div>
              <div>
                <button
                  className="px-2 py-1 sm:text-xs text-sm border border-black   font-semibold mt-2"
                  onClick={handlePurchase}
                >
                  Add credits
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {isLoading ? (
              <div className="flex min-h-9 flex-col justify-center w-full h-full items-center bg-gray-50">
                <div className="relative w-32 h-32">
                  {/* Circular path for icons to rotate */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <Brain className="absolute right-0 top-0 w-8 h-8 text-purple-500 animate-pulse" />
                    {(type == 1 || type == 3) && (
                      <Video className="absolute bottom-0 w-8 h-8 text-blue-500 animate-pulse" />
                    )}
                    {type == 2 && (
                      <Mic className="absolute bottom-0 w-8 h-8 text-blue-500 animate-pulse" />
                    )}
                  </div>
                  {/* Center processing circle */}
                  <div className="absolute inset-4 rounded-full border-4 border-t-blue-500 border-r-purple-500 border-b-blue-500 border-l-purple-500 animate-spin"></div>
                  {/* Inner glow */}
                  <div className="absolute inset-8 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full animate-pulse"></div>
                </div>
                <p className="mt-6 text-sm text-gray-600 animate-pulse">
                  AI Video Generation in Progress
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  Transforming with artificial intelligence
                </p>
              </div>
            ) : (
              <p className="text-black/40 text-sm lg:text-base font-light flex flex-col items-center gap-4">
                {(type == 1 || type == 3) && <Video className="w-16 h-16 text-blue-500" />}
                {type == 2 && <Mic className="w-16 h-16 text-purple-500" />}
                Your creation will appear here
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
