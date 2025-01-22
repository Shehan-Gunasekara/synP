import React from 'react';
import { PlayButton } from './PlayButton';
import { VideoThumbnail } from './VideoThumbnail';
import { VideoOverlay } from './VideoOverlay';

interface Props {
  thumbnailUrl: string;
  onPlay: () => void;
}

export function VideoPlayer({ thumbnailUrl, onPlay }: Props) {
  return (
    <div className="relative group" onClick={onPlay}>
      <VideoThumbnail url={thumbnailUrl} />
      <VideoOverlay />
      <PlayButton />
    </div>
  );
}