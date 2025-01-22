import React from "react";
import { Card } from "../../../../components/ui/Card";
import { Input } from "../../../../components/ui/Input";
import { Select } from "../../../../components/ui/Select";
import { Toggle } from "../../../../components/ui/Toggle";
import { Settings } from "lucide-react";
import { PromptSettings as SettingsType } from "../../types";

interface Props {
  settings: SettingsType;
  onUpdate: (settings: Partial<SettingsType>) => void;
}

export function PromptSettings({ settings, onUpdate }: Props) {
  return (
    <Card className="overflow-hidden">
      <div className="px-6 py-4 border-b border-black/5 flex items-center space-x-3">
        <Settings className="h-5 w-5 text-black/40" />
        <h3 className="font-medium text-sm sm:text-base">
          Generation Settings
        </h3>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Input
            type="number"
            label="Seed"
            placeholder="Random"
            min={0}
            max={999999}
            value={settings.seed || ""}
            onChange={(e) =>
              onUpdate({
                seed: e.target.value ? Number(e.target.value) : undefined,
              })
            }
          />
          <Select
            label="Aspect Ratio"
            value="9:16"
            onChange={(e) =>
              onUpdate({ aspectRatio: e.target.value as "16:9" | "9:16" })
            }
            options={[
              // { value: "16:9", label: "16:9 Landscape" },
              { value: "9:16", label: "9:16 Portrait" },
            ]}
          />
        </div>

        <div className="flex items-center justify-between">
          {/* <Toggle 
            label="Enhanced Detail" 
            checked={settings.enhancedDetail}
            onChange={(checked) => onUpdate({ enhancedDetail: checked })}
          /> */}
          <Select
            className="w-28 sm:w-40"
            label="Resolution"
            value={settings.resolution}
            onChange={(e) =>
              onUpdate({ resolution: e.target.value as "1080p" })
            }
            options={[{ value: "1080p", label: "1080p" }]}
          />
        </div>
      </div>
    </Card>
  );
}
