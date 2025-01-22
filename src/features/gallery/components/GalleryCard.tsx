// // import React from 'react';
// import { Card } from '../../../components/ui/Card';
// import { Button } from '../../../components/ui/Button';
// import { Eye, Download, Heart } from 'lucide-react';
// import { GalleryItem } from '../types';

// interface Props {
//   item: GalleryItem;
// }

// export function GalleryCard({ item }: Props) {
//   return (
//     <Card className="overflow-hidden group">
//       <div className="aspect-video relative overflow-hidden">
//         <img 
//           src={item.imageUrl} 
//           alt={item.title}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         <Button
//           variant="secondary"
//           size="sm"
//           className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         >
//           <Download className="h-4 w-4 mr-2" />
//           Download
//         </Button>
//       </div>
      
//       <div className="p-6 space-y-4">
//         <div>
//           <h3 className="font-medium mb-1">{item.title}</h3>
//           <p className="text-sm text-black/60">{item.description}</p>
//         </div>

//         <div className="flex items-center justify-between pt-4 border-t border-black/5">
//           <div className="flex items-center space-x-3">
//             <img 
//               src={item.author.avatar} 
//               alt={item.author.name}
//               className="h-8 w-8 rounded-full object-cover"
//             />
//             <span className="text-sm font-medium">{item.author.name}</span>
//           </div>
          
//           <div className="flex items-center space-x-4 text-sm text-black/60">
//             <span className="flex items-center">
//               <Eye className="h-4 w-4 mr-1" />
//               {item.stats.views.toLocaleString()}
//             </span>
//             <span className="flex items-center">
//               <Heart className="h-4 w-4 mr-1" />
//               {item.stats.likes.toLocaleString()}
//             </span>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }