import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: string;
  className?: string;
  gradient?: boolean;
}

export const SectionTitle = ({ children, className, gradient = true }: SectionTitleProps) => {
  return (
    <motion.h2
      className={cn(
        "text-3xl md:text-4xl font-bold mb-12 text-center",
        gradient ? "text-gradient" : "text-foreground",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
};