import React from 'react';
import { Clock, DollarSign } from 'lucide-react';

export function ResultPreview() {
  return (
    <div className="space-y-4">
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Preview will appear here</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Estimated time: 4 minutes</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <DollarSign className="h-4 w-4" />
          <span>Cost per generation: $0.40</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '0%' }}></div>
        </div>
      </div>
    </div>
  );
}