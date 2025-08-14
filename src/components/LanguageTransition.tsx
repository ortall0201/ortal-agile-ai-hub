import { motion } from "framer-motion";
import { useState } from "react";
import { Globe } from "lucide-react";

interface LanguageTransitionProps {
  href: string;
  label: string;
  title: string;
}

export const LanguageTransition = ({ href, label, title }: LanguageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTransitioning(true);
    
    // Create overlay effect
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[9999] pointer-events-none';
    overlay.style.background = 'linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)';
    overlay.style.opacity = '0';
    document.body.appendChild(overlay);
    
    // Animate overlay in
    overlay.animate([
      { opacity: 0, transform: 'scale(0) rotate(0deg)' },
      { opacity: 0.9, transform: 'scale(1.5) rotate(180deg)' }
    ], {
      duration: 600,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });
    
    // Wait for animation then navigate
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="p-2 rounded-xl bg-secondary/50 text-foreground hover:bg-secondary transition-all duration-300 flex items-center gap-1 relative overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={title}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Spinning globe on hover */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Globe size={16} />
      </motion.div>
      
      {/* Language label with slide effect */}
      <motion.span 
        className="text-xs font-medium relative z-10"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
      
      {/* Loading indicator */}
      {isTransitioning && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-80 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-3 h-3 border border-white rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </motion.a>
  );
};