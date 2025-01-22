import React from 'react';
import { Input } from '../../ui/Input';

interface PromptTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

export function PromptTextarea({ value, onChange }: PromptTextareaProps) {
  return (
    <Input
      multiline
      rows={4}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="A professional business woman in a modern office setting, wearing a navy suit..."
      className="text-base"
    />
  );
}