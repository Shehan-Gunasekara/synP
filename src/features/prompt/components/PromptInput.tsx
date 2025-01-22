import React, { useState, useEffect, useRef } from "react";
import { PromptTemplates } from "./templates";
import { PromptTextarea } from "./PromptTextarea";
import { PromptSettings } from "./settings";
import { PromptControls } from "./PromptControls";
import { usePromptState } from "../hooks/usePromptState";
import { AlertCircle } from "lucide-react";
import { auth } from "../../../lib/firebase";
import { getIdToken } from "firebase/auth";
import { useAuth } from "../../auth/context/useAuth";

interface PromptInputProps {
  setVideoLoading: (loading: boolean) => void;
  setVideoUrl: (url: string | null) => void;
  setIsNoCredits: any;
}

interface UserDetails {
  credits: number;
  email: string;
  username: string;
}

export function PromptInput({
  setVideoLoading,
  setVideoUrl,
  setIsNoCredits,
}: PromptInputProps) {
  const { prompt, settings, setPrompt, updateSettings } = usePromptState();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const { userDetails, setUserDetails } = useUserStore();
  const { user, userData, userCredits, setUserCredits } = useAuth();
  const requestInterval = useRef<NodeJS.Timeout | null>(null);
  const countDown = useRef(0);
  const [currentprogress, setCurrentProgress] = useState(0);
  const [totalprogress, setTotalProgress] = useState(0);

  const generateActor = async () => {
    if (loading) return;
    setError(null);
    setTotalProgress(0);
    // setVideoLoading(true);

    try {
      if (!user) {
        setError("Please log in to the system to generate the video.");
        return;
      }

      if (!prompt) {
        setError("Prompt cannot be empty.");
        return;
      }

      if (!user) {
        setError("Unable to verify user credits. Please try again.");
        return;
      }

      if (userCredits < 1.75) {
        setIsNoCredits(true);
        return;
      }

      const token = auth.currentUser
        ? await getIdToken(auth.currentUser)
        : null;

      if (!token) {
        setError("Unable to verify user credentials. Please try again.");
        return;
      }
      setLoading(true);
      setVideoLoading(true);
      ///////////////////////demo////////////////////////
      if (userData.email === import.meta.env.VITE_DEMO_USER) {
        const res = await fetch(
          `${import.meta.env.VITE_END_POINT_URL}/api/fal/v1/demoUGCGenerate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(token && { Authorization: token }),
            },
            body: JSON.stringify({
              seeds: settings.seed,
              prompt: prompt,
              pro_mode: settings.enhancedDetail,
              aspect_ratio: settings.aspectRatio,
              resolution: settings.resolution,
              user_email: user.email,
              user_id: userData._id,
            }),
          }
        );
        const data = await res.json();

        if (data) {
          setCurrentProgress(100);
          setTotalProgress(100);
          // setVideoUrl(data.videoUrl);

          requestInterval.current = setInterval(async () => {
            if (countDown.current === 10) {
              countDown.current = 0;
              const token = auth.currentUser
                ? await getIdToken(auth.currentUser)
                : null;
              const res = await fetch(
                `${
                  import.meta.env.VITE_END_POINT_URL
                }/api/fal/v1/generatedVideo`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    ...(token && { Authorization: token }),
                  },
                  body: JSON.stringify({
                    request_id: data.requestId,
                  }),
                }
              );
              const statusData = await res.json();
              if (statusData) {
                if (statusData.status === "completed") {
                  setLoading(false);
                  setVideoLoading(false);
                  if (requestInterval.current) {
                    setUserCredits(userCredits - 1.75);
                    setLoading(false);
                    setVideoUrl(statusData.outputUrl);
                    clearInterval(requestInterval.current);
                  }
                }
              }
            } else {
              countDown.current += 1;
            }
          }, 1000);
        }

        return;
      }

      ///////////////////////////////////////////////////

      const res = await fetch(
        `${import.meta.env.VITE_END_POINT_URL}/api/fal/v1/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: token }),
          },
          body: JSON.stringify({
            seeds: settings.seed,
            prompt: prompt,
            pro_mode: settings.enhancedDetail,
            aspect_ratio: settings.aspectRatio,
            resolution: settings.resolution,
            user_email: user.email,
            user_id: userData._id,
          }),
        }
      );

      const data = await res.json();

      if (data) {
        // setVideoUrl(data.videoUrl);
        try {
          const res = await fetch(
            `${import.meta.env.VITE_END_POINT_URL}/api/fal/v1/generatedVideo`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: token }),
              },
              body: JSON.stringify({
                request_id: data.requestId,
              }),
            }
          );
          const statusData = await res.json();
          if (statusData) {
            if (statusData.status === "completed") {
              setLoading(false);
              setVideoLoading(false);
              if (requestInterval.current) {
                setUserCredits(userCredits - 1.75);
                setLoading(false);
                setVideoUrl(statusData.outputUrl);
                clearInterval(requestInterval.current);
              }
            } else {
              setCurrentProgress(statusData.progress.currentprogress);
              setTotalProgress(statusData.progress.totalprogress);
            }
          }
        } catch (err) {
          console.error("Error in fetch", err);
          if (requestInterval.current) {
            clearInterval(requestInterval.current);
            setError("Failed to generate video. Please try again later.");
            setLoading(false);
          }
        }
        requestInterval.current = setInterval(async () => {
          if (countDown.current === 75) {
            try {
              countDown.current = 0;
              const token = auth.currentUser
                ? await getIdToken(auth.currentUser)
                : null;
              const res = await fetch(
                `${
                  import.meta.env.VITE_END_POINT_URL
                }/api/fal/v1/generatedVideo`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    ...(token && { Authorization: token }),
                  },
                  body: JSON.stringify({
                    request_id: data.requestId,
                  }),
                }
              );
              const statusData = await res.json();
              if (statusData) {
                if (statusData.status === "completed") {
                  setLoading(false);
                  setVideoLoading(false);
                  if (requestInterval.current) {
                    setUserCredits(userCredits - 1.75);
                    setLoading(false);
                    setVideoUrl(statusData.outputUrl);
                    clearInterval(requestInterval.current);
                  }
                } else {
                  setCurrentProgress(statusData.progress.currentprogress);
                  setTotalProgress(statusData.progress.totalprogress);
                }
              }
            } catch (err) {
              console.error("Error in fetch", err);
              if (requestInterval.current) {
                clearInterval(requestInterval.current);
                setError("Failed to generate video. Please try again later.");
                setLoading(false);
              }
            }
          } else {
            countDown.current += 1;
          }
        }, 1000);
      }

      // const response = await axios.post(`${import.meta.env.VITE_END_POINT_URL}/api/fal/v1/generate`, {
      //   prompt: prompt,
      //   pro_mode: settings.enhancedDetail,
      //   aspect_ratio: settings.aspectRatio,
      //   resolution: settings.resolution,
      //   user_email: user.email
      // }, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   }
      // });
    } catch (err: any) {
      console.error("Generation failed:", err);
      setError(
        err.response?.message ||
          "Failed to generate video. Please try again later."
      );
      setLoading(false);
      setVideoLoading(false);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <header>
          <h2 className="text-base sm:text-xl md:text-2xl font-medium mb-2">
            Quick Start Templates
          </h2>
          <p className=" text-xs sm:text-base md:text-lg  text-black/60">
            Choose a template or create your own AI actor
          </p>
        </header>
        <PromptTemplates
          onSelect={(prompt) => {
            setPrompt(prompt);
            document
              .getElementById("prompt-input")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          selectedPrompt={prompt}
        />
      </section>

      <section id="prompt-input" className="space-y-8 ">
        <PromptTextarea value={prompt} onChange={setPrompt} />
        <PromptSettings settings={settings} onUpdate={updateSettings} />

        {error && (
          <div className="flex items-center p-1 gap-2 rounded-lg text-red-700 text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}
        <PromptControls
          onClick={generateActor}
          loading={loading}
          currentprogress={currentprogress}
          totalprogress={totalprogress}
        />
      </section>
    </div>
  );
}
