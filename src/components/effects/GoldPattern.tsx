import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GoldPatternProps {
  children?: ReactNode;
  className?: string;
}

export const GoldPattern = ({ children, className }: GoldPatternProps) => {
  if (!children) {
    return (
      <div className={cn("gold-pattern absolute inset-0 pointer-events-none opacity-50", className)} />
    );
  }
  
  return (
    <div className={cn("gold-pattern relative", className)}>
      {children}
    </div>
  );
};
