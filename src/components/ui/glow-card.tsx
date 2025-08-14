import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const GlowCard = ({ children, className, hover = true, onClick }: GlowCardProps) => {
  return (
    <motion.div
      className={cn("glow-card p-6", !hover && "hover:transform-none hover:shadow-none", className)}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};