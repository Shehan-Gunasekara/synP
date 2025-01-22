import React from "react";
import { Category } from "../../types";

interface TemplateFiltersProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Templates" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "business", label: "Business" },
  { value: "professional", label: "Professional" },
];

export function TemplateFilters({
  selectedCategory,
  onCategoryChange,
}: TemplateFiltersProps) {
  return (
    <div className="flex items-center sm:space-x-2 space-x-1 pb-2 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category.value} // Added `key` prop for unique identification
          type="button" // Ensures button does not submit a form
          className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none text-[10px] sm:text-sm md:text-sm px-3 sm:px-4 py-2 sm:py-2 ${
            selectedCategory === category.value
              ? "bg-black text-white hover:bg-black/90"
              : "text-black/60 hover:text-black hover:bg-black/5"
          }`}
          onClick={() => onCategoryChange(category.value)}
          aria-pressed={selectedCategory === category.value} // Accessibility improvement
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
