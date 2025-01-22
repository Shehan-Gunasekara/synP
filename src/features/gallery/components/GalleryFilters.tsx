import React from 'react';
import { Button } from '../../../components/ui/Button';
import { Search } from 'lucide-react';
import { Input } from '../../../components/ui/Input';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'business', label: 'Business' },
  { value: 'professional', label: 'Professional' }
];

export function GalleryFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div className="flex items-center space-x-2">
        {categories.map(category => (
          <Button
            key={category.value}
            variant={category.value === 'all' ? 'primary' : 'ghost'}
            size="sm"
          >
            {category.label}
          </Button>
        ))}
      </div>
      
      <div className="w-full sm:w-64">
        <Input
          placeholder="Search gallery..."
          className="pl-10"
          icon={<Search className="h-4 w-4 text-black/40" />}
        />
      </div>
    </div>
  );
}