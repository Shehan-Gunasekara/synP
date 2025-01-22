import React from 'react';
import { Button } from '../../../../components/ui/Button';
import { VideoCategory } from '../../types';

interface Props {
  selected: VideoCategory | 'all';
  onChange: (category: VideoCategory | 'all') => void;
}

const categories = [
  { value: 'all', label: 'All' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'business', label: 'Business' }
] as const;

export function CategoryFilter({ selected, onChange }: Props) {
  return (
    <div className="flex items-center space-x-2">
      {categories.map(category => (
        <Button
          key={category.value}
          variant={selected === category.value ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onChange(category.value)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}