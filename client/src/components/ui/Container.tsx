import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto min-w-0 w-[calc(100%-2rem)] sm:w-[94%] lg:w-[90%] max-w-[2000px]",
        className
      )}
    >
      {children}
    </div>
  );
}