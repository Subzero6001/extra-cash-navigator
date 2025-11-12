import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LeatherTextureProps {
  children: ReactNode;
  className?: string;
  withStitching?: boolean;
}

export const LeatherTexture = ({ 
  children, 
  className,
  withStitching = false 
}: LeatherTextureProps) => {
  return (
    <div 
      className={cn(
        "leather-texture relative",
        withStitching && "leather-stitching",
        className
      )}
    >
      {children}
    </div>
  );
};
