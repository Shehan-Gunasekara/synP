import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

export function PreviewInfo() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between text-sm text-black/60">
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span>2 minutes</span>
        </div>
        <div className="flex items-center space-x-2">
          <Sparkles className="h-4 w-4" />
          <span>Ultra Quality</span>
        </div>
      </div>
      
      <div className="relative h-1 bg-black/5 rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-black transition-all duration-500"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}