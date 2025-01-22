import { useState } from 'react';

export interface PromptState {
  prompt: string;
  setPrompt: (value: string) => void;
}

export function usePromptState(): PromptState {
  const [prompt, setPrompt] = useState('');

  const handleSetPrompt = (value: string) => {
    setPrompt(value);
  };

  return {
    prompt,
    setPrompt: handleSetPrompt,
  };
}