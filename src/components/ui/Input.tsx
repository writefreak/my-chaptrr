import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[#111827]">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full px-3.5 py-2.5 rounded-md border text-sm text-[#111827] placeholder:text-[#9CA3AF]",
            "border-[#E5E7EB] bg-white",
            "focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent",
            "transition-all duration-200",
            error && "border-red-400 focus:ring-red-400",
            className
          )}
          {...props}
        />
        {hint && !error && <p className="text-xs text-[#6B7280]">{hint}</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[#111827]">
            {label}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          className={cn(
            "w-full px-3.5 py-2.5 rounded-md border text-sm text-[#111827] placeholder:text-[#9CA3AF] resize-none",
            "border-[#E5E7EB] bg-white",
            "focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent",
            "transition-all duration-200",
            error && "border-red-400",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
