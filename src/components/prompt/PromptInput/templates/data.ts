import { Beach, Mic, Briefcase, PresentationScreen, Stethoscope, Smartphone } from 'lucide-react';

export interface Template {
  id: string;
  title: string;
  description: string;
  prompt: string;
  icon: typeof Beach;
  category: 'lifestyle' | 'business' | 'professional';
}

export const templates: Template[] = [
  {
    id: 'beach',
    title: 'Beach Lifestyle',
    description: 'Casual beach conversation',
    prompt: 'a beautiful caucasian blonde lady in a bikini at the beach speaking to the camera casually',
    icon: Beach,
    category: 'lifestyle'
  },
  {
    id: 'podcast',
    title: 'Podcast Host',
    description: 'Professional podcast setting',
    prompt: 'a shot of a guy wearing a hat speaking on a podcast room',
    icon: Mic,
    category: 'professional'
  },
  {
    id: 'office',
    title: 'Office Executive',
    description: 'Professional office environment',
    prompt: 'a shot of a white caucasian businessman, speaking causally in his office desk',
    icon: Briefcase,
    category: 'business'
  },
  {
    id: 'stage',
    title: 'Public Speaker',
    description: 'Conference presentation',
    prompt: 'a shot of a white caucasian businessman, speaking causally on a stage',
    icon: PresentationScreen,
    category: 'business'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Professional',
    description: 'Medical environment',
    prompt: 'a shot of a nurse, the nurse is speaking causally in front of the camera',
    icon: Stethoscope,
    category: 'professional'
  },
  {
    id: 'selfie',
    title: 'Selfie Style',
    description: 'Casual phone recording',
    prompt: 'a shot of a woman, the woman is speaking causally, iPhone selfie',
    icon: Smartphone,
    category: 'lifestyle'
  }
];