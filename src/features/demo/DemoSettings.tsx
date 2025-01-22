import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Settings } from "lucide-react";


export function DemoSettings() {
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
            value={"123456"}
            // disabled
          />
          <Select
            label="Aspect Ratio"
            value="9:16"
            // disabled
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
            value={"1080p"}
            // disabled
            options={[{ value: "1080p", label: "1080p" }]}
          />
        </div>
      </div>
    </Card>
  );
}
