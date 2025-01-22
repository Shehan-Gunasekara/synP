import React from "react";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Toggle } from "../ui/Toggle";
import { Card } from "../ui/Card";

export function PromptSettings() {
  return (
    <Card className="p-6 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <Input
          type="number"
          label="Seed"
          placeholder="Random"
          min={0}
          max={999999}
        />
        <Select
          label="Aspect Ratio"
          defaultValue="9:16"
          options={[
            { value: "16:9", label: "16:9 Landscape" },
            { value: "9:16", label: "9:16 Portrait" },
          ]}
        />
      </div>

      <div className="flex items-center justify-between">
        <Toggle label="Enhanced Detail" />
        <Select
          className="w-40"
          label="Resolution"
          defaultValue="720p"
          options={[{ value: "720p", label: "720p" }]}
        />
      </div>
    </Card>
  );
}
