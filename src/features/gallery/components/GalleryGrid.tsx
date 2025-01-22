import React from 'react';
import { GalleryVideo } from '../types';
import { VideoCard } from './VideoCard/VideoCard';

interface Props {
  videos: GalleryVideo[];
}

export function GalleryGrid({ videos }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {videos.length > 0 ? (
        videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))
      ) : (
        <div className="col-span-full text-center py-12 space-y-3">
          <p className="text-2xl text-black/70">🎬 The Stage is Empty</p>
          <p className="text-black/50">Your masterpieces will appear here once you start creating</p>
        </div>
      )}
    </div>
  );
}