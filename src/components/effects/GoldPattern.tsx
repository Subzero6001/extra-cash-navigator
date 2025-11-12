import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GoldPatternProps {
  children: ReactNode;
  className?: string;
}

export const GoldPattern = ({ children, className }: GoldPatternProps) => {
  return (
    <div className={cn("gold-pattern relative", className)}>
      {children}
    </div>
  );
};
