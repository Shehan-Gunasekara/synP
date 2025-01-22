import React from "react";
import { Check, ChevronRight, Video, Mic } from "lucide-react";

interface Step {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  icon: JSX.Element;
}

interface GeneratorStepsProps {
  currentStep: number;
  videoGenerated: boolean;
  lipSyncComplete: boolean;
  setCurrentStep: (step: number) => void;
}

export function GeneratorSteps({
  currentStep,
  videoGenerated,
  lipSyncComplete,
  setCurrentStep,
}: GeneratorStepsProps) {
  const steps: Step[] = [
    {
      id: 1,
      name: "Generate Video",
      description: "Create your AI UGC actor",
      isCompleted: videoGenerated,
      isActive: currentStep === 1,
      icon: <Video className="w-5 h-5" />,
    },
    {
      id: 2,
      name: "Lip Sync",
      description: "Add voice to your actor",
      isCompleted: lipSyncComplete,
      isActive: currentStep === 2,
      icon: <Mic className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mb-8 md:mb-12 px-4">
      <nav aria-label="Progress">
        <ol role="list" className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-12">
          {steps.map((step, stepIdx) => (
            <>
              <li
                key={step.id}
                className="flex-1 min-w-[130px] sm:min-w-[200px] md:max-w-[280px]"
              >
                <div 
                  onClick={() => setCurrentStep(step.id)}
                  className={`group flex flex-col transition-all duration-200 ${
                    step.isActive ? "transform scale-[1.02] md:scale-105" : ""
                  } cursor-pointer hover:transform hover:scale-[1.02] md:hover:scale-105`}
                >
                  <div className={`
                    relative p-3 sm:p-4 md:p-6 rounded-xl border-2 transition-all duration-300
                    ${step.isCompleted 
                      ? "bg-black border-black" 
                      : step.isActive
                      ? "bg-gradient-to-br from-gray-50 to-gray-100 border-black"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }
                  `}>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      <div className={`
                        h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-lg flex items-center justify-center transition-all duration-300
                        ${step.isCompleted
                          ? "bg-white"
                          : step.isActive
                          ? "bg-black"
                          : "bg-gray-100"
                        }
                      `}>
                        {step.isCompleted ? (
                          <Check className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${step.isCompleted ? "text-black" : "text-white"}`} />
                        ) : (
                          <span className={`
                            ${step.isActive ? "text-white" : "text-gray-400"}
                            transition-colors duration-200
                          `}>
                            {React.cloneElement(step.icon, { className: 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' })}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className={`
                          text-xs sm:text-sm md:text-base font-semibold transition-all duration-200
                          ${step.isCompleted 
                            ? "text-white" 
                            : step.isActive
                            ? "text-black"
                            : "text-gray-600 group-hover:text-gray-900"
                          }
                        `}>
                          {step.name}
                        </span>
                        <p className={`
                          text-[10px] sm:text-xs md:text-sm transition-all duration-200
                          ${step.isCompleted 
                            ? "text-gray-300" 
                            : step.isActive
                            ? "text-gray-600"
                            : "text-gray-400 group-hover:text-gray-600"
                          }
                        `}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {stepIdx !== steps.length - 1 && (
                <div className="flex items-center justify-center w-8 sm:w-10 md:w-20">
                  <div className={`
                    w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center
                    transition-all duration-300
                    ${steps[stepIdx].isCompleted 
                      ? "bg-black border-black" 
                      : "bg-white border-gray-200"
                    }
                  `}>
                    <ChevronRight className={`
                      w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 transition-all duration-200
                      ${steps[stepIdx].isCompleted ? "text-white" : "text-gray-300"}
                    `} />
                  </div>
                </div>
              )}
            </>
          ))}
        </ol>
      </nav>
    </div>
  );
}
