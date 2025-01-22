import React, { useState } from 'react';
import { TemplateFilters } from './templates/TemplateFilters';
import { TemplateGrid } from './templates/TemplateGrid';
import { templates } from './templates/data';

interface PromptTemplatesProps {
  onSelect: (prompt: string) => void;
  selectedPrompt?: string;
}

export function PromptTemplates({ onSelect, selectedPrompt }: PromptTemplatesProps) {
  const [category, setCategory] = useState<'all' | 'lifestyle' | 'business' | 'professional'>('all');
  
  const filteredTemplates = category === 'all' 
    ? templates 
    : templates.filter(t => t.category === category);

  return (
    <div className="space-y-4">
      <TemplateFilters
        selectedCategory={category}
        onCategoryChange={setCategory}
      />
      <TemplateGrid
        templates={filteredTemplates}
        selectedPrompt={selectedPrompt}
        onSelect={onSelect}
      />
    </div>
  );
}