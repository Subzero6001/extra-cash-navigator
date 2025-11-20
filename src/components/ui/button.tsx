import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "liquid-glass": "relative overflow-hidden bg-gradient-to-br from-cta-green to-cta-green/80 text-primary-foreground font-bold uppercase tracking-[0.15em] border border-gold/30 rounded-2xl shadow-premium hover:shadow-luxury transition-all duration-500 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-gold-light/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-400 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000 after:ease-in-out backdrop-blur-sm [&>*]:relative [&>*]:z-10",
        "cta-primary": "bg-gradient-to-br from-cta-green to-primary text-gold font-bold uppercase tracking-wider hover:scale-105 hover:shadow-luxury rounded-[20px] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity shadow-premium",
        "cta-gold": "relative overflow-hidden bg-gradient-to-br from-gold-light via-gold to-bronze text-primary font-black uppercase tracking-[0.2em] border-2 border-gold rounded-2xl shadow-[0_8px_32px_rgba(212,175,55,0.5)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.7)] hover:scale-105 transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_60%)] after:opacity-0 hover:after:opacity-100 after:transition-opacity animate-pulse-subtle [&>*]:relative [&>*]:z-10",
        "cta-leather": "relative overflow-hidden bg-gradient-to-br from-leather via-leather/90 to-bronze text-gold font-black uppercase tracking-[0.2em] border-2 border-gold/60 rounded-2xl shadow-[0_8px_32px_rgba(93,78,55,0.5)] hover:shadow-[0_12px_48px_rgba(93,78,55,0.7)] hover:scale-105 transition-all duration-500 after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-gold/30 after:to-transparent after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000 [&>*]:relative [&>*]:z-10",
        "cta-hybrid": "relative overflow-hidden bg-gradient-to-br from-cta-green via-primary to-cta-green/80 text-gold font-black uppercase tracking-[0.2em] border-2 border-gold/70 rounded-2xl shadow-[0_8px_32px_rgba(45,106,79,0.5),0_0_24px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_48px_rgba(45,106,79,0.7),0_0_36px_rgba(212,175,55,0.5)] hover:scale-105 transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-gold/40 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 [&>*]:relative [&>*]:z-10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-16 px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
