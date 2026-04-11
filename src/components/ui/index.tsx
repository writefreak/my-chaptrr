import { cn } from "@/lib/utils";

// Badge
interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "green" | "red" | "yellow" | "gray" | "blue";
  className?: string;
}

export function Badge({ children, variant = "gray", className }: BadgeProps) {
  const variants = {
    orange: "bg-[#FFF7ED] text-[#EA6C0A] border border-[#FED7AA]",
    green: "bg-green-50 text-green-700 border border-green-200",
    red: "bg-red-50 text-red-700 border border-red-200",
    yellow: "bg-yellow-50 text-yellow-700 border border-yellow-200",
    gray: "bg-[#F3F4F6] text-[#6B7280] border border-[#E5E7EB]",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
  };
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}

// Card
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-white rounded-lg border border-[#F3F4F6] shadow-sm",
        onClick && "cursor-pointer hover:border-[#E5E7EB] hover:shadow-md transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}

// Stat card
interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  icon?: React.ReactNode;
  trend?: { value: string; up: boolean };
  className?: string;
}

export function StatCard({ label, value, sub, icon, trend, className }: StatCardProps) {
  return (
    <div className={cn("bg-white rounded-lg border border-[#F3F4F6] p-5 shadow-sm", className)}>
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">{label}</p>
        {icon && <div className="text-[#F97316]">{icon}</div>}
      </div>
      <p className="text-2xl font-semibold text-[#111827]">{value}</p>
      {sub && <p className="text-xs text-[#6B7280] mt-1">{sub}</p>}
      {trend && (
        <p className={cn("text-xs mt-1 font-medium", trend.up ? "text-green-600" : "text-red-500")}>
          {trend.up ? "↑" : "↓"} {trend.value}
        </p>
      )}
    </div>
  );
}

// Select
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
}

export function Select({ label, options, error, id, className, ...props }: SelectProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label htmlFor={inputId} className="text-sm font-medium text-[#111827]">{label}</label>}
      <select
        id={inputId}
        className={cn(
          "w-full px-3.5 py-2.5 rounded-md border border-[#E5E7EB] text-sm text-[#111827] bg-white",
          "focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent",
          "transition-all duration-200",
          className
        )}
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

// Modal
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className={cn("relative bg-white rounded-xl shadow-lg max-w-md w-full p-6 animate-fade-in", className)}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
            <button onClick={onClose} className="text-[#9CA3AF] hover:text-[#111827] transition-colors">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
