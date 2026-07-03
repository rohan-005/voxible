import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  showArrow?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  showArrow = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2",
        "border px-5 py-3",
        "font-main text-sm",
        "transition-all duration-200",
        variant === "primary" &&
          "border-primary bg-primary text-white hover:opacity-90",
        variant === "outline" &&
          "border-border-strong bg-surface text-foreground hover:border-primary hover:text-primary",
        className
      )}
      {...props}
    >
      {children}

      {showArrow && (
        <ArrowRight
          size={15}
          strokeWidth={1.7}
        />
      )}
    </button>
  );
}