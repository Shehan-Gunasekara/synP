import React from 'react';
import { AIActorSettings } from '../../types';
import { SettingsField } from './SettingsField';
import { AspectRatioSelect } from './AspectRatioSelect';
import { ResolutionSelect } from './ResolutionSelect';
import { EnhancedDetailToggle } from './EnhancedDetailToggle';

interface Props {
  settings: AIActorSettings;
  onUpdate: (settings: Partial<AIActorSettings>) => void;
}

export function SettingsForm({ settings, onUpdate }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <SettingsField
          type="number"
          label="Seed"
          value={settings.seed}
          onChange={(value) => onUpdate({ seed: value })}
          placeholder="Random"
          min={0}
          max={999999}
        />
        <AspectRatioSelect
          value={settings.aspectRatio}
          onChange={(value) => onUpdate({ aspectRatio: value })}
        />
      </div>
      
      <div className="flex items-center justify-between">
        <EnhancedDetailToggle
          checked={settings.enhancedDetail}
          onChange={(value) => onUpdate({ enhancedDetail: value })}
        />
        <ResolutionSelect
          value={settings.resolution}
          onChange={(value) => onUpdate({ resolution: value })}
        />
      </div>
    </div>
  );
}