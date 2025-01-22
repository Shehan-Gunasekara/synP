import { Input } from "../../../components/ui/Input";

interface PromptTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

export function PromptTextarea({ value, onChange }: PromptTextareaProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-base  lg:text-xl font-medium">
        Describe Your AI Actor
      </h3>
      <p className="sm:text-sm text-xs text-black/60 mb-4">
        Describe the appearance, personality, and speaking style of your AI
        actor in detail.
      </p>
      <Input
        multiline
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="A charismatic young professional with a warm smile and confident demeanor. They speak with enthusiasm and natural gestures, wearing business casual attire..."
        className="text-base"
      />
    </div>
  );
}
