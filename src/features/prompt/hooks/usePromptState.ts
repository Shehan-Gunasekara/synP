import { useState } from "react";
import { PromptState, PromptSettings } from "../types";

const defaultSettings: PromptSettings = {
  aspectRatio: "9:16",
  enhancedDetail: false,
  resolution: "720p",
};

export function usePromptState(): PromptState {
  const [prompt, setPrompt] = useState("");
  const [settings, setSettings] = useState<PromptSettings>(defaultSettings);

  const handleSetPrompt = (value: string) => {
    setPrompt(value);
  };

  const updateSettings = (newSettings: Partial<PromptSettings>) => {
    setSettings((current) => ({
      ...current,
      ...newSettings,
    }));
  };

  return {
    prompt,
    settings,
    setPrompt: handleSetPrompt,
    updateSettings,
  };
}
