import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../../../../components/ui/Input';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search gallery..."
        className="pl-10"
      />
    </div>
  );
}