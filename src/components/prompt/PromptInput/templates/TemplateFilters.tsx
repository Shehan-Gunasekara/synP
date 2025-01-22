import React from 'react';
import { Button } from '../../../ui/Button';

type Category = 'all' | 'lifestyle' | 'business' | 'professional';

interface TemplateFiltersProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Templates' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'business', label: 'Business' },
  { value: 'professional', label: 'Professional' }
];

export function TemplateFilters({ selectedCategory, onCategoryChange }: TemplateFiltersProps) {
  return (
    <div className="flex items-center space-x-2 pb-2 overflow-x-auto">
      {categories.map(category => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onCategoryChange(category.value)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}