import React from 'react';
import { Sparkles } from 'lucide-react';

export function GalleryHeader() {
  return (
    <div className="text-center space-y-6">
      <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-black/5">
        <Sparkles className="h-6 w-6" />
      </div>
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-semibold">Community Gallery</h1>
        <p className="text-xl text-black/60">
          Explore AI-generated UGC actors created by our community
        </p>
      </div>
    </div>
  );
}