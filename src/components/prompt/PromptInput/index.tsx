// import React from "react";
// import { PromptTemplates } from "./PromptTemplates";
// import { PromptTextarea } from "./PromptTextarea";
// import { PromptSettings } from "./PromptSettings";
// import { PromptControls } from "./PromptControls";
// import { usePromptState } from "./usePromptState";
// import { useAuth } from "../../../features/auth/hooks/useAuth";

// export function PromptInput() {
//   const { prompt, setPrompt } = usePromptState();
//   const { user } = useAuth();
//   const generateActor = () => {
//     if (!user) {
//       window.history.pushState({}, "", "/auth");
//       window.dispatchEvent(new PopStateEvent("popstate"));
//       return;
//     }
//   };

//   return (
//     <div className="space-y-12">
//       <section className="space-y-6">
//         <div>
//           <h2 className="text-base sm:text-xl md:text-2xl  font-medium mb-2">
//             Quick Start Templates
//           </h2>
//           <p className="text-lg text-black/60">
//             Choose a template or customize your own actor
//           </p>
//         </div>

//         <PromptTemplates onSelect={setPrompt} selectedPrompt={prompt} />
//       </section>

//       <section className="space-y-8">
//         <PromptTextarea value={prompt} onChange={setPrompt} />
//         <PromptSettings />
//         <PromptControls onClick={generateActor} />
//       </section>
//     </div>
//   );
// }
