import { cn } from "@/lib/utils";

interface CircleBadgeProps {
  icon: string;
  label: string;
  className?: string;
}

export function CircleBadge({ icon, label, className }: CircleBadgeProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full",
        "w-10 h-10 bg-card border-2 border-border",
        "hover:border-primary transition-colors duration-200",
        "cursor-pointer group",
        className
      )}
      title={label}
    >
      <span className="text-lg">{icon}</span>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-xs bg-popover text-popover-foreground px-2 py-1 rounded shadow-lg">
          {label}
        </span>
      </div>
    </div>
  );
}