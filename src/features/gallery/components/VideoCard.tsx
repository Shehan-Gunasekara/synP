import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Download } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { GalleryVideo } from '../types';

interface Props {
  video: GalleryVideo;
}

export function VideoCard({ video }: Props) {
  return (
    <Card className="overflow-hidden group">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={video.thumbnailUrl} 
          alt={video.prompt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => window.open(video.videoUrl, '_blank')}
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-sm text-black/80">{video.prompt}</h3>
        <p className="text-xs text-black/40 mt-1">
          {new Date(video.createdAt).toLocaleDateString()}
        </p>
      </div>
    </Card>
  );
}