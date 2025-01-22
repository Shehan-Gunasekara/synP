import { Input } from "../../components/ui/Input";

interface DemoTextAreaProps {
    value: string;
}

export function DemoTextArea({ value }: DemoTextAreaProps) {
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
        placeholder="A charismatic young professional with a warm smile and confident demeanor. They speak with enthusiasm and natural gestures, wearing business casual attire..."
        className="text-base"
        disabled
      />
    </div>
  );
}
