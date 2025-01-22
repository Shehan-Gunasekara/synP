import React from "react";
import { cn } from "../../utils/classNames";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
}

export function Select({ label, options, className, ...props }: SelectProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block sm:text-sm text-xs font-medium text-black/80">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={cn(
            "w-full appearance-none rounded-xl bg-white/50 backdrop-blur-sm border border-black/5",
            "pl-4  py-3 sm:text-sm text-[10px] text-black/80",
            "focus:outline-none focus:ring-2 focus:ring-black/10",
            "transition-all duration-200",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40 pointer-events-none" />
      </div>
    </div>
  );
}
