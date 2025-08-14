import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  variant?: "filled" | "outline";
  className?: string;
  onClick?: () => void;
  href?: string;
  size?: "sm" | "md" | "lg";
}

export const GradientButton = ({ 
  children, 
  variant = "filled", 
  className, 
  onClick, 
  href,
  size = "md" 
}: GradientButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 cursor-pointer select-none",
    sizeClasses[size],
    variant === "filled" ? "btn-gradient text-white" : "btn-outline text-foreground",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};